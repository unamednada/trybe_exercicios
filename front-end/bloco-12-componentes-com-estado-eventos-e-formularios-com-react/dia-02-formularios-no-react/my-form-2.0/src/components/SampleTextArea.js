import React from 'react';

class SampleTextArea extends React.Component {

  render() {
    const { name, charLimit, value, handleChange, handleMouseEnter }  = this.props;
    return (
      <label htmlFor={name}>{name}
        <textarea
        name={name}
        maxLength={charLimit}
        value={value}
        onMouseEnter={handleMouseEnter}
        onChange={handleChange}
        />
      </label>
    )
  }
}

export default SampleTextArea;