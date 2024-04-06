import React from 'react'
import ProgressBar from '../common/ProgressBar'

const ScoreCard = ({topic,score}) => {
  return (
    <div className='flex flex-row justify-between w-[100%] gap-[1rem]'>
        <p className='w-[70%] font-bold text-secondary-text'>{topic}</p>
        <ProgressBar score={score}/>
    </div>
  )
}

export default ScoreCard