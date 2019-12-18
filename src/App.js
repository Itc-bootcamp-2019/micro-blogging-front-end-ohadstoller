import React from 'react';
import './App.css';
import Post from './comp/Post';
import MyAppContext from "./context/MyAppContext";
import TweetList from './comp/TweetList';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      addTweet: this.handleOnSubmit.bind(this)
    };
  }

  handleOnSubmit(tweet) {
    const { tweets } = this.state;
    this.setState({ tweets: [tweet, ...tweets] });

  }
  // const newDate = new Date("2019-12-15T14:40:58.340Z");

  render() {
    return (
      <>
        <nav className="nav-bar">
          <p className="bar-button"> Home</p>
          <p className="bar-button"> Profile</p>
        </nav>


        <MyAppContext.Provider value={this.state}>

          <div className="post-box">
            <Post />
          </div>

          <div className="feed">
            <TweetList />

          </div>

        </MyAppContext.Provider>







      </>
    );
  }
}

export default App;
