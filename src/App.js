import React from 'react';
import './App.css';
import Child1 from './comp/Child1';
import MyAppContext from "./context/MyAppContext";
import NamesList from './comp/NamesList';
// import Child2 from './comp/Child2';
// import Child3 from './comp/Child3';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      addName: this.handleOnSubmit.bind(this)
    };
  }

  handleOnSubmit(tweet) {
    const { tweets: tweets } = this.state;
    this.setState({ tweets: [tweet,...tweets] });
    
  }
  // const newDate = new Date("2019-12-15T14:40:58.340Z");

  render() {
    // const { names } = this.state;
    return (
      <>
        <nav className="nav-bar">
          <p className="bar-button"> Home</p>
          <p className="bar-button"> Profile</p>
        </nav>


        <MyAppContext.Provider value={this.state}>
          <div className="post-box">
            <Child1
            // onSubmit={name => this.handleOnSubmit(name)}
            />
            {/* <button className="tweet-button">Tweet</button> */}
          </div>

          <div className="feed">
          <NamesList
          // names={names}
          />
          </div>
  
        </MyAppContext.Provider>







      </>
    );
  }
}

export default App;
