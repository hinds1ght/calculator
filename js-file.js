let operand = ''
let operator = ''
let answer = ''
let topNum
const decimal = '.'
const num = document.querySelectorAll('.num')
const ope = document.querySelectorAll('.op')
const botDis = document.querySelector('.bot')
const topDis = document.querySelector('.top')
const equals = document.querySelector('.equals')
const clear = document.querySelector('.clear')
const deci = document.querySelector('.decimals')
deci.addEventListener('click', () =>{
    if (botDis.textContent.includes('.')) return
    botDis.textContent += decimal
})
clear.addEventListener('click', () => {
    operand = ''
    operator = ''
    answer = ''
    topDis.textContent = ''
    botDis.textContent = ''
})
num.forEach(buttons => buttons.addEventListener('click', (e) =>{
    operand = e.target.textContent
    display(operand)
    answer = ''
}) )
ope.forEach(buttons => buttons.addEventListener('click', (e) =>{
    if ( topDis.textContent !== '' && botDis.textContent !== ''){
        compute()
    }
    operator = e.target.textContent
    topDis.textContent = botDis.textContent + " " + operator
    topNum = botDis.textContent
    botDis.textContent = ''
}) )
equals.addEventListener('click', () =>{
   
    if (botDis.textContent == '' || topNum == '' || operator == '') return
    compute()
}) 
function display(item){
    botDis.textContent += item
}
function compute(){
    const a = Number(topNum)
    const b = Number(botDis.textContent)
    topDis.textContent = ''
    botDis.textContent = ''
    
        if ( operator == '+'){
            answer = a + b
        }else if( operator == '-'){
            answer = a - b
        }else if( operator == '*'){
            answer = a * b
        }else{
                answer = a / b   
        }
        botDis.textContent = answer
}


