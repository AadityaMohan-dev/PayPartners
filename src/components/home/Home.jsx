import React from 'react'

function Home() {
  return (
    <>
    <div id="home-container" className='p-5'>
        <div id="content" className='shadow-lg rounded-xl py-5 px-10'>
        <div id="greeting" className='flex justify-between'>
            <h1 className='text-2xl  capitalize'>Hi, Aaditya Mohan !!</h1>
            <button className='rounded-lg hover:bg-teal-700 hover:text-white font-semibold text-teal-700 capitalize border border-teal-700 items-center p-2'>Add new Expense </button>
        </div> 
        <div id="content" className='py-5  w-full h-full'>
            <div id="total-expense" className='text-xl font-sans capitalize py-5'>Total Expense</div>
            <div id="dbts" className='text-xl font-sans capitalize py-5'>
                Debts remaining
            </div>
            <div id="transictions" className='text-xl font-sans capitalize py-5'>Transition</div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Home