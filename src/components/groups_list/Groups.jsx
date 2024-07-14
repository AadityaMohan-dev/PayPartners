import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

function Groups() {
  return (
    <div className="p-4 md:px-10">
      <div className="shadow-lg bg-white rounded-lg px-4 md:px-10 py-6">
        <div id="row-1" className="flex justify-between">
          <h1 className="text-2xl md:text-3xl mb-4 md:mb-5">Groups</h1>
          <img
            width="60"
            height="48"
            src="https://img.icons8.com/color/48/conference-call--v1.png"
            alt="conference-call--v1"
          />
        </div>
        <div className="flex items-center gap-4 md:gap-10 mb-4 md:mb-5">
          <span className="text-lg md:text-xl">Add More Groups</span>
          <IoIosAddCircleOutline className="text-4xl md:text-3xl hover:text-blue-600" />
        </div>
        <ul className="divide-y">
          <li className="flex flex-wrap justify-between items-center hover:shadow-md hover:shadow-blue-950 rounded-lg p-4 md:p-5 bg-blue-100 mt-2">
            <span className="text-xs md:text-sm text-blue-900">Group Name</span>
            <span className="text-xs md:text-sm text-blue-900">
              Total Number of Members
            </span>
            <span className="text-xs md:text-sm text-blue-900">
              Total Expense
            </span>
            <span className="capitalize text-xs md:text-sm text-blue-600 cursor-pointer">
              see more
            </span>
          </li>
          <li className="flex flex-wrap justify-between items-center hover:shadow-md hover:shadow-blue-950 rounded-lg p-4 md:p-5 bg-blue-100 mt-2">
            <span className="text-xs md:text-sm text-blue-900">
              Group Name 2
            </span>
            <span className="text-xs md:text-sm text-blue-900">
              Total Number of Members 2
            </span>
            <span className="text-xs md:text-sm text-blue-900">
              Total Expense 2
            </span>
            <span className="capitalize text-xs md:text-sm text-blue-600 cursor-pointer">
              see more
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Groups;
