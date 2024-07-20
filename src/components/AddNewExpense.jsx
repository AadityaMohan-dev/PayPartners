<<<<<<< HEAD
import React, { useState } from "react";
import { initializeApp } from "firebase/app";
// import { db } from "../config";
import {uid} from "uid";
import { getDatabase, ref, push, set, onValue } from "firebase/database";
import { useEffect } from "react";
// import firebaseConfig from "../config"; // Path to your firebaseConfig.js

// Initialize Firebase app
// const app = initializeApp(firebaseConfig);

function AddNewExpense() {

  const [firstfield , setFirstField] = useState("");
  const[fetchdata, setFetchdata]= useState([]);

  const handlechangefunction = (e) => {
    setFirstField(e.target.value);
  }

 const  constWrite = () => {
    const uuid = uid();
    set(ref(db, `/${uuid}`),{
      firstfield,
    })
    setFirstField("");
  }

//  useEffect(()=>{
//     onValue(ref(db), (snapshot)=>{
//       const data = snapshot.val();
//       if(data != null){
//         Object.values(data).map((firstfield)=>{
//           setFirstField(oldArray => [...oldArray, firstfield])
//         })
//       }
//     })
//  },[])
  // const [inputValue1, setInputValue1] = useState("");
  // const [inputValue2, setInputValue2] = useState("");
  // const [inputValue3, setInputValue3] = useState("");
  // const [inputValue4, setInputValue4] = useState("");

  // const saveData = async () => {
  //   const db = getDatabase(app);
  //   const newDocRef = push(ref(db, "ExpenseName/WhoPaid/ForWhom/Date"));
  //   try {
  //     await set(newDocRef, {
  //       ExpenseName: inputValue1,
  //       WhoPaid: inputValue2,
  //       ForWhom:inputValue3,
  //       Date:inputValue4
  //     });
  //     console.log("Data added successfully!");
  //     alert("Data added successfully!");
  //   } catch (error) {
  //     console.error("Error adding data:", error.message);
  //     alert("Error adding data: " + error.message);
  //   }
  // };

  return (
    <div id="main-container" className="p-10">
      <div id="card" className="shadow-lg ba bg-white rounded-lg w-full p-5">
        <div id="row-1" className="flex justify-between">
          <h1 className="text-2xl leading-none text-gray-900 dark:text-white pb-5">
            Add An Expense
          </h1>
        </div>
        <form className="max-w-full mx-auto grid justify-center items-center grid-cols-2 gap-5">
          <div className="mb-5">
            <label
              htmlFor="expense-name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
=======
import React, { useContext } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { UserContext } from "./context/UserContextProvider";

function AddNewExpense() {
  const { setIsExpenseWindowOpen } = useContext(UserContext);

  return (
    <div id="main-container" className="p-10">
      <div
        id="card"
        className="shadow-lg ba bg-white rounded-lg  w-full md:w-[720px] p-5"
      >
        <div id="row-1" className="flex justify-between">
          <h1 className="text-2xl  leading-none text-gray-900 dark:text-white pb-5">
            Add An Expense
          </h1>
          <div
            id="close-btn"
            className="text-3xl md:text-xl cursor-pointer"
            onClick={() => setIsExpenseWindowOpen(false)}
          >
            <IoCloseSharp className="rounded-full bg-white" />
          </div>
        </div>

        <form class="max-w-full mx-auto grid justify-center items-center grid-cols-2 gap-5">
          <div class="mb-5">
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
>>>>>>> e57fdc93ff630fb5a3e53185362d415f2c6ffb4c
            >
              Expense Name
            </label>
            <input
<<<<<<< HEAD
              value={firstfield}
              onChange={handlechangefunction}
              // onChange={(e) => setInputValue1(e.target.value)}
              type="text"
              id="expense-name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Expense Name"
              required
            />
          </div>
          {/* <div className="mb-5">
            <label
              htmlFor="paid-by"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Who Paid
            </label>
            <input
              value={inputValue2}
              onChange={(e) => setInputValue2(e.target.value)}
              type="text"
              id="paid-by"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Who Paid"
              required
            />
          </div>
          
          <div className="mb-5">
            <label
              htmlFor="paid-by"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
             For Whom
            </label>
            <input
              value={inputValue3}
              onChange={(e) => setInputValue3(e.target.value)}
              type="text"
              id="paid-by"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Who Paid"
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="paid-by"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Date
            </label>
            <input
              value={inputValue4}
              onChange={(e) => setInputValue4(e.target.value)}
              type="text"
              id="paid-by"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Who Paid"
              required
            />
          </div> */}

          <div id="btns" className="flex gap-10">
            <button
              type="button"
              onClick={constWrite}
              className="border border-blue-700 h-11 rounded-lg w-40 font-semibold text-blue-700 capitalize hover:bg-blue-700 hover:text-white hover:shadow-lg"
            >
              Save
              {fetchdata.map((firstfield)=>{
                <h1>
                  {firstfield.firstfield}</h1>

              })}
              
            </button>
          </div> 
=======
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
            <button className="border border-blue-700 h-11 rounded-lg w-40 font-semibold text-blue-700 capitalize hover:bg-blue-700 hover:text-white hover:shadow-lg">
              save
            </button>
          </div>
>>>>>>> e57fdc93ff630fb5a3e53185362d415f2c6ffb4c
        </form>
      </div>
    </div>
  );
}

export default AddNewExpense;
