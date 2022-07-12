import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class  App extends Component {
constructor(){
  super();
  this.state = {
  monsters: [],
  searchField: ''
};
console.log('constructor')
}
  

  render() {
    console.log('render')
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField)
    } );
  return (
    <div className="App">
      <input className='search-box' type='search' placeholder='search monsters'  onChange={(event) => {
        console.log({startingArray: this.state.monsters})
        const searchField = event.target.value.toLocaleLowerCase();
        //[ {name: }]
        
        this.setState(()=> {
          return {searchField}
        }
        )
              }}/>
     {  filteredMonsters.map((monster) => {
        return <div  key={monster.id}><h1>{monster.name}</h1></div>;
     }
     )}
</div>
  )}

  componentDidMount() {
    console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json()   // console.log(response)
    .then((users) => this.setState(() => {
        return {monsters: users}  
    },
    () => {
      console.log(this.state)
    }
    ))
    );
  }
  
}

export default App;
