const form = document.querySelector ('form')
const ul = document.querySelector ('ul')
const button = document.querySelector('button')
const input = document.getElementById('item')
const input1 = document.getElementById('item1')
const input2 = document.getElementById('item2')

let itemsArry = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
let itemsArry1 = localStorage.getItem('items1') ? JSON.parse(localStorage.getItem('items1')) : []
let itemsArry2 = localStorage.getItem('items2') ? JSON.parse(localStorage.getItem('items2')) : []


const data = JSON.parse(localStorage.getItem('items'))
const data1 = JSON.parse(localStorage.getItem('items1'))
const data2 = JSON.parse(localStorage.getItem('items2'))


localStorage.setItem('items', JSON.stringify(itemsArry))
localStorage.setItem('items1', JSON.stringify(itemsArry1))
localStorage.setItem('items2', JSON.stringify(itemsArry2))


const liMaker = Text => {
    const li = document.createElement('li')
    li.textContent = Text
    ul.appendChild(li) 
}

const liMaker1 = Text => {
    const li1 = document.createElement('li')
    li1.textContent = Text1
    ul1.appendChild(li) 
}
const liMaker2 = Text => {
    const li2 = document.createElement('li')
    li1.textContent = Text2
    ul2.appendChild(li) 
}

form.addEventListener ('submit' , function (e) {
    e.preventDefault ()

    liMaker (input.value)
    input.value = ''
})

// e.preventDefault
itemsArry .push(input .value)
itemsArry1 .push(input .value)
itemsArry2 .push(input .value)

localStorage .setItem('items' , JSON.stringify(itemsArry))
localStorage .setItem('items1' , JSON.stringify(itemsArry1))
localStorage .setItem('items2' , JSON.stringify(itemsArry2))

button.addEventListener ('click' , function() {
    localStorage.clear ()
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild)
    }
})

let itemArry = localStorage .getItem ('items') ? JSON.parse(localStorage.getItem('item' )) : []
let itemArry1 = localStorage .getItem ('items1') ? JSON.parse(localStorage.getItem('item1' )) : []
let itemArry2 = localStorage .getItem ('items2') ? JSON.parse(localStorage.getItem('item2' )) : []
