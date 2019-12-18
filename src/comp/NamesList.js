import React from 'react';
import MyAppContext from '../context/MyAppContext';
import '../App.css'

const NamesList = props => {
  // const { names } = props;
  return (
    <MyAppContext.Consumer>
      {({ addName, tweets }) => (


        <div >
          {tweets.map(tweet => (
            <div className="tweet-box" key={tweet}>
              {tweet}
              <p className="post-date"> {Date.now()}
              </p>
            </div>
          ))}
        </div>

        // {/* <ul>
        //   {names.map(name => (
        //     <li key={name}>{name}</li>
        //   ))}
        // </ul> */}

      )}
    </MyAppContext.Consumer>
  );
};

export default NamesList;
