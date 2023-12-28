const csvToJson = (data) => {

}

const jsonToCsv = (data) => {
  var json = parseJson(data);
  if (!json) return null;

  let isArray = Array.isArray(json);
  let headers = buildHeadersArray(isArray, json);
  let rowData = buildRowData(isArray, headers, json);

  return headers.map(item => `"${item}"`).join(',') + "\r\n" + rowData;
}

const parseJson = (data) => {
  try {
    var json = JSON.parse(data);
    if (typeof json === 'object') return json;
    return false;
  } catch (e) {
    return false;
  }
}

const parseCsv = (data) => {

}


const buildHeadersArray = (isArray, json) => {
  if (!isArray) return Object.keys(json); 

  let headerSet = new Set(); 

  for (let item of json) {
    Object.keys(item).forEach(header => {
      headerSet.add(header);
    });
  }

  return Array.from(headerSet);
}

const buildRowData = (isArray, headers, json) => {
  let rowData; 

  if (isArray) {
    rowData = json.map(obj => {
        return headers.map(header => {
          return obj.hasOwnProperty(header) ? `"${obj[header]}"` : `""`
        }).join(',') + "\r\n"; 
    }).join(''); 
  } else {
    rowData = headers.map(header => {
      return json.hasOwnProperty(header) ? `"${json[header]}"` : `""`
    }).join(',') + "\r\n"; 
  }

  return rowData;
}

export { csvToJson, jsonToCsv }; 