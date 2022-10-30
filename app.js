var inputText = document.querySelector("#inputArea");
var button = document.querySelector("#btn-translate");
var outputText = document.querySelector("#outputArea");
var url = "https://api.funtranslations.com/translate/minion.json";

function getServerURL(text) {
  return encodeURI(url + "?text=" + text);
}

function translateToMinion() {
  fetch(getServerURL(inputText.value))
    .then((result) => result.json())
    .then((json) => {
      var output = json.contents.translated;
      outputText.innerText = output;
    });
}
button.addEventListener("click", translateToMinion);
