import React, { Component } from 'react';
import CardList from './CardList';
import './App.css';
import SearchBox from './SearchBox';

class App extends Component {
   constructor() {
      super();
      this.state = {
         robots: [],
         searchField: '',
      };
      console.log('constructor');
   }
   componentDidMount() {
      //runs after constructor

      //fetching the data from a url
      fetch('https://jsonplaceholder.typicode.com/users')
         .then((response) => response.json())
         .then((users) => this.setState({ robots: users }));

      console.log('componentDidMount');
   }

   onSearchChange = (event) => {
      //update state
      this.setState({ searchField: event.target.value });
   };

   render() {
      const filteredRobots = this.state.robots.filter(
         (robot) => {
            return robot.name
               .toLowerCase()
               .includes(
                  this.state.searchField.toLowerCase()
               );
         }
      );

      console.log('render');

      // tackling slow fetch requests
      if (this.state.robots.length === 0) {
         return <h1>Loading</h1>;
      }

      return (
         <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <CardList robots={filteredRobots} />
         </div>
      );
   }
}

export default App;
