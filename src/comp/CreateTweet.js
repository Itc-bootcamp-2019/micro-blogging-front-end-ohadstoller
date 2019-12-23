import React from 'react';
import MyAppContext from '../context/MyAppContext';

class CreateTweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweet: '',
      lengthError: false,


    };
  }

  handleTweetChange(event) {
    this.setState(
      { tweet: event.target.value }
    );
    this.maxLengthCheck(event);
  }

  clearContents = (element) => {
    this.setState({ tweet: '' });
  }

  maxLengthCheck = (object) => {
    if (object.target.value.length > 139) {
      this.setState({
        lengthError: true,
      })
    }
    else {
      this.setState({
        lengthError: false,
      })
    }
  }

  render() {
    const { tweet } = this.state;
    return (
      <MyAppContext.Consumer>
        {({ addTweet, tweets }) => (
          <div>
            <textarea
              value={this.state.tweet}
              className="text-box"
              maxLength="140"
              // onInput={this.maxLengthCheck}
              type="text"
              rows="8" cols="100"
              placeholder="What you have in mind..."
              onChange={
                event => this.handleTweetChange(event)
              }
            />

            <button
              className="tweet-button shadow"
              onClick={() => {
                addTweet({
                  content: tweet, userName: localStorage.getItem('userName'),
                  date: new Date().toISOString(),
                });
                this.clearContents();
              }}>
              Tweet
            </button>
            {this.state.lengthError && <div className="length-error">
              The tweet can't contain more then 140 chars
            </div>
            }
          </div>
        )
        }
      </MyAppContext.Consumer>
    );
  }
}

export default CreateTweet;
