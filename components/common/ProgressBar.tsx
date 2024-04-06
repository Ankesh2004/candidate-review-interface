import React from 'react';
import { colorPicker } from 'utils/colorPicker';

const ProgressBar = ({ score }) => {
  const normalizedScore = score*10; // Normalize score to be out of 100

  return (
    <div className={`flex flex-row items-center justify-between w-[100%] font-bold gap-[0.1rem] text-${colorPicker(normalizedScore)}`}>
      <div className='w-[100%] bg-hover-layer rounded-2xl'>
        <div className={`h-[1px] p-[0.3rem] rounded-2xl bg-green-400 w-[${normalizedScore}%]`}></div>
      </div>
      
      <p>{score}/10</p>
    </div>
  );
};

export default ProgressBar;