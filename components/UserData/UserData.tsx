import React from 'react'
import UserDetails from './UserDetails'
import UserVideos from './UserVideos'

const UserData = ({data}) => {
  return (
    <div className='border w-[70%] p-[1rem] shadow-lg rounded-xl flex flex-row'>
        <UserDetails data={data}/>
        <UserVideos/>
    </div>
  )
}

export default UserData