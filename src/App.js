import React, { Component } from 'react';
import Cardlist from './Cardlist';
import Searchbox from './Searchbox';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            searchfield: '',
            robots: []
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        robots: result
                    });
                }
            )
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()));
        return (
            <div className='tc'>
                <h1>Robofriends</h1>
                <Searchbox onSearchChange={this.onSearchChange} />
                <Cardlist robots={filteredRobots} />
            </div >
        );
    }
}

export default App;