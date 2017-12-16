var board = document.getElementById('board');
var maxMultiplier = 10;
var resultsTable = '';
var headingText = document.createTextNode('Nauka mnożenia');
var heading2Text = document.createTextNode('Tabliczka mnożenia');
var heading = document.createElement('h1');
var heading2 = document.createElement('h2');
heading.appendChild(headingText);
heading2.appendChild(heading2Text);
board.appendChild(heading);
board.appendChild(heading2);

function mTable(){
  var result, tableEl, trEl, tdEl, tdText;

  tableEl = document.createElement('table');
  tableEl.className = 'm-auto';

  for (var i = 1; i <= maxMultiplier; i++ ){
    trEl = document.createElement('tr');

    for (var j = 1; j <= maxMultiplier; j++ ){
      result = i * j;
      tdEl = document.createElement('td');
      tdText = document.createTextNode(result);

      tdEl.appendChild(tdText);
      trEl.appendChild(tdEl);
    }
    tableEl.appendChild(trEl);
  }
  board.appendChild(tableEl);
}

mTable();
