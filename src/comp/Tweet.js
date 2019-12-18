import React from 'react';
import MyAppContext from '../context/MyAppContext';

class Tweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweet: ''
    };
  }

  handleNameChange(event) {
    this.setState({ tweet: event.target.value });
  }

  render() {
    // const { onSubmit } = this.props;
    const { tweet } = this.state;
    return (
      <MyAppContext.Consumer>
        {({ addTweet, tweets }) => (
          <div>
            <textarea
              className="text-box" type="text" rows="8" cols="100"
              placeholder="What you have in mind..."
              onChange={event => this.handleNameChange(event)}>
            </textarea>


            <button className="tweet-button shadow"
              onClick={() => addTweet(tweet)}>Tweet
            </button>
          </div>
        )}
      </MyAppContext.Consumer>
    );
  }
}

export default Tweet;
