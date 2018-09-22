let stringToPrint = 'hello';

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
};

printToDom(stringToPrint, 'encode');