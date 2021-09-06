import React from "react";
import SampleTextArea from "./SampleTextArea";

class WorkInfo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      resume: '',
      position: '',
      description: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value
    })
  }

  handleMouseEnter() {
    window.alert('Fill out this field thoroughly!');
  }

  render() {
    return (
      <fieldset>
        <legend>Work Info</legend>
        <SampleTextArea
        name='resume'
        value={this.state.resume}
        handleChange={this.handleChange}
        />
        <SampleTextArea
        name='position'
        value={this.state.position}
        handleChange={this.handleChange}
        handleMouseEnter={this.handleMouseEnter}
        />
      </fieldset>
    )
  }
}

export default WorkInfo;