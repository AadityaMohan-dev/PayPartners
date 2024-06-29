import React from "react";
import { CgAdd } from "react-icons/cg";
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
    <div id="home-container" className="p-5 sm:p-10 md:p-10">
      <div
        id="content"
        className="shadow-lg rounded-xl bg-white min-w-xs max-w-full"
      >
        <div
          id="greeting"
          className="flex flex-col sm:flex-row justify-between shadow-lg rounded-lg p-5 bg-gradient-to-r from-gray-900 to-gray-600"
        >
          <h1 className="text-2xl capitalize text-white mb-4 sm:mb-0 sm:text-3xl">
            <span className="text-blue-500">Hi</span>, Aaditya Mohan !!
          </h1>
          <button className="text-white flex gap-2 sm:gap-10 capitalize font-semibold text-lg hover:text-blue-400">
            <span className="hidden sm:inline-block ">Add New expense</span>
            <CgAdd className="text-2xl sm:text-3xl " />
          </button>
        </div>
      </div>
      <div
        id="graph-container"
        className="py-5 shadow-lg bg-white rounded-lg mt-3 px-10 divide-y"
      >
        <div id="row-1" className="flex flex-wrap justify-around">
          <div id="col-1" className="w-full md:w-1/2 py-3">
            <h1 className="text-xl md:text-2xl">Transactions</h1>

            <div class="w-full h-80 overflow-y-scroll mb-5 mt-4 max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <div class="flex items-center justify-between mb-4 ">
                <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
                  Latest Expenses
                </h5>
                <a
                  href="#"
                  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  View all
                </a>
              </div>
              <div class="flow-root">
                <ul
                  role="list"
                  class="divide-y divide-gray-200 dark:divide-gray-700"
                >
                  <li class="py-3 sm:py-4">
                    <div class="flex items-center">
                      <div class="flex-shrink-0"></div>
                      <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Neil Sims
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                          email@windster.com
                        </p>
                      </div>
                      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $320
                      </div>
                    </div>
                  </li>
                  <li class="py-3 sm:py-4">
                    <div class="flex items-center ">
                      <div class="flex-shrink-0"></div>
                      <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Bonnie Green
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                          email@windster.com
                        </p>
                      </div>
                      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $3467
                      </div>
                    </div>
                  </li>
                  <li class="py-3 sm:py-4">
                    <div class="flex items-center">
                      <div class="flex-shrink-0"></div>
                      <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Michael Gough
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                          email@windster.com
                        </p>
                      </div>
                      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $67
                      </div>
                    </div>
                  </li>
                  <li class="py-3 sm:py-4">
                    <div class="flex items-center ">
                      <div class="flex-shrink-0"></div>
                      <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Lana Byrd
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                          email@windster.com
                        </p>
                      </div>
                      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $367
                      </div>
                    </div>
                  </li>
                  <li class="pt-3 pb-0 sm:pt-4">
                    <div class="flex items-center ">
                      <div class="flex-shrink-0"></div>
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
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="col-2" className="w-full md:w-1/2 py-3">
            <h1 className="text-xl md:text-2xl">Total Expense</h1>
            <Bar data={data} />
          </div>
        </div>
        <div
          id="col-3"
          className="w-full md:w-full py-3 flex flex-wrap justify-around items-center"
        >
          <h1 className="text-xl md:text-5xl py-5">Where you Spent </h1>
          <div id="graph" className="md:w-80 md:pt-10">
            <Doughnut data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
