import React from 'react';
import Child3 from './Child2';

const Child1 = (props) => {
  const { onSubmit } = props; 
  return (
    <div>
      <Child3 onSubmit={onSubmit} />
      
    </div>
  )
}

export default Child1;