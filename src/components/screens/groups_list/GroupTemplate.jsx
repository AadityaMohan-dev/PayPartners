import React from 'react'

function GroupTemplate() {
  return (
    <>
    <div id="main-container">
        <div id="card-container" className='shadow-lg backdrop-blur-md bg-white rounded-lg px-10 pb-10 '>
            <h1 className='text-3xl py-5'>Group Name</h1>
            <div id="members-details" className='shadow-lg backdrop-blur-md bg-white rounded-lg p-10 flex flex-wrap gap-20 justify-between'>
                <div id="data-circle" className='rounded-full shadow-lg bg-blue-800 w-28 h-28'></div>

            </div>
            <h1 className='py-5 text-2xl capitalize'>transactions</h1>
            <div id="update-transactions" className='shadow-lg backdrop-blur-md bg-white rounded-lg p-10 flex flex-wrap gap-20 justify-center my-5'>
              {/* Add list here */}
            </div>
            <h1 className='py-5 text-2xl capitalize'>debts</h1>
            <div id="updated-debts" className='shadow-lg backdrop-blur-md bg-white rounded-lg p-10 flex flex-wrap gap-20 justify-center my-5'>
              {/* Add list here */}
            </div>
            <h1 className='py-5 text-2xl capitalize'>total spent</h1>
            <div id="total-expense" className='shadow-lg backdrop-blur-md bg-white rounded-lg p-10 flex flex-wrap gap-20 justify-center my-5'>
              
            </div>
            <h1 className='py-5 text-2xl capitalize'>group activity</h1>
            <div id="group-activity" className='shadow-lg backdrop-blur-md bg-white rounded-lg p-10 flex flex-wrap gap-20 justify-center my-5'>
              {/* Add list here */}
            </div>
        </div>
    </div>
    </>
  )
}

export default GroupTemplate