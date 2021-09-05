import React from 'react';
import PersonalInfo from './PersonalInfo';

class Form extends React.Component {
  render() {
    return (
      <form>
        <h1>My Form 2.0</h1>
        <PersonalInfo />
      </form>
    )
  }
}

export default Form;