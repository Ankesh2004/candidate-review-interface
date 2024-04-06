import React from 'react'
import AddIcon from '@mui/icons-material/Add';

const CreateAssignmentCard = () => {
  return (
    <div className='flex flex-col gap-[0.5rem] bg-button text-white w-[12rem] p-[1rem] rounded-2xl'>
        <div className='bg-foreground border flex items-center justify-center w-[1.75rem] rounded-lg text-secondary-text'>
            <AddIcon/>
        </div>
        <h2 className='text-h2 font-bold'>New Assignment?</h2>
        <p className='text-p text-wrap'>Select from pre-defined questions to have a quick turnaround.</p>
        <button className='bg-foreground text-secondary-text text-p font-bold p-[0.4rem] rounded-2xl hover:text-primary-text  hover:bg-hover-layer transform hover:ease-in duration-200'>Create New Assignment</button>
    </div>
  )
}

export default CreateAssignmentCard