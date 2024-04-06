import React, { useState } from 'react'
import { candidateQuestions } from 'data/candidateQuestions'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const QuestionBar = () => {
    const [question, setQuestion] = useState(0);
    const handleQuestionChange = (direction: 'left' | 'right') => {
        if (direction === 'left') {
            if(question==0){
                setQuestion(candidateQuestions.length-1);
            }
            else{
            setQuestion(question - 1);
            }
        } else {
            if(question==candidateQuestions.length-1){
                setQuestion(0);
            }
            else{
            setQuestion(question + 1);
            }
        }
    }
return (
    <div className='flex flex-row h-[4rem] text-center items-center justify-between w-[80%] text-p'>
            <button 
            onClick={() => handleQuestionChange('left')}>
                <div className='bg-hover-layer p-[0.5rem] rounded-2xl flex items-center'>
                    <ArrowBackIosIcon />
                </div>
                
            </button>
            <div>
                <p>{candidateQuestions[question].question}</p>
                <p>Question {question+1}/{candidateQuestions.length}</p>
            </div>
            <button 
            onClick={() => handleQuestionChange('right')}>
                <div className='bg-hover-layer p-[0.5rem] rounded-2xl flex items-center'>
                    <ArrowForwardIosIcon />
                </div>
            </button>
    </div>
)
}

export default QuestionBar