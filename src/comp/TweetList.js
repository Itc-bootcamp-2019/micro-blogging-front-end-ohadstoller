import React from 'react';
import MyAppContext from '../context/MyAppContext';
import '../App.css'

const TweetList = props => {
  // const { tweets } = props;
  return (
    <MyAppContext.Consumer>
      {({ addTweet, tweets }) => (

        <div >
          {tweets.map(tweet => (
            <div className="tweet-box" key={tweet.date}>
              {tweet.content}
              <p className="post-date"> {tweet.date}
              </p>
            </div>
          ))}
        </div>

      )}
    </MyAppContext.Consumer>
  );
};

export default TweetList;
