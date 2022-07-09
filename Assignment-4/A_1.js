const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

let row=document.createElement('tr');
for(let i=1;i<=5;i++){
    let col=document.createElement('th');
    col.appendChild(document.createTextNode(`col ${i}`));
    row.appendChild(col);
}
thead.appendChild(row);

for(let i=1;i<=5;i++){
    let row=document.createElement('tr');
    for(let j=1;j<=5;j++){
        
        let col=document.createElement('td');
        col.appendChild(document.createTextNode(` (${i} , ${j})`));
        row.appendChild(col);
        
    }
    tbody.appendChild(row);
}

table.appendChild(thead);
table.appendChild(tbody);
document.querySelector('body').appendChild(table);

//styling
for(let i=0;i<5;i++){
    table.tHead.rows[0].cells[i].style.fontWeight='bold';
    table.tHead.rows[0].cells[i].style.borderStyle='ridge';
    table.tHead.rows[0].cells[i].style.padding='10px 20px 10px';
    table.tHead.rows[0].style.backgroundColor= 'indigo';
    table.tHead.rows[0].style.color= 'white';
    table.tHead.rows[0].style.fontFamily='Georgia';
    table.tBodies[0].rows[i].style.fontFamily='Georgia';
    table.tBodies[0].rows[i].style.color='yellow';
    for(let j=0;j<5;j++){
        table.tBodies[0].rows[i].cells[j].style.padding='20px';;
    }
}
table.tBodies[0].rows[0].style.backgroundColor= 'magenta';
table.tBodies[0].rows[1].style.backgroundColor= 'black';
table.tBodies[0].rows[2].style.backgroundColor= 'red';
table.tBodies[0].rows[3].style.backgroundColor= 'purple';
table.tBodies[0].rows[4].style.backgroundColor= 'green';

let header=document.querySelector("h3");
header.innerText="Even cells elements are listed above ↑";
for(let i=0;i<5;i++){
    for(let j=0;j<5;j++){
        if(j%2==0){
            let even = document.querySelector('#even_elements').innerText;
            even = even + '\n' + table.tBodies[0].rows[i].cells[j].innerText;
            document.querySelector('#even_elements').innerText=even;
        }
    }
}