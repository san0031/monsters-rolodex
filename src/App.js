import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

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

  const searchField = event.target.value.toLocaleLowerCase();
  this.setState(()=> {
    return {searchField}
  }
  )
}

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange} = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    } );
  return (
    <div className="App">
     
     <SearchBox  className='search-box' placeholder='Search Monsters' onChangeHandler={onSearchChange}></SearchBox>
     <CardList monsters={filteredMonsters}></CardList>
</div>
  )}

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json()   // console.log(response)
    .then((users) => this.setState(() => {
        return {monsters: users}  
    },
    ))
    );
  }
  
}

export default App;
