import React from "react";

class SampleRadio extends React.Component {

  render() {
    const { name, type, options, handleChange } = this.props;
    
    return options.map((option) => {
      return (
      <label key={option} htmlFor={option}>{option}
        <input
          name={name}
          type={type}
          value={option}
          onChange={handleChange}
        />
      </label>
      )
    })
  }
}

export default SampleRadio;
