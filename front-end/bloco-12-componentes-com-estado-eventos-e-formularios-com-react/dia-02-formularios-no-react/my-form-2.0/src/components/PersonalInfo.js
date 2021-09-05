import React from "react";
import SampleComponent from "./SampleComponent";

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
  render() {

    const { name } = this.state;

    return (
      <fieldset>
        <legend>Personal Info</legend>
        <SampleComponent type="text" name="name" charLimit="40" value={name} handleChange={this.handleChange} />
      </fieldset>
    );
  }
}

export default PersonalInfo;