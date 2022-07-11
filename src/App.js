import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class  App extends Component {
constructor(){
  super();
  this.state ={
    name: 'Vids'
  }
}
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello my name is Vidya
        </p>
       <button onClick={() => {
        this.setState({ name: 'Money'});
        console.log(this.state);
       }}>
        Change {this.state.name}       </button>
      </header>
    </div>
  );
}
}
export default App;
