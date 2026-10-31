import React from 'react'

const TaskListNum = () => {
  return (
    <div className='grid grid-cols-4 gap-5 mt-10 screen'>
        <div className=' px-8 py-5 bg-blue-400 rounded-2xl '>
            <h1 className='text-2xl font-semibold'>1</h1>
            <p className='text-lg font-medium'>New Tasks</p>
        </div>
        <div className=' px-8 py-5 bg-green-400 rounded-2xl '>
            <h1 className='text-2xl font-semibold'>3</h1>
            <p className='text-lg font-medium'>Completed Tasks</p>
        </div>
        <div className=' px-8 py-5 bg-yellow-400 rounded-2xl '>
            <h1 className='text-2xl font-semibold'>0</h1>
            <p className='text-lg font-medium'>Accepted Tasks</p>
        </div>
        <div className=' px-8 py-5 bg-red-400 rounded-2xl '>
            <h1 className='text-2xl font-semibold'>0</h1>
            <p className='text-lg font-medium'>Failed Tasks</p>
        </div>
    </div>
  )
}

export default TaskListNum