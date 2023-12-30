const Dropdown = (props: any) => {
  return (
    <div className='flex justify-center mt-8 mb-8'>
        <select onChange={props.onChangeHandler} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-grey-500'>
            <option value='jsontocsv'>JSON to CSV</option>
            <option value='csvtojson'>CSV to JSON</option>
        </select>
    </div>
  )
}

export default Dropdown; 