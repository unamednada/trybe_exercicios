import React from 'react';
import PersonalInfo from './PersonalInfo';
import WorkInfo from './WorkInfo';

class Form extends React.Component {
  render() {
    return (
      <form>
        <h1>My Form 2.0</h1>
        <PersonalInfo />
        <WorkInfo />
      </form>
    )
  }
}

export default Form;