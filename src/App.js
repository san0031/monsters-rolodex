import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class  App extends Component {
constructor(){
  super();
  this.state = {
  monsters: [
    {
      name: 'Linda',
      id: 'a12345',
    },
    {
      name: 'Frank',
      id: 'a12346',
    },
    {
      name: 'Jacky',
      id: 'a12347',
    },
    {
      name: 'Baiju',
      id: 'a12348',
    },

  ]
};
}
  

  render() {
  return (
    <div className="App">
     {  this.state.monsters.map((monster) => {
        return <div  key={monster.id}><h1>{monster.name}</h1></div>;
     })}
</div>
  )}
}
export default App;
