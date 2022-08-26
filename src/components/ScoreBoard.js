import React from 'react'

const ScoreBoard = ({score}) => {
    return (
        <div>
        <div>
            <h1 className='flex justify-center py-5 underline decoration-slate-50 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-500 via-pink-400 to-pink-300'>CandyCrush!</h1>
        </div>
        <div className='score-board flex justify-center font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-br from-blue-700 via-blue-500 to-blue-300'>
            <h2>Your Score! {score}</h2>
        </div>
        </div>
    )
  
}

export default ScoreBoard