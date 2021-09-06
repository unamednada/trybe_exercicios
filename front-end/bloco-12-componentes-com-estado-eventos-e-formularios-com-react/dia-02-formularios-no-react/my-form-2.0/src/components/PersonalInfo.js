import React from "react";
import { personalInfo, states } from "../public/data";
import SampleInput from "./SampleInput";
import SampleSelect from "./SampleSelect";
import SampleRadio from "./SampleRadio";
import "./Info.css";

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
          <article class="Radio-container">
            <label htmlFor={name}>
              <h2>House</h2>
              <SampleRadio
                key={name}
                name={name}
                type={type}
                options={options}
                handleChange={handlePersonalChange}
              />
            </label>
          </article>
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
        <legend class="field-title">* Personal Info *</legend>
        {this.createComponents()}
      </fieldset>
    );
  }
}

export default PersonalInfo;
