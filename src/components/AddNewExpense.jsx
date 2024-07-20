import React from "react";
import { IoCloseSharp } from "react-icons/io5";
 
function AddNewExpense() {
  return (
<div id="main-container" className="p-10">
<div id="card" className="shadow-lg ba bg-white rounded-lg w-full p-5">
<div id="row-1" className="flex justify-between">
<h1 className="text-2xl  leading-none text-gray-900 dark:text-white pb-5">
          Add An Expense
</h1>
<div id="close-row" className='text-3xl md:text-5xl fixed w-full flex justify-end p-10 cursor-pointer' onClick={()=>setIsAuthClose(true)}><IoCloseSharp /></div>
</div>
<form class="max-w-full mx-auto grid justify-center items-center grid-cols-2 gap-5">
<div class="mb-5">
<label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
>
              Expense Name
</label>
<input
              type="text"
              id="base-input"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Expense"
              required
            />
</div>
<div class="mb-5">
<label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
>
              Expense Name
</label>
<input
              type="text"
              id="base-input"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Expense"
              required
            />
</div>
<div class="mb-5">
<label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
>
              Expense Name
</label>
<input
              type="text"
              id="base-input"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Expense"
              required
            />
</div>
<div class="mb-5">
<label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
>
              Expense Name
</label>
<input
              type="text"
              id="base-input"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Expense"
              required
            />
</div>
<div class="mb-5">
<label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
>
              Expense Name
</label>
<input
              type="text"
              id="base-input"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Expense"
              required
            />
</div>
<div id="btns" className="flex gap-10">
              {/* delete button */}
          {/* <button className="border border-red-700 h-12 rounded-lg w-40 font-semibold text-red-700 capitalize hover:bg-red-700 hover:text-white hover:shadow-lg">Delete</button>
           */}
          {/* save button */}
<button className="border border-blue-700 h-11 rounded-lg w-40 font-semibold text-blue-700 capitalize hover:bg-blue-700 hover:text-white hover:shadow-lg">save</button>
</div>
</form>
</div>
</div>
  );
}
 
export default AddNewExpense;