const getFormattedDate = () => {
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${date}-${month}-${year}`
}

const copyData = (data) => {
    navigator.clipboard.writeText(data); 
}

const downloadData = (data, filename) => {
    const aTag = document.createElement('a');
    aTag.href = data;
    aTag.download = filename;
    aTag.click();
}

const isJsonToCsv = (ref) => {
    const { current } = ref;
    return current === "jsontocsv";
}

export { copyData, downloadData, getFormattedDate, isJsonToCsv }; 