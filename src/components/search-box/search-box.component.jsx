import { Component } from "react";

class SearchBox extends Component {

    render() {
        console.log(this.props)
        //const {onSearchChange} = this.props.onSearchChange;
        return (
            <input 
            className={this.props.className} 
            type='search' 
            placeholder={this.props.placeholder}  
            onChange={this.props.onChangeHandler}/>)
    }

    
}

export default SearchBox;