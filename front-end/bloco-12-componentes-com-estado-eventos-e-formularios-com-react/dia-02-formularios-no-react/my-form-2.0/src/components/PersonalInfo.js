import React from "react";
import { personalInfo, states } from "../public/data";
import SampleInput from "./SampleInput";
import SampleSelect from "./SampleSelect";
import SampleRadio from "./SampleRadio";

class PersonalInfo extends React.Component {

  createComponents() {
    const { handlePersonalChange, handleBlur, values } = this.props;

    return personalInfo.map(({ name, type, charLimit, options }) => {
      if (type === "select") {
        return (
          <SampleSelect
            key={name}
            name={name}
            options={states}
            handleChange={handlePersonalChange}
          />
        );
      } else if (type === "radio") {
        return (
          <SampleRadio
            key={name}
            name={name}
            type={type}
            options={options}
            handleChange={handlePersonalChange}
          />
        );
      } else {
        return (
          <SampleInput
            key={name}
            name={name}
            type={type}
            charLimit={charLimit}
            value={values[name]}
            handleChange={handlePersonalChange}
            handleBlur={handleBlur}
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
