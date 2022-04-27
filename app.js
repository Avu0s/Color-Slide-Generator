'use strict'

const hexChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.querySelector('#btn')
const color = document.querySelector('.color')
const copy = document.querySelector('#copy')
const pause = document.querySelector('#pause')
let interval = null

const copyHex = ()=>{
  let copiedText = color.textContent
  navigator.clipboard.writeText(copiedText)
  copy.textContent = 'copied' 
}

const numberGenerator = () =>{
    let hexColor = '#'
    for(let i = 0; i < 6; i++){
      hexColor += hexChar[getRandomNumber()]
    }
    document.body.style.backgroundColor = hexColor
    color.textContent = hexColor
    copy.textContent = 'copy'
}

const getRandomNumber = () => Math.floor(Math.random() * hexChar.length)
const timer = () => interval = setInterval(numberGenerator, 6000)

const pausePlay = ()=> {
  if (pause.textContent == '||'){
    pause.textContent = '▶'
    clearInterval(interval)
  }
  else{
    pause.textContent = '||'
    timer()
  }
}

copy.addEventListener('click', copyHex)    
btn.addEventListener('click', numberGenerator)
pause.addEventListener('click', pausePlay)
