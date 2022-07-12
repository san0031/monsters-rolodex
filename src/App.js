import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component';

class  App extends Component {
constructor(){
  super();
  this.state = {
  monsters: [],
  searchField: ''
};
console.log('constructor')
}
  
onSearchChange=  (event) => {
  console.log({startingArray: this.state.monsters})
  const searchField = event.target.value.toLocaleLowerCase();
  this.setState(()=> {
    return {searchField}
  }
  )
}

  render() {
    console.log('render');
    const { monsters, searchField } = this.state;
    const { onSearchChange} = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    } );
  return (
    <div className="App">
      <input className='search-box' type='search' placeholder='search monsters'  onChange={onSearchChange}/>
    {/* {  filteredMonsters.map((monster) => {
        return <div  key={monster.id}><h1>{monster.name}</h1></div>;
     }
     )}*/}
     <CardList></CardList>
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
