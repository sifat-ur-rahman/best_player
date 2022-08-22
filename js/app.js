
const cartArray = []

function displayName(playerName) {
    const oderList = document.getElementById('name-list')
    oderList.innerHTML = ''
    for (let i = 0; i < playerName.length; i++) {
        // console.log(cartArray[i])
        const name = cartArray[i]
        const tr = document.createElement('tr')
        tr.innerHTML = `
        <th>${i + 1}.</th>
        <td> ${name}</td<
        `
        oderList.appendChild(tr)
    }
}
function addToCart(element) {
    const playerName = element.parentNode.children[0].innerText
    cartArray.push(playerName)
    // console.log(cartArray.length)
    document.getElementById('player-selected').innerText = cartArray.length
    displayName(cartArray)
}
function textToNumber(elementId) {
    const textFild = document.getElementById(elementId)
    const textString = textFild.innerText
    const textNumber = parseFloat(textString)
    return textNumber
}
function input(inputElement) {
    const inputElemint = document.getElementById(inputElement);
    const inputString = inputElemint.value;
    const inputNumber = parseFloat(inputString)
    return inputNumber
}
function setTextElementById(elementId, newElement) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newElement

}
document.getElementById('Calculate').addEventListener('click', function () {

    const nambersOfPalyer = textToNumber('player-selected')
    const perPlayerAmount = input('per-player')
    const playerExpenses = nambersOfPalyer * perPlayerAmount

    setTextElementById('player-expenses', playerExpenses)
})
document.getElementById('calculate-total').addEventListener('click', function () {
    const playerExpenses = textToNumber('player-expenses')
    const managerAmount = input('manager')
    const coachAmount = input('coach')

    const total = playerExpenses + managerAmount + coachAmount
    setTextElementById('total', total)
})