import React from 'react';
import { Circle } from 'rc-progress';

const ProgressCircle = ({ progress }) => {
  return (
    <Circle
      percent={progress}
      strokeWidth="7"
      strokeColor="#00008b"
      trailColor="#ddd"
      trailWidth="7"
      width={100}
      height={100}
     
    />
    
  );
}

export default ProgressCircle;