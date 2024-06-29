import React from 'react'

function Home() {
  return (
    <>
    <div id="home-container" className='p-5'>
        <div id="content" className='shadow-lg rounded-xl py-5'>
        <div id="greeting" className='flex justify-between shadow-lg rounded-lg p-5 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
            <h1 className='text-2xl  capitalize text-white'>Hi, Aaditya Mohan !!</h1>
            <button className='rounded-lg shadow-xl  font-semibold text-white capitalize border border-white items-center p-2'>Add new Expense </button>
        </div> 
        <div id="content" className='py-5 divide-y w-full h-full'>
            <div id="total-expense" className='text-xl font-sans  capitalize py-5'>Total Expense</div>
            <div id="dbts" className='text-xl font-sans capitalize  py-5'>
                Debts remaining
            </div>
            <div id="transictions" className='text-xl font-sans capitalize  py-5'>Transition</div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Home