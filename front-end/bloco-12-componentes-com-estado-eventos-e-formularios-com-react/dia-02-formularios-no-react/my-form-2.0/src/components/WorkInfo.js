import React from "react";
import SampleTextArea from "./SampleTextArea";
import SampleInput from "./SampleInput";

class WorkInfo extends React.Component {

  render() {

    const { handleWorkChange, handleMouseEnter, values } = this.props;

    return (
      <fieldset>
        <legend>Work Info</legend>
        <SampleTextArea
        name='resume'
        value={values.resume}
        handleChange={handleWorkChange}
        />
        <SampleTextArea
        name='position'
        value={values.position}
        handleChange={handleWorkChange}
        handleMouseEnter={handleMouseEnter}
        charLimit='40'
        />
        <SampleInput
        name='description'
        type='text'
        value={values.description}
        handleChange={handleWorkChange}
        charLimit='500'
        />
      </fieldset>
    )
  }
}

export default WorkInfo;