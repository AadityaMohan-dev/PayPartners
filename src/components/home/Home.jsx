import React from "react";

import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

function Home() {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Example Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  return (
    <div id="home-container" className="p-5 sm:p-10 md:px-5 md:py-5">
      <div id="row-1" className="flex flex-wrap justify-between ">
        <div
          id="col-1-transactions"
          className="shadow-lg bg-white md:w-[620px]  p-5 rounded-lg"
        >
          <h1 className="text-xl md:text-2xl">Transactions</h1>
          <div
            id="list-of-recent-transactions-head"
            className="flex justify-between px-5 shadow-lg rounded-lg py-5 mt-2  bg-gradient-to-r from-gray-900 to-gray-600"
          >
            <h5 class="text-lg  leading-none text-white dark:text-white">
              Latest Expenses
            </h5>
            <a
              href="#"
              class="text-sm font-medium text-white hover:text-blue-00 hover:underline dark:text-blue-500"
            >
              View all
            </a>
          </div>
          <ul className="mt-3  overflow-y-auto h-72">
            <li className="flex justify-around p-3 shadow-lg rounded-lg hover:bg-blue-100 bg-blue-200">
              <div class="flex-1 min-w-0 ms-4">
                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Expense Name
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  Who paid
                </p>
              </div>
              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $2367
              </div>
            </li>
            <li className="flex justify-around p-3 shadow-lg rounded-lg my-3 bg-blue-200">
              <div class="flex-1 min-w-0 ms-4">
                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Thomes Lean
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  email@windster.com
                </p>
              </div>
              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $2367
              </div>
            </li>
          </ul>
        </div>

        <div
          id="col-2-expenses"
          className="shadow-lg bg-white w-1/2 p-5 rounded-lg"
        >
          <div id="col-2" className="w-full  py-3">
            <h1 className="text-xl md:text-2xl">Total Expense</h1>
            <Bar data={data} />
          </div>
        </div>
      </div>
      <div
        id="row-2"
        className="shadow-lg bg-white flex flex-wrap justify-around items-center pb-10 px-5 rounded-lg mt-5 w-full "
      >
        <h1 className="text-xl md:text-5xl py-5">Where you Spent !!</h1>
        <div id="graph" className="md:w-80 md:pt-10">
          <Doughnut data={data} />
        </div>
      </div>
    </div>
  );
}

export default Home;
