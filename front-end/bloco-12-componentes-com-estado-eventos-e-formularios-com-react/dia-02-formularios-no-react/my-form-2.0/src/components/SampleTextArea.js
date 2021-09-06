import React from 'react';

class SampleTextArea extends React.Component {
  render() {
    const { name, charLimit, value, handleMouseEnter }  = this.props;
    return (
      <textarea
      name={name}
      maxLength={charLimit}
      value={value}
      onMouseEnter={handleMouseEnter}
      />
    )
  }
}

export default SampleTextArea;