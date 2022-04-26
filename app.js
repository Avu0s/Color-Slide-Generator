const hexChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.querySelector('#btn')
const color = document.querySelector('.color')
const copy = document.querySelector('#copy')

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

setInterval(numberGenerator, 6000)

copy.addEventListener('click', copyHex)    
btn.addEventListener('click', numberGenerator)