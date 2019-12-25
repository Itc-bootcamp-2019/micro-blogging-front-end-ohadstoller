import React from 'react';
import './App.css';
import CreateTweet from './comp/CreateTweet';
import ProfilePage from './pages/ProfilePage';
import MyAppContext from "./context/MyAppContext";
import TweetList from './comp/TweetList';
import { postTweetOnline } from "../src/lib/api";
import { getOnlineTweets } from "../src/lib/api";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom'


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

  createDefaultUser() {
    if (localStorage.getItem('userName') == null) {
      localStorage.setItem('userName', 'Random User')
    };
  }

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
    document.title = `Micro-Blogging`;
    this.createDefaultUser();
    this.sendGetApiRequest();
    setInterval(() => {
      this.sendGetApiRequest();
    }, 3000);
  }

  render() {
    return (
      <Router>
        <>
          <nav className="nav-bar">
            <NavLink
              to="/"
              activeClassName="selected"
              className="bar-button">
              Home
            </NavLink>
            <NavLink
              to="/profile"
              activeClassName="selected"
              className="bar-button">
              Profile
            </NavLink>
          </nav>

          <Switch>
            <Route exact path="/">

              <MyAppContext.Provider
                value={this.state}>
                <div
                  className="post-box">
                  <CreateTweet />
                </div>
                <div
                  className="feed">
                  <TweetList />
                </div>
              </MyAppContext.Provider>

            </Route>

            <Route
              path="/profile">
              <ProfilePage />
            </Route>

          </Switch>

        </>
      </Router>
    );
  }
}

export default App;
