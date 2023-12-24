"use client"
import React, { useRef, useState } from "react"
import Dropdown from "./components/Dropdown";
import { csvToJson, jsonToCsv } from "./utils/converters"
import { copyData, downloadData, getFormattedDate, isJsonToCsv } from "./utils/helpers"

export default function Home() {

  const FILE_INPUT_TEXT = "Click to upload, drag a file, or upload text below.";
  
  const option = useRef("jsontocsv");
  const [error, setError] = useState<String | null>();
  const [inputData, setInputData] = useState("");
  const [outputData, setOutputData] = useState("");
  const [fileInputText, setFileInputText] = useState(FILE_INPUT_TEXT);

  const convertOptionHandler = (event: any) => {
    option.current = event.target.value;
  }

  const conversionHandler = () => {
    if (!inputData){
      setError("Please ensure the left field is filled in."); 
      return; 
    }
    
    if (isJsonToCsv(option)){
      const csvData = jsonToCsv(inputData);

      if (!csvData) {
        setError("Please enter a valid json string"); 
      }

      // set to csv
    }

    // handle csv to json
  }

  const handleInputChange = (event: any) => {
      clearData();
      setInputData(event.target.value);
  }

  const handleFileUpload = (event: any) => {
    const { files, value } = event.target;
    const fileReader = new FileReader();

    clearData();

    // handle file name 
    if (value) {
      let fileName = value.split('\\').pop().split('/').pop();
      setFileInputText(fileName);
    }

    // handle file upload
    fileReader.readAsText(files[0], "UTF-8");
    fileReader.onload = e => {
      const content: any = e.target.result;
      setInputData(content)
    };
  }

  const downloadOutputData = () => {
    if (!outputData) {
      setError("Nothing to download");
      return;
    }

    let filename = `output_${getFormattedDate()}`; 
    if (isJsonToCsv(option)) {
      filename += ".csv";
    } else {
      filename += ".json";
    }

    setError(null);
    downloadData(outputData, filename); 
  }

  const copyOutputData = () => {
    if (!outputData) {
      setError("Nothing to copy");
      return;
    }

    setError(null);
    copyData(outputData); 
  }

  const clearData = () => {
    setInputData("");
    setOutputData("");
    setError(null);
    setFileInputText(FILE_INPUT_TEXT);
  }

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
          JSON CSV Converter
        </h1>
        <p className="mb-4 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Easily convert CSV to JSON or CSV to JSON. Copy and paste the data or load in a local file. Save the results.
        </p>

        <Dropdown
          onSelectHandler={convertOptionHandler}
        />

        {
          error != null && 
          (
            <div className="sm:px-16 xl:px-48 flex flex-col items-center mb-2">
              <p className="text-red-600 text-lg">{error}</p>
            </div>
          )
        }

        <div className="grid grid-cols-2 sm:px-16 xl:px-48">
          <div className="pl-4">            
            <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 p-2">
                    <div className="flex flex-col items-center justify-center">
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">{fileInputText}</span>
                        </p>
                    </div>
                    <input type="file" className="hidden"  onChange={handleFileUpload}/>
                </label>
            </div> 
          </div>
          <div className="text-center">
          <button 
            type="button"
            onClick={copyOutputData}
            className="text-gray-900 w-2/5 mr-2 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
              Copy
          </button>
          <button 
            type="button" 
            onClick={downloadOutputData}
            className="text-gray-900 w-2/5 ml-2 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
              Download
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:px-16 xl:px-48 h-full">
          <div className="p-1.5">
            <textarea
              onChange={handleInputChange}
              value={inputData}
              className="block m-2 p-2.5 w-full h-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </textarea>
          </div>
          <div className="p-1.5">
            <textarea
              disabled
              value={outputData}
              className="block m-2 p-2.5 w-full h-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </textarea>
          </div>
        </div>

        <div className="mt-8 grid content-center sm:px-16 xl:px-48">
          <button
            type="button"
            onClick={conversionHandler}
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
