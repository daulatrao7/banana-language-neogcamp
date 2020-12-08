var btntranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputdiv = document.querySelector("#output");

function clickhandler(){
    outputdiv.innerText = "ajajaja " + txtInput.value;
};

btntranslate.addEventListener("click", clickhandler)
