'use strict'

//declaring constants
const hexChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const next = document.querySelector('#next')
const colorCode = document.querySelector('.color')
const copyText = document.querySelector('#copy')
const pausePlay = document.querySelector('#pause')
let interval;

//random number generation
const pureRandomNumArr = arr => Math.floor(Math.random() * arr.length)
const getRandomHex = () => pureRandomNumArr(hexChar)

//reusable copy function
const pureCopy = copied => navigator.clipboard.writeText(copied.textContent)
const copyHex = () => {pureCopy(colorCode); copyText.textContent = 'copied';}

//loop the hexArr for six values
const numberGenerator = () =>{
    let hexCode = '#'
    for(let i = 0; i < 6; i++){
      hexCode += hexChar[getRandomHex()]
    }
    //set background color style to post loop hexcode
    document.body.style.backgroundColor = hexCode
    
    //set the text to the current hexcode
    colorCode.textContent = hexCode
    
    //text should say copy for every new color
    copyText.textContent = 'copy'
}

//timer to generate new codes & auto run the app
const timer = () => interval = setInterval(numberGenerator, 5000)

//controls to interact with the app at users' pace
const slideControl = ()=> {
    
    //change pause to play on click and stop slideshow
  if (pausePlay.textContent == '||'){
    pausePlay.textContent = '▶'
    clearInterval(interval)
  }
  else{
      
      //change play to pause and start slideshow
    pausePlay.textContent = '||'
    timer()
  }
}
//copy button with copyHex as callback function
copyText.addEventListener('click', copyHex)

//next button with numberGenerator as callback function
next.addEventListener('click', numberGenerator)

//pause/play toggle button with slideControl as callback function
pausePlay.addEventListener('click', slideControl)
