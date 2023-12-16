const csvToJson = (data) => {

}

const jsonToCsv = (data) => {

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