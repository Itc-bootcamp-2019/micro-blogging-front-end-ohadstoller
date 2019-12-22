import React from 'react';
import MyAppContext from '../context/MyAppContext';

class CreateTweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweet: '',


    };
  }

  handleNameChange(event) {
    this.setState({ tweet: event.target.value });


  }

  clearContents = (element) => {
    this.setState({ tweet: '' });
  }

  render() {
    const { tweet } = this.state;
    return (
      <MyAppContext.Consumer>
        {({ addTweet, tweets }) => (
          <div>
            <textarea
              value={this.state.tweet} className="text-box" type="text" rows="8" cols="100"
              placeholder="What you have in mind..."
              onChange={event => this.handleNameChange(event)}>

            </textarea>


            <button className="tweet-button shadow"
              onClick={() => {

                addTweet({
                  content: tweet, userName: localStorage.getItem('userName'),
                  date: new Date().toISOString(),
                });
                this.clearContents();
              }}>
              Tweet
            </button>
          </div>
        )
        }
      </MyAppContext.Consumer>
    );
  }
}

export default CreateTweet;
