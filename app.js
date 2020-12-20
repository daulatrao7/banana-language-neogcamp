var btntranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputdiv = document.querySelector("#output");

var serverURL= "https://api.funtranslations.com/translate/pig-latin.json"

function getTranslationURL(text){
    return serverURL + "?" + "text" + text
}

function errorHandler(error){
    console.log("error occured", error);
    alert("something is wrong with the server")
}

function clickHandler(){
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
    .then(Response => Response.json())
    .then(json=> {
        var translatedText = json.contents.translated;
        outputdiv.innerText= translatedText;
    })
    .catch(errorHandler)
};

btntranslate.addEventListener("click", clickHandler)