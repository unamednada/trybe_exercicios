import React from "react";

class SampleRadio extends React.Component {

  render() {
    const { name, type, options, handleChange } = this.props;
    
    return options.map((option) => {
      return (
      <label htmlFor={option}>{option}
        <input
          key={option}
          name={name}
          type={type}
          value={option}
          onChange={handleChange}
          checked
        />
      </label>
      )
    })
  }
}

export default SampleRadio;
