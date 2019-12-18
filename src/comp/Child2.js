import React from 'react';
import Child3 from './Child3';

const Child2 = (props) => {
  const { onSubmit } = props; 
  return (
    <div>
      <Child3 onSubmit={onSubmit} />
      
    </div>
  )
}

export default Child2;