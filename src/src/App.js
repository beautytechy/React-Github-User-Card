import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import UserCard from "./Components/UserCard"


class App extends Component {

  state = {
    data: [],
    users: 'beautytechy'

  };

  componentDidMount() {
    axios.get("https://api.github.com/users/beautytechy").then(response => {
      console.log(response.data)
      this.setState({
        data: response.data
      });

    }).catch(error => console.log("API Error", error));
  }

  componentDidUpdate () {
  
    console.log ("CDU Success")
  }



  render() {
    // console.log(this.state.date);
    return (
      <div className="App">
        <header className="App-header">
      <UserCard
        user={this.state.data}
        />
        </header>
      </div>
    );
  }
}
export default App;
