let txt = document.getElementById("message")
let countbtn = document.querySelector(".count-btn")
let wordresult = document.querySelector(".word-result")
let result=document.getElementById("result")

function totalword() {

    let txtinput = txt.value
    console.log(txtinput)
    // for removing extra spaces
    let spacetrimmed=txtinput.replace(/\s+/g, " ").trim();
    console.log(spacetrimmed)
    let spacecount = spacetrimmed.split(" ")
    console.log(spacecount)
    let wordcount = spacecount.length
    console.log(wordcount)
    // for removing first blank space
    if(spacecount==""){
        wordcount=0
    }
    console.log(wordcount)

    result.innerHTML = wordcount
}

countbtn.addEventListener("click", totalword)