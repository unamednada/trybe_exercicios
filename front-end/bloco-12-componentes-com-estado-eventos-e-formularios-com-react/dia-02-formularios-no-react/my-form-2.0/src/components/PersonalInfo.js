import React from "react";
import { personalInfo, states } from "../public/data";
import SampleInput from "./SampleInput";
import SampleSelect from "./SampleSelect";

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
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  createComponents() {
    return personalInfo.map(({ name, type, charLimit }) => {

      if (type !== 'select') {
        return <SampleInput
      key={name}
      name={name}
      type={type}
      charLimit={charLimit}
      value={this.state[name]}
      handleChange={this.handleChange}
      />
      } else {
        return <SampleSelect
        name={name}
        options={states}
        />
      }
    })
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
