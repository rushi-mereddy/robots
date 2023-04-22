import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll';



class App extends Component{
    constructor() {
        super()
        this.state={
            robots : [],
             searchfield: '' 
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response=> Response.json())
        .then(users => {this.setState({robots: users})});
    }

    onSearchShow = (event) => {
        this.setState({ searchfield: event.target.value})
        // console.log(event.target.value);
        
    }
    

    render(){
        const { robots, searchfield } = this.state;
        const filteredRObots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        // console.log(filteredRObots) ;
        // if (robots.length === 0){
        if (!robots.length){
           return ( 
           <div className='text-center mt-5'>
                <h1 className='text-secondary text-center'>Loading...</h1>
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
           </div>
           )
        } else {
        return (
            
            <div className='text-center'>
            <h1 className='title mt-5'> Robo friends</h1>
            <SearchBox SearchShow={this.onSearchShow} />
            <Scroll>
                <CardList robots={filteredRObots} />
            </Scroll>
    </div>
        )
    }
}
}

export default App