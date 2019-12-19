import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import MyAppContext from '../context/MyAppContext';

class CreateTweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweet: ''

    };
  }

  handleNameChange(event) {
    this.setState({ tweet: event.target.value });
    

  }

  clearContents(element) {
    element.value = '';
  }

  render() {
    const { tweet } = this.state;
    return (
      <MyAppContext.Consumer>
        {({ addTweet, tweets }) => (
          <div>
            <textarea
              className="text-box" type="text" rows="8" cols="100" onFocus={this.clearContents(this)}
              placeholder="What you have in mind..."  
              onChange={event => this.handleNameChange(event)}>

            </textarea>


            <button className="tweet-button shadow"
              onClick={() => addTweet({
                content: tweet, userName: 'Ohad Mark Stoller',
                date: new Date().toISOString(),
              })}>Tweet
            </button>
          </div>
        )}
      </MyAppContext.Consumer>
    );
  }
}

export default CreateTweet;
