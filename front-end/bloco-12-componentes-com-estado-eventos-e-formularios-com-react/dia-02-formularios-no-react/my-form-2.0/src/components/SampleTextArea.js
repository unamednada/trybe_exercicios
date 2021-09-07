import React from 'react';
import './SampleTextArea.css';

class SampleTextArea extends React.Component {

  render() {
    const { name, charLimit, value, handleChange, handleMouseEnter }  = this.props;
    return (
      <label htmlFor={name} className="text-area">{name.toUpperCase()}
        <textarea
        name={name}
        maxLength={charLimit}
        value={value}
        onMouseEnter={handleMouseEnter}
        onChange={handleChange}
        rows='9'
        cols='5'
        />
      </label>
    )
  }
}

export default SampleTextArea;