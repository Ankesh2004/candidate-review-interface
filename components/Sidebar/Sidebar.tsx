import React from 'react'
import DashboardBtn from './DashboardBtn'
import CreateAssignmentCard from './CreateAssignmentCard'

const Sidebar = () => {
  return (
    <div className='flex flex-col gap-[1rem] p-[1rem] w-[14rem] items-center'>
        <h2 className='font-bold'>Hi, AltWorld</h2>
        <div className='w-[90%] p-[1px] bg-secondary-text rounded-2xl'></div>
        <DashboardBtn/>
        <CreateAssignmentCard/>
    </div>
  )
}

export default Sidebar