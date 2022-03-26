const characterAmountRange = document.getElementById
('characterAmountRange')
const characterAmountNumber = document.getElementById
('characterAmountNumber')
const includeUppercaseElement = document.getElementById
('includeUppercase')
const includeNumbersElement = document.getElementById
('includeNumbers')
const includeSymbolsElement = document.getElementById
('includeSymbols')
const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay')

const UPPERCASE_CHAR_CODES = arrayFromLowtoHigh(65,90)
const LOWERCASE_CHAR_CODES = arrayFromLowtoHigh(97,122)
const NUMBERS_CHAR_CODES = arrayFromLowtoHigh(48,57)
const SYMBOL_CHAR_CODES = arrayFromLowtoHigh(33,47).concat(
    arrayFromLowtoHigh(58,64)
) .concat(
    arrayFromLowtoHigh(91,96)
) .concat(
    arrayFromLowtoHigh(123, 126)
)

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = generatePassword(characterAmount, includeUppercase, 
        includeNumbers, includeSymbols)
        passwordDisplay.innerText = password
})

function generatePassword(characterAmount, includeUppercase, 
    includeNumbers, includeSymbols) {
        console.log(LOWERCASE_CHAR_CODES)

        let charCodes = LOWERCASE_CHAR_CODES
       if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
       if (includeNumbers) charCodes = charCodes.concat(NUMBERS_CHAR_CODES)
       if (includeSymbols) charCodes = charCodes.concat(SYMBOLS_CHAR_CODES)

        const passwordCharacters = []
       for (let i = 0; i < characterAmount; i++) {
           const chraracterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(chraracterCode))
         
       }
       return passwordCharacters.join('')
    }

    function arrayFromLowtoHigh(low, high) {
        const array =[]
        for (let i = low; i <= high; i++) {
        array.push(i) 
        }
        return array
    }

function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}