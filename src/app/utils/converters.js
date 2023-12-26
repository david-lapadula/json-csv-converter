const csvToJson = (data) => {

}

const jsonToCsv = (data) => {
  var json = parseJson(data);
  if (!json) return null;

  if (Array.isArray(json)) {
    return json.map(item => {
      return buildCSVFromJson(item);
    }).join('');
  } else {
    return buildCSVFromJson(json);
  }
}

const parseJson = (str) => {
  try {
    var json = JSON.parse(str);
    if (typeof json === 'object') return json;
    return false;
  } catch (e) {
    return false;
  }
}

const isValidCSV = (data) => {

}

const buildCSVFromJson = (json) => {
  let keys = Object.keys(json).join(',') + ",";
  let values = Object.values(json).join(',') + ",";
  return keys + "\r\n" + values + "\r\n" 
}

export { csvToJson, jsonToCsv }; 