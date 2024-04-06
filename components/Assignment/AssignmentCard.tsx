import React from 'react'
import EditButton from '../common/EditButton'
import Link from 'next/link'
import { formatDate } from 'utils/formatDate'
import { secondsToHours } from 'utils/secondsToHour'

const AssignmentCard = ({assignmentData,submissionsData}) => {
  return (
    <div className='border w-[30%]'>
        <div className='flex flex-row justify-between items-center'>
            <h1 className='text-h1 font-bold'>{assignmentData?.title}</h1>
            <div className='flex flex-row items-center gap-[0.4rem]'>
                <h2 className='text-h2 text-progress-green font-bold'>{assignmentData?.status}</h2>
                <EditButton/>
            </div>
        </div>
        <div className='flex flex-row justify-between text-p font-bold'>
          <h2 className='text-secondary-text'>Assignment Link</h2>
          <Link className='text-blue-500' href={assignmentData.link || ''}>{assignmentData.link}</Link>
        </div>
        <div className='flex flex-row justify-between text-p font-bold'>
          <h2 className='text-secondary-text'>Assignment Hour</h2>
          <p>{secondsToHours(assignmentData.duration_in_seconds)}</p>
        </div>
        <div className='flex flex-row justify-between text-p font-bold'>
          <h2 className='text-secondary-text'>Assignment Ends at</h2>
          <p>{formatDate(assignmentData.ends_at)}</p>
        </div>
    </div>
  )
}

export default AssignmentCard