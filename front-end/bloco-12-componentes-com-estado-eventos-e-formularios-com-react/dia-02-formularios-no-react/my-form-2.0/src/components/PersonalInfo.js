import React from "react";
import SampleComponent from "./SampleComponent";
import personalInfo from "../public/data";

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
      return <SampleComponent
      key={name}
      name={name}
      type={type}
      charLimit={charLimit}
      value={this.state[name]}
      handleChange={this.handleChange}
      />
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
