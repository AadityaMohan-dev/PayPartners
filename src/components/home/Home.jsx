import React from 'react'
import { CgAdd } from "react-icons/cg";
function Home() {
  return (
    <>
    <div id="home-container" className='p-5'>
        <div id="content" className='shadow-lg rounded-xl bg-white'>
        <div id="greeting" className='flex justify-between shadow-lg rounded-lg p-5 bg-gradient-to-r from-gray-900 to-gray-600'>
            <h1 className='text-2xl  capitalize text-white'><span className='text-blue-500'>Hi</span>, Aaditya Mohan !!</h1>
            <button className='text-white flex gap-10 capitalize font-semibold text-lg'>Add New expense<CgAdd className='text-3xl'/> </button>
        </div> 
        <div id="content" className='px-5 divide-y w-full h-full'>
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