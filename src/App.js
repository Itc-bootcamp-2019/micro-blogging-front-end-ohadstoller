import React from 'react';
import './App.css';
import CreateTweet from './comp/CreateTweet';
import MyAppContext from "./context/MyAppContext";
import TweetList from './comp/TweetList';
import { postTweetOnline } from "../src/lib/api";
import { getOnlineTweets } from "../src/lib/api";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      addTweet: this.handleOnSubmit.bind(this),
      loading: true

    };
  };

  handleOnSubmit(tweet) {
    postTweetOnline(tweet).then(response => {
      const tweet = response;
      this.setState({
        tweet: tweet, loading: false
      });
    });
  };

  sendGetApiRequest() {
    getOnlineTweets().then(response => {
      this.setState(
        {
          tweets: response.data.tweets
        }
      );
    });
  };

  componentDidMount() {

    this.sendGetApiRequest();
    setInterval(() => {
      // console.log('hi')
      this.sendGetApiRequest()
    }, 3000);
  }



  render() {
    return (
      <Router>
        <>
          <nav className="nav-bar">
            <Link to="/home">
              <p className="bar-button"> Home
            </p>
            </Link>
            <Link to="/profile">
              <p className="bar-button"> Profile
            </p>
            </Link>
          </nav>

          <Switch>
            <Route exact path="/home">

              <MyAppContext.Provider value={this.state}>
                <div className="post-box">
                  <CreateTweet />
                </div>
                <div className="feed">
                  <TweetList />
                </div>
              </MyAppContext.Provider>

            </Route>

            <Route exact path="/profile">

              <div className="profile-header">
                Profile
              </div>
              <div className="user-name-placer"> User Name </div>

              <textarea className="user-name-text-area"> </textarea>

              <div className="save-button">
                <p className="save-text"> Save</p>
              </div>

            </Route>


          </Switch>

        </>
      </Router>
    );
  }
}

export default App;
