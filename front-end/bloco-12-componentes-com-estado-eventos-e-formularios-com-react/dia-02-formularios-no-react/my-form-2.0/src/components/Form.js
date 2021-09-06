import React from "react";
import PersonalInfo from "./PersonalInfo";
import WorkInfo from "./WorkInfo";
import SampleSubmit from './SampleSubmit';
import './Form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      id: "",
      address: "",
      city: "",
      state: "",
      typeOfHousing: "",
      resume: "",
      position: "",
      description: "",
      positionTimes: 0,
      submit: false,
    };

    this.handlePersonalChange = this.handlePersonalChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleWorkChange = this.handleWorkChange.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleWorkChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleMouseEnter() {
    if (this.state.positionTimes === 0)
      window.alert("Fill out this field thoroughly!");
    this.setState({
      positionTimes: 1,
    });
  }

  handlePersonalChange({ target }) {
    const { name, type, checked } = target;
    this.setState(() => {
      if (type === "radio" && checked) {
        return {
          [name]: target.value,
        };
      } else if (name === "name") {
        return {
          [name]: target.value.toUpperCase(),
        };
      } else if (name === "address") {
        return {
          // Source: https://stackoverflow.com/questions/6555182/remove-all-special-characters-except-space-from-a-string-using-javascript
          [name]: target.value.replace(/[^a-zA-Z0-9 ãáóôõúéêç]/g, ""),
        };
      } else if (!checked) {
        return {
          [name]: target.value,
        };
      }
    });
  }

  handleBlur({ target }) {
    const { name, value } = target;
    if (!isNaN(value[0])) {
      this.setState({
        [name]: "",
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      submit: true,
    })
  }

  handleClear(event) {
    event.preventDefault();
    this.setState({
      name: "",
      email: "",
      id: "",
      address: "",
      city: "",
      state: "",
      typeOfHousing: "",
      resume: "",
      position: "",
      description: "",
      positionTimes: 0,
      submit: false,
    })
  }

  render() {
    if (!this.state.submit) {
      return (
        <form>
          <h1 class="title">My Form 2.0</h1>
          <section class="Info-container">
            <PersonalInfo
              handleBlur={this.handleBlur}
              handlePersonalChange={this.handlePersonalChange}
              values={this.state}
            />
            <WorkInfo
              handleWorkChange={this.handleWorkChange}
              handleMouseEnter={this.handleMouseEnter}
              values={this.state}
            />
          </section>
          <section class="Btn-container">
            <button type="submit" onClick={this.handleSubmit}>
              Submit
            </button>
            <button type="button" onClick={this.handleClear}>
              Clear
            </button>
          </section>
        </form>
      );
    }
    const values = this.state;
    return (
      <section>
        <h1>Your Info</h1>
        <SampleSubmit
        values={values}
        />
      </section>
    )
  }
}

export default Form;
