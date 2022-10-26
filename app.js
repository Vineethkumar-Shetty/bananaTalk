var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-area");
var txtOutput = document.querySelector("#output-text");
var serverURL = "https://jsonplaceholder.typicode.com/todos/1";
function getTranslationUrl (text) {
    return serverURL + "?"+text;
}  
console.log(btnTranslate);
function clickHandler() {
//   console.log("ayyyoo...Rama");
//   console.log(txtInput.value);
//   txtOutput.innerText = "cbbchjbdchj " + txtInput.value;
var inputText = txtInput.value;
fetch(getTranslationUrl(inputText)).then(response=>response.json()).then(json=>{var outvalue =json.title;
txtOutput.innerText = outvalue})

}
btnTranslate.addEventListener("click", clickHandler);
