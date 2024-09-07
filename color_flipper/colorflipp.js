const colortxt = document.getElementById("color")
const warp = document.getElementById("warp")
const btn = document.getElementById("btn")

const hex=[0, 1, 2, 3, 4, 6, 7, 8, 9, 'A','B','C','D','E','F']

btn.addEventListener('click', changebg)

// bg color changer
function changebg(){
    let hexcolor = '#'
    for (let i=1;i<=6;i++){
        hexcolor += randHexVal()
    }
    console.log(hexcolor)
    colortxt.innerHTML=hexcolor
    warp.style.backgroundColor=hexcolor
}
// rand val genrerator fn
function randHexVal(){
    let randomindex= Math.floor(Math.random()*15)
    return hex[randomindex]
}
