import React from 'react';
import './App.css';
import CreateTweet from './comp/CreateTweet';
import MyAppContext from "./context/MyAppContext";
import TweetList from './comp/TweetList';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      addTweet: this.handleOnSubmit.bind(this)

    };
  };
  handleOnSubmit(tweet) {
    // let newDate = new Date();
    // tweetObj = { 
    //   content: tweet, 
    //   date: newDate, 
    //   userName: "Ohad Stoller"
    // }
    const { tweets } = this.state;
    this.setState({ tweets: [tweet, ...tweets] });
    
  };

  componentDidMount() {
    // update to if statement at the end
    localStorage.getItem('tweets') && this.setState({
      tweets: JSON.parse(localStorage.getItem('tweets'))
    })
  };

  componentWillUpdate(nextProps, nextStage) {
    localStorage.setItem('tweets', JSON.stringify(nextStage.tweets));
  };








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
