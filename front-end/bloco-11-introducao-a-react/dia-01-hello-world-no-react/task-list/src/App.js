import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['Do laundry', 'Pick up groceries', 'Book holiday', 'Buy Jeans'];


function App() {
  return (
    tasks.map((task) => {
      return Task(task);
    })
  );
}

export default App;
