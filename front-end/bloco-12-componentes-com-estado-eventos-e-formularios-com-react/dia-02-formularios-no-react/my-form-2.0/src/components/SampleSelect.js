import React from 'react';

class SampleSelect extends React.Component {
  createOptions(options, name) {
    return options.map((option) => {
      return <option key={option} value={option} name={name}>{option}</option>
    })
  }
  
  render() {
    const { name, options, handleChange } = this.props;

    return (
      <label htmlFor={name}>{name.toUpperCase()}
        <select name={name} id={name} onChange={handleChange}>
          {this.createOptions(options, name)}
        </select>
      </label>
    )
  }
}

export default SampleSelect;