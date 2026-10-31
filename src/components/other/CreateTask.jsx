import React from 'react'
const CreateTask = () => {
  return (
        <div className='flex flex-col mt-7 w-full bg-[#1c1c1c] p-10 rounded-lg'>
            <form>
                  <div>
                  <h3>Task Title</h3>
                <input type="text" placeholder='Enter Task Title' className='border-2 border-gray-300 rounded-lg p-2 w-full'/>
                </div>
                
                <div>
                  <h3>Date</h3>
                <input type="date" className='border-2 border-gray-300 rounded-lg p-2 w-full'/>
                </div>

                <div>
                  <h3>Assign To</h3>
                  <input type="text" placeholder="Employee Name" className='border-2 border-gray-300 rounded-lg p-2 w-full'/>
                </div>

                <div>
                  <h3>Category</h3>
                  <input type="text" placeholder="design, dev, etc" className='border-2 border-gray-300 rounded-lg p-2 w-full'/>
                </div>
                  <div>
                  <h3>Task Description</h3>
                  <textarea placeholder='Enter Task Description' className='border-2 border-gray-300 rounded-lg cols="30" rows="10" p-2 w-full'/>
                </div>  
                <button type='submit' className='bg-black hover:bg-gray-900 w-full text-white p-2 rounded-lg mt-4'>Create Task</button>
            </form>
        </div>
  )
}

export default CreateTask