import React from "react";

class SampleSubmit extends React.Component {
  createSubmit() {
    const values = this.props.values;
    const keys = Object.keys(values);
    return keys.map((key) => {
      if (!["positionTimes", "submit"].includes(key)) {
        return (
          <p key={key}>
            {key}: {values[key]}
          </p>
        );
      }
      return null;
    });
  }

  render() {
    return <article>{this.createSubmit()}</article>;
  }
}

export default SampleSubmit;
