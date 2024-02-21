// crear un array con las letras
const array_letters = ['a','b','c','d','e','f','g','h','i','j','k','l', 'ñ','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// creamos el array de palabras para adivinar 
const array_words =["samantha","fernando","noa"]

// seleccionar el contenedor de nuestras teclas 
const container_keys= document.getElementById("buttons_letters");
// selecionamos el contedor dfe las palabras
const containerWords = document.querySelector(".contenedor-linea");
const btn_start= document.getElementById("inicio")
let image = document.getElementById("imagen-game")
let errorCounter=1
let buttoDisable = true
btn_start.addEventListener("click",paintletter)
let valuemin = 0
let valuemax = array_words.length
let word = "";
// creamos un ciclo for para crear  cada una de las letras recorriendo el array 
for (let index = 0; index < array_letters.length; index++) {
    // creamos la etiqueta que deceamos en este caso a
    let key = document.createElement("button");
    key.classList.add("letra")
    // asignar el evento click a la etiqueta creada 
    key.addEventListener('click', click_letras);
    // asigno la letra a la equite html 
    key.innerHTML=array_letters[index].toUpperCase()
    buttoDisable == true ? key.disabled= true: key.disabled= false
    // pintamos o agragamos nuestras teclas al dom 
    container_keys.appendChild(key)
}
// creamos la funcion que permitira obtener las letras de cada uno de los botones 
function click_letras(event) {
    let button = event.target
    let letter = button.innerHTML
    let errorflag = false
    
    console.log("word",word)
    for (let i = 0; i < word.length; i++) {
        if (letter === word[i].toUpperCase()){
            let elements_word = document.querySelectorAll(".contenedor-linea .linea")
            elements_word[i].innerHTML=letter
            errorflag = true
        }
    }
    if( errorflag == false){
        errorCounter++
        changeSource(errorCounter)
        let src=`/img/ahorcado/hm${errorCounter}.png`
        image.setAttribute("src", src);
    }
}
function paintletter(event) {
    cleanletter()
    word=randomletter()
    keys = document.querySelectorAll("#buttons_letters button")
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        key.disabled=false;
    }
    // pinta los objetos line en el dom de la palabra seleccionada 
    for (let i = 0; i < word.length; i++) {
        let letterDom =document.createElement("div");
        letterDom.classList.add("linea")
        containerWords.appendChild(letterDom)
    }
}
function changeSource(errorCounter){
    if(errorCounter >= 15){
       window.idPerdio.click()
    }
}
function cleanletter(){
    let containerletters = document.getElementById("letras_dom");
    containerletters.innerHTML = '';
}
function randomletter(){
    let  randomvalue = Math.floor(Math.random()*(valuemax-valuemin)+valuemin)
    const word= array_words[randomvalue]
    console.log("palabra ramdom",array_words[randomvalue])
    return  word 
}