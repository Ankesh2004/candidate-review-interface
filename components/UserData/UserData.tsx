import React from 'react'
import UserDetails from './UserDetails'
import UserVideos from './UserVideos'

const UserData = ({data}) => {
  return (
    <div className='border w-[70%] bg-foreground p-[1.5rem] shadow-lg rounded-xl flex flex-row items-center justify-between'>
        <UserDetails data={data}/>
        <UserVideos/>
    </div>
  )
}

export default UserData