const csvToJson = (data) => {
  if (!data || data.length === 0 || !data.trim()) return null;

  // Assume csv was built with quotes
  data = data.replace(/['"]/g, '');

  const rows = data.split('\n');

  // need at least 1 row for headers
  if (rows.length < 2) return null; 

  const headers = rows.shift().split(','); 

  let json = null; 

  if (rows.length === 1) {
    json = {};
    let row = rows[0].split(',');
    for (let i = 0; i < headers.length; i++) {
      json[headers[i]] = row[i]; 
    }
  } else {
    json = []; 
    for (let i = 0; i < rows.length; i++) {
      let rowObject = {};
      let row = rows[i].split(',');
      for (let j = 0; j < headers.length; j++) {
        rowObject[headers[j]] = row[j];
      }
      json.push(rowObject)
    }
  }

  return JSON.stringify(json); 
}

const jsonToCsv = (data) => {
  var json = parseJson(data);
  if (!json) return null;

  let isArray = Array.isArray(json);
  let headers = buildHeadersArray(isArray, json);
  let rowData = buildRowData(isArray, headers, json);

  return headers.map(item => `"${item}"`).join(',') + '\r\n' + rowData;
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
        }).join(',') + '\r\n'; 
    }).join(''); 
  } else {
    rowData = headers.map(header => {
      return json.hasOwnProperty(header) ? `"${json[header]}"` : `""`
    }).join(',') + '\r\n'; 
  }

  return rowData;
}

export { csvToJson, jsonToCsv }; 