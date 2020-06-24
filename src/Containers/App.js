import React, { Component } from 'react';
import Cardlist from '../Components/Cardlist';
import Searchbox from '../Components/Searchbox';
import './App.css';
import Scroll from '../Components/Scroll.js';

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
        if (this.state.robots.length === 0) {
            return (
                <h1>Loading</h1>
            )
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>Robofriends</h1>
                    <Searchbox onSearchChange={this.onSearchChange} />
                    <Scroll>
                        <Cardlist robots={filteredRobots} />
                    </Scroll>
                </div >
            );
        }
    }
}

export default App;