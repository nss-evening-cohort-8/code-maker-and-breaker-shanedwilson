const encodeElem = document.getElementById('encode-input');
const EncodeButtonElem = document.getElementById('encode-button');

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
};

const encode = () => {
    let encodedMsg = '';
    let encodeArr = [];
    let encodeStr = encodeElem.value.split("");
    console.log(encodeStr);
    for (i = 0; i < encodeStr.length; i++) {
        let coded = encodeStr[i].charCodeAt();
        encodeArr.push(coded);
        encodedMsg = "Your encoded message is " + encodeArr;
        printToDom(encodedMsg, 'encode');
        console.log(encodeArr);
    }
};

EncodeButtonElem.addEventListener('click', (e) => {
    e.preventDefault();
    encode();
});