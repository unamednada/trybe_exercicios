import React from 'react';

class SampleSelect extends React.Component {
  createOptions(options) {
    return options.map((option) => {
      return <option key={option} value={option}>{option}</option>
    })
  }
  
  render() {
    const { name, options } = this.props;

    return (
      <label htmlFor={name}>{name}
        <select name={name}>
          {this.createOptions(options)}
        </select>
      </label>
    )
  }
}

export default SampleSelect;