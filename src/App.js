import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class  App extends Component {
constructor(){
  super();
  this.state ={
    name: {firstName:'Vidya', lastName: 'Money'},
    company: 'FIS',
  };
}
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello my name is  {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.company}
        </p>
       <button onClick={() => {
        this.setState({ name: {firstName: 'Sri' , lastName: 'Ananthasubramoney'}});
        console.log(this.state)
       }}>
        Change {this.state.name.lastName}       </button>
      </header>
    </div>
  );
}
}
export default App;
