const encodeElem = document.getElementById('encode-input');
const decodeElem = document.getElementById('decode-input');
const encodeButtonElem = document.getElementById('encode-button');
const decodeButtonElem = document.getElementById('decode-button');

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
};

const encode = () => {
    let encodedMsg = '';
    let encodeArr = [];
    let encodeStr = encodeElem.value.split("");
    for (i = 0; i < encodeStr.length; i++) {
        let coded = encodeStr[i].charCodeAt();
        encodeArr.push(coded);
        encodedMsg = "Your encoded message is " + encodeArr;
        printToDom(encodedMsg, 'encode');
    }
};

const decode = () => {
    let decodedMsg = '';
    let decoded = "";
    let decodeArr = decodeElem.value.split(",");
    for (i = 0; i < decodeArr.length; i++) {
        decoded += String.fromCharCode(decodeArr[i]);
        decodedMsg = "Your decoded message is " + decoded;
        printToDom(decodedMsg, 'decode');
    }
};

encodeButtonElem.addEventListener('click', (e) => {
    e.preventDefault();
    encode();
});

decodeButtonElem.addEventListener('click', (e) => {
    e.preventDefault();
    decode();
});