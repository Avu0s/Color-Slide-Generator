'use strict'

const hexChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.querySelector('#btn')
const color = document.querySelector('.color')
const copyText = document.querySelector('#copy')
const pausePlay = document.querySelector('#pause')
let interval;

const pureRandomNumArr = arr => Math.floor(Math.random() * arr.length)
const getRandomHex = () => pureRandomNumArr(hexChar)

const pureCopy = copied => navigator.clipboard.writeText(copied.textContent)
const copyHex = () => {pureCopy(color); copyText.textContent = 'copied';}

const numberGenerator = () =>{
    let hexCode = '#'
    for(let i = 0; i < 6; i++){
      hexCode += hexChar[getRandomHex()]
    }
    document.body.style.backgroundColor = hexCode
    color.textContent = hexCode
    copyText.textContent = 'copy'
}

const timer = () => interval = setInterval(numberGenerator, 5000)

const slideControl = ()=> {
  if (pause.textContent == '||'){
    pause.textContent = '▶'
    clearInterval(interval)
  }
  else{
    pause.textContent = '||'
    timer()
  }
}

copyText.addEventListener('click', copyHex)    
btn.addEventListener('click', numberGenerator)
pausePlay.addEventListener('click', slideControl)
