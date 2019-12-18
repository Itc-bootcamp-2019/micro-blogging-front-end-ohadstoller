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
            <div className="tweet-box" key={tweet}>
              {tweet}
              <p className="post-date"> {Date.now()}
              </p>
            </div>
          ))}
        </div>

      )}
    </MyAppContext.Consumer>
  );
};

export default TweetList;
