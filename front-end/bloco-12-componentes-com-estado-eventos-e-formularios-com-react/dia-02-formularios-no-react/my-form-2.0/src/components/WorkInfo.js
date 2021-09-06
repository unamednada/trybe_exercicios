import React from "react";
import SampleTextArea from "./SampleTextArea";
import SampleInput from "./SampleInput";

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
        charLimit='40'
        />
        <SampleInput
        name='description'
        type='text'
        value={this.state.description}
        handleChange={this.handleChange}
        charLimit='500'
        />
      </fieldset>
    )
  }
}

export default WorkInfo;