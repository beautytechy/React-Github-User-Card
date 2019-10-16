import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import UserCard from "./Components/UserCard";
import FollowerCard from "./Components/FollowerCard"


class App extends Component {

  state = {
    data: [],
    followers: [],
    users: 'beautytechy'

  };

  componentDidMount() {
    axios.get("https://api.github.com/users/beautytechy")
      .then(response => {
        console.log(response.data)
        this.setState({
          data: response.data
        });
        return axios.get("https://api.github.com/users/beautytechy/followers")
      })
      .then(response => {
        console.log(response.data)
        this.setState({
          followers: response.data
        });

      }).catch(error => console.log("API Error", error));

  }




  render() {
    // console.log(this.state.date);
    return (
      <div className="App">
        <header className="App-header">

          <UserCard
            userdata={this.state.data}
          />
          <FollowerCard
            followerdata={this.state.followers}
          />

        </header>

      </div>

    );
  }
}
export default App;
