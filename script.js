const table = document.querySelector('#myTable');

function createTable() {
    let rows = parseInt(prompt('Input number of rows'));
    let cols = parseInt(prompt('Input number of columns'));
    for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            let cell = document.createElement('td');
            cell.innerText = `Row-${i} Column-${j}`;
            row.append(cell);
        }
        table.append(row);
    }
}

createTable()
