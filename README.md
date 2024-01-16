# JSON CSV Converter

## Table of contents
1. [Description](#description)
2. [Technology](#technology)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Acknowledgements](#acknowledgements)

## Description

This is a web tool built with Next.js that converts data between JSON and CSV formats. Users have the choice to input raw text, or may upload a file via a standard uploader or by drag and drop. Once the conversion has been completed, the user may copy the results to their clipboard or save them to a file.

## Technology

As noted above, the main library used for this application is Next.js. By offering flexible tooling and snappy server side rendering it remains an excellent choice for projects of all sizes. A link to the documentation provided by the Next.js team is below, along with a few other libraries used to build this conversion tool. 

* [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
* [Next.js](https://nextjs.org/docs)
* [Tailwind CSS](https://v2.tailwindcss.com/docs)
* [Jest.js](https://jestjs.io/docs/getting-started)
* [React-toastify](https://www.npmjs.com/package/react-toastify)

## Installation

1. Clone and install the project locally.
```bash
git clone https://github.com/DavidLapadula/JsonCsvConverter.git
cd jsoncsvconverter
```

2. Install packages. 
```bash
npm install
```

3. Verify functionality by running the unit tests.

```bash
npm run test
```

4. Run the project. It should be available at It should be available at **localhost:3000**. 

```bash
npm run dev
```

## Usage

#### CSV to JSON
![CSV to JSON](md_images/csvtojson.gif)
#### JSON to CSV
![JSON to CSV](md_images/jsontocsv.gif)
#### Upload file
![Upload File](md_images/uploadfile.gif)
#### Drag and drop file
![Drag and Drop File](md_images/draganddropfile.gif)

## Acknowledgements

I would like to express my gratitude to "florinpop17" on Github for the excellent repository of sample application idea provided. You can find the list **[here](https://github.com/florinpop17/app-ideas)**. Be sure to check out this page if you are looking for inspiration on your next pet project.
