const table = document.querySelector('myTable')
function createTable() {
    //Write your code here
  let rows = prompt('Input number of rows')
let cols = prompt('Input number of colunms')
for(let i = 0; i<rows; i++){
    const row = document.createElement('tr')
    for(let j=0; j<cols; j++){
       let cell =  document.createElement('td')
       cell.innerText = `Row-${i} Colums-${j}`
       row.append(cell)
    }
    table.append(row)
}
}
