//document.getElementById("count_element").innerText=5

let saveEl = document.getElementById('save-el')
let countEl = document.getElementById('count_element')

console.log(countEl)

let count = 0

let increment = () => {
    count += 1 
    countEl.innerText = count
}

function save() {
    let countStr = count + ' - '
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}


