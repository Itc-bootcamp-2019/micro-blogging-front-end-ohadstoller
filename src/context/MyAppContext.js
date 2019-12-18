import React from 'react';

const MyAppContext = React.createContext({
  tweets: [],
  addName: (name) => { }
});

export default MyAppContext;