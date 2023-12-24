const csvToJson = (data) => {

}

const jsonToCsv = (data) => {
    if (!isValidJson(data)) return null; 


  // items is the array

  // var json = json3.items
  // var fields = Object.keys(json[0])
  // var replacer = function(key, value) { return value === null ? '' : value } 
  // var csv = json.map(function(row){
  //   return fields.map(function(fieldName){
  //     return JSON.stringify(row[fieldName], replacer)
  //   }).join(',')
  // })
  // csv.unshift(fields.join(',')) // add header column
  // csv = csv.join('\r\n');
  // console.log(csv)

  // const replacer = (key, value) => value === null ? '' : value // specify how you want to handle null values here
  // const header = Object.keys(items[0])
  // const csv = [
  //   header.join(','), // header row first
  //   ...items.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
  // ].join('\r\n')

  // console.log(csv)
}

const isValidJson = (str) => {
    try {
        var json = JSON.parse(str);
        return (typeof json === 'object');
      } catch (e) {
        return false;
      }
}

const isValidCSV = (data) => {
    
}

export { csvToJson, jsonToCsv }; 