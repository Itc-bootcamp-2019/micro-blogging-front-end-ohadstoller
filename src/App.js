import React from 'react';
import './App.css';
import CreateTweet from './comp/CreateTweet';
import MyAppContext from "./context/MyAppContext";
import TweetList from './comp/TweetList';
import { postTweetOnline } from "../src/lib/api";
import { getOnlineTweets } from "../src/lib/api";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      addTweet: this.handleOnSubmit.bind(this),
      loading: true

    };
  };
  componentDidMount() {
    getOnlineTweets().then(response => {
      console.log(response.data.tweets);
      
      this.setState({ tweets: response.data.tweets });


    });
  }
  handleOnSubmit(tweet) {

    
    // const { tweets } = this.state;
    // this.setState({ tweets: [tweet, ...tweets] });

    postTweetOnline(tweet).then(response => {
      const tweet = response;
      this.setState({ tweet: tweet, loading: false });
      

    });


  };

  componentDidUpdate() {
    getOnlineTweets().then(response => {
      // console.log(response.data.tweets);
      
      this.setState({ tweets: response.data.tweets });
      // document.getElementsByClassName("text-box").value = ''


    });
  }









  render() {
    return (
      <>
        <nav className="nav-bar">
          <p className="bar-button"> Home</p>
          <p className="bar-button"> Profile</p>
        </nav>


        <MyAppContext.Provider value={this.state}>

          <div className="post-box">
            <CreateTweet />
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
