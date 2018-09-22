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
    let decodeArr = [];
    let decodeStr = decodeElem.value.split(",");
    console.log(decodeStr);
    for (i = 0; i < decodeStr.length; i++) {
        let decoded = String.fromCharCode(decodeStr[i]);
        decodeArr.push(decoded);
        decodedMsg = "Your decoded message is " + decodeArr.join("");
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
