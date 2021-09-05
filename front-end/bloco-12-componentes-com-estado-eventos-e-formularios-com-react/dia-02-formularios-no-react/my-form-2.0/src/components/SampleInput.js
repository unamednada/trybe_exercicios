import React from "react";

class SampleInput extends React.Component {

  render() {
    const { name, type, value, charLimit, handleChange } = this.props;
    return (
      <label htmlFor={name}>
        {name}
        <input
          name={name}
          type={type}
          value={value}
          required
          maxLength={charLimit ? charLimit : "200"}
          onChange={handleChange}
        />
      </label>
    );
  }
}

export default SampleInput;
