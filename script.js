let value1 = null
let value2 = null
let symbol = null
let totalValue = null

let topText = document.getElementById('top-span')
let bottomText = document.getElementById('bottom-span')

function getValue(tag) {
    if(symbol == null) {
        if(!(value1 == null)) {
            value1 = parseInt(`${value1}${tag.innerText}`) 
            bottomText.innerText = value1
        }
        else {
            value1 = parseInt(tag.innerText)
            bottomText.innerText = value1 
        }
    
    } else {
        if(!(value2 == null)) {
            value2 = parseInt(`${value2}${tag.innerText}`)
            if(value1 == null) {
                bottomText.innerText = `${symbol} ${value2}`
            }else {
                bottomText.innerText = `${value1} ${symbol} ${value2}`
            }
        }
        else {
            value2 = parseInt(tag.innerText)
            if(value1 == null) {
                bottomText.innerText = `${symbol} ${value2}`
            }else {
                bottomText.innerText = `${value1} ${symbol} ${value2}`
            }
        }
    }
}

function changeSymbol(value) {
    symbol = value
    console.log('The symbol is now '+ symbol)
    return symbol
}

function resetItems() {
    value1 = null
    value2 = null
    symbol = null
    console.log('Items were set back to null')
    bottomText.innerText = ' '
}

function resetCalculator() {
    resetItems()
    totalValue = null
    topText.innerText = ' '
    console.log('Calculator has been reset')
}


const buttons = document.querySelectorAll('button')
buttons.forEach((btn) => {
    if(!(btn.innerText == '/' || btn.innerText == '+' || btn.innerText == '-' || btn.innerText == 'C' || btn.innerText == 'X' || btn.innerText == '=' || btn.innerText == 'dark_mode')) {
        btn.addEventListener('click', () => {
            getValue(btn)
        })
    }
    else if(btn.innerText == '/' || btn.innerText == '+' || btn.innerText == '-' || btn.innerText == 'X' || btn.innerText == 'C') {
        if(btn.innerText == 'C') {
            btn.addEventListener('click', () => {
                resetCalculator()
            })
        } else {
            btn.addEventListener('click', () => {
                //symbol = btn.innerText
                changeSymbol(btn.innerText)
                bottomText.innerText += ` ${symbol}`
            })
        }  
    }
})

document.getElementById('equal').addEventListener('click', () => {
    switch(symbol) {
        case '/':
            if(value1 == null) {
                totalValue = totalValue / value2
            }else {
                totalValue += value1 / value2
            }
            break
        case 'X':
            if(value1 == null) {
                totalValue = totalValue * value2
            }else {
                totalValue += value1 * value2
            }
            break
        case '+':
            if(value1 == null) {
                totalValue = totalValue + value2
            }else {
                totalValue += value1 + value2
            }
            break
        case '-':
            if(value1 == null) {
                totalValue = totalValue - value2
            }else {
                totalValue += value1 - value2
            }
            break
        default:
            break
    }
    console.log(totalValue)
    resetItems()
    topText.innerText = totalValue
})

const modeButton = document.getElementById('mode-button')
modeButton.addEventListener('click', () => {
    if(modeButton.innerText == 'dark_mode') {
        modeButton.style.color = 'orange'
        modeButton.innerText = 'light_mode'
    }else {
        modeButton.style.color = 'black'
        modeButton.innerText = 'dark_mode'
    }
})
