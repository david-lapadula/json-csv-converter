const Dropdown = () => {
  return (
    <div className="flex justify-center">
        <select>
            <option value="jsontocsv">JSON to CSV</option>
            <option value="csvtojson">CSV to JSON</option>
        </select>
    </div>
  )
}

export default Dropdown; 