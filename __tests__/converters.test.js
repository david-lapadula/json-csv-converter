const { csvToJson, jsonToCsv } = require('../src/app/utils/converters');
// const { Home } = require('../src/app/page');
// const { Dropdown } = require('../src/app/components/Dropdown');

const invalidJson = "123";
const invalidJsonObject = `{"name": "John Doe","age": 30"city": "New York"}`; 
const validJsonObject = `{"name": "Jane Doe","age": 25,"city": "Chicago"}`; 
const tired = `
"name","age","city"
"Jane Doe","25","Chicago"
`
const invalidCsvString = `Name,Age,City`
const validCsvStringOneRow = `Name,Age,City
John,30,New York`;
const validCsvStringTwoRows = `Name,Age,City
John,30,New York
Jane,25,Denver`;
const validCsvAsJsonOneRow = "{\"Name\":\"John\",\"Age\":\"30\",\"City\":\"New York\"}";
const validCsvAsJsonTwoRows = "[{\"Name\":\"John\",\"Age\":\"30\",\"City\":\"New York\"},{\"Name\":\"Jane\",\"Age\":\"25\",\"City\":\"Denver\"}]";

console.log(jsonToCsv(validJsonObject))


// test('renders Dropdown', () => {
//     render(<Home />);
//     expect(Dropdown).toBeInTheDocument();
//   });

test('Invalid json string to csv', () => {
    expect(jsonToCsv(invalidJson)).toBe(null);
});

test('invalid json object to csv', () => {
    expect(jsonToCsv(invalidJsonObject)).toBe(null);
});

test('"" json object to csv', () => {
    expect(jsonToCsv("")).toBe(null);
});

test('valid json object to csv', () => {
    expect(jsonToCsv(validJsonObject)).toBe(tired)
});

test('invalid csv to json', () => {
    expect(csvToJson(invalidCsvString)).toBe(null);
});

test('null csv to json', () => {
    expect(csvToJson(null)).toBe(null);
});

test('[] csv to json', () => {
    expect(csvToJson([])).toBe(null);
});

test('"" csv to json', () => {
    expect(csvToJson(" ")).toBe(null);
});

test('valid csv with two rows to json', () => {
    expect(csvToJson(validCsvStringTwoRows)).toEqual(validCsvAsJsonTwoRows);
});

test('valid csv with one row to json', () => {
    expect(csvToJson(validCsvStringOneRow)).toEqual(validCsvAsJsonOneRow);
});