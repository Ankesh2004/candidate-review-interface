import React from 'react'
import Image from 'next/image'
import ProfilePic from 'public/profile-pic.jpg'
import { colorPicker } from 'utils/colorPicker'
import ScoreCard from './ScoreCard'

const UserDetails = ({data}) => {
  return (
    <div className='w-[50%] flex flex-col gap-[0.5rem] items-center'>
        {/* Header  */}
        <div className='flex flex-row justify-between w-[100%]'>
            <div className='flex flex-row gap-[0.5rem] items-center'>
                <Image className='rounded-xl' src={ProfilePic} alt='profile-pic' width={60} height={60}/>
                <div className='flex flex-col'>
                    <h2 className='txt-h2 font-bold'>{data.full_name}</h2>
                    <p className='text-p text-secondary-text'>{data.email}</p>
                </div>
            </div>
            <h1 className={`text-h1 text-${colorPicker(data.score)} font-bold`}>
                {data.score}%
            </h1>
        </div>
        
        {/* Scores  */}
        <div className='w-[100%]'>
            {   data.score && 
                data.scores.map((score,index) => (
                    <ScoreCard key={index} topic={score.score_type} score={score.user_score}/>
                ))
            }
        </div>

        {/* Personal Details  */}
        <div className='flex flex-col gap-[0.2rem]'>
            <div>
                <h2 className='text-h2 font-bold'>About</h2>
                <p className='text-p text-secondary-text'>{data.about_me}</p>
            </div>
            <div>
                <h2 className='text-h2 font-bold'>Experience</h2>
                <p className='text-p text-secondary-text'>{data.experience}</p>
            </div>
            <div>
                <h2 className='text-h2 font-bold'>Hobbies</h2>
                <p className='text-p text-secondary-text'>{data.hobbies}</p>
            </div>
            <div>
                <h2 className='text-h2 font-bold'>Introduction</h2>
                <p className='text-p text-secondary-text'>{data.introduction}</p>
            </div>
        </div>
        <button className="bg-button w-[80%] text-foreground font-bold shadow-sm hover:shadow-xl p-[0.75rem] rounded-2xl">
            SHORTLIST
        </button>
    </div>
  )
}

export default UserDetails