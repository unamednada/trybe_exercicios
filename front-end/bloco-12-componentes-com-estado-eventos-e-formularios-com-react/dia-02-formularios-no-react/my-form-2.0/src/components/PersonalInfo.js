import React from "react";
import { personalInfo, states } from "../public/data";
import SampleInput from "./SampleInput";
import SampleSelect from "./SampleSelect";
import SampleRadio from "./SampleRadio";

class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      id: "",
      address: "",
      city: "",
      state: "",
      typeOfHousing: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange({ target }) {
    const { name, type, checked } = target;
    this.setState(() => {
      if (type === 'radio' && checked) {
        return {
          [name]: target.value
        }
      } else if (name === 'name') {
        return {
          [name]: target.value.toUpperCase()
        }
      } else if (name === 'address') {
        return {
        // Source: https://stackoverflow.com/questions/6555182/remove-all-special-characters-except-space-from-a-string-using-javascript
          [name]: target.value.replace(/[^a-zA-Z0-9 ãáóôõúéêç]/g, "")
        }
      } else if (!checked) {
        return {
          [name]: target.value
        }
      } 
    });
  }

  handleBlur({ target }) {
    const { name, value } = target;
    if (!isNaN(value[0])) {
      this.setState({
        [name]: '',
      })
    }
  }


  createComponents() {
    return personalInfo.map(({ name, type, charLimit, options }) => {
      if (type === "select") {
        return (
          <SampleSelect
            key={name}
            name={name}
            options={states}
            handleChange={this.handleChange}
          />
        );
      } else if (type === "radio") {
        return (
          <SampleRadio
            key={name}
            name={name}
            type={type}
            options={options}
            handleChange={this.handleChange}
          />
        );
      } else {
        return (
          <SampleInput
            key={name}
            name={name}
            type={type}
            charLimit={charLimit}
            value={this.state[name]}
            handleChange={this.handleChange}
            handleBlur={this.handleBlur}
          />
        );
      }
    });
  }

  render() {
    return (
      <fieldset>
        <legend>Personal Info</legend>
        {this.createComponents()}
      </fieldset>
    );
  }
}

export default PersonalInfo;
