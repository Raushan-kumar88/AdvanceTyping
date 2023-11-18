
import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const ResultsPage = () => {
  const location = useLocation();
  const { grossWPM, accuracy, netWPM } = location.state;
  return (
    <div className='w-full min-h-screen flex py-1  bg-gray-600 selection:bg-green-500 selection:text-gray-600'>
      <div className=' w-[70%] mx-auto py-10 px-10 border-[1px] shadow-lg border-white rounded-lg inline-block bg-gradient-to-t from-[#6ba5f2] to-[black]'>
        <div className='w-full items-center inline-block lg:flex justify-between'>
        <Link to="/" className='flex items-center justify-center gap-2'>
          <img className='w-10 h-10 rounded-full' src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQWuqmP6US8oG0et4hJhdAtqbw7PCvOBWv8R7pR0e8p9DKxqTRv" alt="" />
          <h3 className='text-2xl font-bold text-white'>Your Test Score</h3>
        </Link>
       <div className='flex items-center justify-center gap-5'>
        <button className='border-white border-[1px] outline-none min-w-[160px] bg-[#15c39a]
         text-white px-3 py-2 rounded-full hover:scale-110 duration-500 ease-out transition-all'>RETAKE TEST</button>
        <button className='border-white min-w-[160px] border-[1px] outline-none bg-[#04b2d5]
         text-white px-3 py-2 rounded-full hover:scale-110 duration-500 ease-out transition-all'>TESTS</button>

       </div>
        </div>
        <div className='w-full items-center justify-around inline-block lg:flex gap-5 mt-10'>
        <div>

        <img className='w-60' src="https://www.typing.com/dist/student/images/mascot/app/mascot-b.svg" alt="" />

        </div>
        <div className=' inline-block lg:flex items-center justify-center gap-4'>
          
        <div className='inline-block text-center gap-4'>
        <div className='w-28 h-28 text-center mb-2 rounded-full items-center justify-center flex font-bold text-2xl text-white bg-[#5b6366] bg-opacity-60 border-[3px] border-[#04b2d5]'>
        {grossWPM.toFixed(2)} <br/>WPM
        </div>
        <span className='mt-2 text-white font-bold'>Typing speed</span>
        </div>
       <div className='font-bold text-7xl text-white text-center mx-1'>*</div>
        <div className='inline-block text-center gap-4'>
        <div className='w-28 h-28 text-center mb-2 rounded-full items-center justify-center flex font-bold text-2xl text-white bg-[#5b6366] bg-opacity-60 border-[3px] border-[#04b2d5]'>
        {accuracy.toFixed(2)}<br/>%
        </div>
        <span className='mt-2 text-white font-bold'>Accuracy</span>
        </div>

        <div className='font-bold text-7xl text-white text-center mx-1'>=</div>
        <div className='inline-block text-center gap-4 py-3'>
        <div className='w-28 h-28 text-center mb-2 rounded-full items-center justify-center flex font-bold text-2xl text-white bg-[#5b6366] bg-opacity-60 border-[3px] border-[#15c39a]'>
        {netWPM.toFixed(2)}<br/>WPM
        </div>
        <span className='mt-2 text-white font-bold'>Net Speed</span>
        </div>
        </div>

        </div>
        <hr className='w-full' />

      </div>
    </div>
  )
}

export default ResultsPage