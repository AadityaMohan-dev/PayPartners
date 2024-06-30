import React from 'react'

function TransactionList() {
  return (
    <>
    <div id="main-container" className='px-10 py-5'>
        <div id="content" className='shadow-lg rounded-lg bg-white p-10'>
        <h1 className='text-xl md:text-2xl py-5'>All Transaction List</h1> 
<ul class="max-w-full h-auto md:h-screen divide-y overflow-auto  divide-gray-200 dark:divide-gray-700">
   
   <li class="pb-3 sm:pb-4">
      <div class="flex items-center space-x-4 rtl:space-x-reverse">
         <div class="flex-shrink-0">
         </div>
         <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
               Neil Sims
            </p>
            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
               email@flowbite.com
            </p>
         </div>
         <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            $320
         </div>
      </div>
   </li>
   <li class="py-3 sm:py-4">
      <div class="flex items-center space-x-4 rtl:space-x-reverse">
         <div class="flex-shrink-0">
         </div>
         <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
               Bonnie Green
            </p>
            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
               email@flowbite.com
            </p>
         </div>
         <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            $3467
         </div>
      </div>
   </li>
   <li class="py-3 sm:py-4">
      <div class="flex items-center space-x-4 rtl:space-x-reverse">
         <div class="flex-shrink-0">
         </div>
         <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
               Michael Gough
            </p>
            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
               email@flowbite.com
            </p>
         </div>
         <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            $67
         </div>
      </div>
   </li>
   <li class="py-3 sm:py-4">
      <div class="flex items-center space-x-4 rtl:space-x-reverse">
         <div class="flex-shrink-0">
         </div>
         <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
               Thomas Lean
            </p>
            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
               email@flowbite.com
            </p>
         </div>
         <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            $2367
         </div>
      </div>
   </li>
   <li class="pt-3 pb-0 sm:pt-4">
      <div class="flex items-center space-x-4 rtl:space-x-reverse">
         <div class="flex-shrink-0">
         </div>
         <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
               Lana Byrd
            </p>
            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
               email@flowbite.com
            </p>
         </div>
         <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            $367
         </div>
      </div>
   </li>
</ul>
        </div>

    </div>
    </>
  )
}

export default TransactionList