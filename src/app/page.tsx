"use client"
import React, { useRef, useState } from "react"
import Dropdown from "./components/Dropdown";
import { csvToJson, jsonToCsv } from "./converters/converters"

export default function Home() {

  const [error, setError] = useState<String | null>();
  const option = useRef("jsontocsv");

  const dropdownSelectHandler = (event: any) => {
    option.current = event.target.value;
  }

  const convertHandler = () => {
    const { current } = option;
    const isJsonToCsv = !!(current === "jsontocsv");

    // validate empty text
    
    if (isJsonToCsv){
      const csvData = jsonToCsv("hello");

      if (!csvData) {
        setError("Please enter a valid json string"); 
      }

      // set to csv
    }

    // handle csv to json
  }

  const clearData = () => {
    setError(null);
  }

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div>
        <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
          JSON CSV Converter
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Easily convert CSV to JSON or CSV to JSON. Copy and paste the data or load in a local file. Save the results.
        </p>

        <Dropdown
          onSelectHandler={dropdownSelectHandler}
        />

        {
          error != null && 
          (
            <div className="sm:px-16 xl:px-48 flex flex-col items-center">
              <p className="text-red-600 text-lg">{error}</p>
            </div>
          )
        }

        <div className="grid grid-cols-2 sm:px-16 xl:px-48 h-full">
          <div className="p-1.5">
            <textarea
              id="pre-convert"
              className="block m-2 p-2.5 w-full h-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </textarea>
          </div>
          <div className="p-1.5">
            <textarea
              id="post-convert"
              disabled
              className="block m-2 p-2.5 w-full h-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </textarea>
          </div>
        </div>

        <div className="mt-8 grid content-center sm:px-16 xl:px-48">
          <button
            type="button"
            onClick={convertHandler}
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            Convert
          </button>
          
          <button 
            type="button" 
            onClick={clearData}
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            Clear
          </button>
        </div>
      </div>
    </main>
  )
}
