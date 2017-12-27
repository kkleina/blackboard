var board = document.getElementById('board'),
    boardContent = document.createElement('div'),
    alertEl = document.createElement('div'),
    heading = document.createElement('h1'),
    heading2 = document.createElement('h2');
var tableEl, operationEl, btnCheck, operation, startTestButton, mTableButton;
var maxMultiplier = 10,
    points = 0,
    fail = 0;

heading.textContent = 'Nauka mnożenia';
board.appendChild(heading);
board.appendChild(heading2);
board.appendChild(boardContent);


function info(resultText){
  board.insertBefore(alertEl, boardContent);
  if (resultText == 'good'){
    alertEl.className = 'alert alert-success';
    alertEl.textContent = 'dobrze - wczytano kolejne działanie - masz już ' + points + ' ' + pointsText();
  }else if (resultText == 'wrong'){
    alertEl.className = 'alert alert-danger';
    alertEl.textContent = 'błąd - spróbuj ponownie';
  }else{
    alertEl.className = 'alert alert-primary';
    alertEl.textContent = 'zakończyłeś test - 20 poprawnych odpowiedzi / ' + fail + ' ' + failText();
  }
}

function testButton(){
  startTestButton = document.createElement('button');
  boardContent.appendChild(startTestButton);
  startTestButton.className = 'btn btn-primary m-3';
  startTestButton.textContent = 'Rozpocznij test';

  startTestButton.addEventListener('click', mTest, false);
}

function tableButton(){
  mTableButton = document.createElement('button');
  boardContent.appendChild(mTableButton);
  mTableButton.className = 'btn btn-primary m-3';
  mTableButton.textContent = 'Wróć do tabliczki mnożenia';

  mTableButton.addEventListener('click', mTable, false);
}

function mTable(){
  alertEl.removeAttribute('class');
  alertEl.textContent = '';
  boardContent.innerHTML = '';
  var result, trEl, tdEl, tdText;
  var instructions = document.createElement('p');
  instructions.textContent = 'Zapoznaj się z tabliczką mnożenia, a następnie sprawdź się w teście. 20 poprawnych odpowiedzi kończy test.';
  heading2.textContent = 'Tabliczka mnożenia';

  testButton();
  boardContent.insertBefore(instructions, startTestButton);

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
  boardContent.appendChild(tableEl);
}
mTable();

function randomNumber(){
  var randomNum = Math.floor((Math.random() * maxMultiplier) + 1);
  return randomNum;
}

function randomOperation(){
  var num1 = randomNumber(),
      num2 = randomNumber(),
      operationResult = num1 * num2,
      operationText = num1 + ' x ' + num2 + ' = ';
  return {
    text: operationText,
    result: operationResult
  }
}

function mTest(){
  boardContent.innerHTML = '';
  operation = randomOperation();
  operationEl = document.createElement('p');
  var operationText = operation.text;
  operationEl.className = 'lead';
  operationEl.innerHTML = operationText + '<input type="number" class="form-control d-inline-block w-50 m-2" placeholder="Podaj wynik" aria-label="Podaj wynik"><button id="btn-check" class="btn btn-light" type="button">Sprawdź!</button>';

  heading2.textContent = 'Test';
  boardContent.appendChild(operationEl);

  btnCheck = document.getElementById('btn-check');
  btnCheck.addEventListener('click', checkResult, false);
}

function checkResult(){
  var input = operationEl.getElementsByTagName('input')[0],
      numberEntered = input.value,
      operationResult = operation.result;

  if (numberEntered == operationResult){
    points++;
    info('good');
    boardContent.removeChild(operationEl);
    mTest();
  }else{
    fail++;
    info('wrong');
  }

  if (points == 20){
    end();
  }
}

function end(){
  boardContent.removeChild(operationEl);
  info('end');
  points = 0;
  fail = 0;
  tableButton();
}

function pointsText(){
  var pText;
  if (points == 1){
    pText = 'punkt';
  }else if (points >=2 && points <=4){
    pText = 'punkty';
  }else{
    pText = 'punktów';
  }
  return pText;
}

function failText(){
  var fText;
  if (fail == 1){
    fText = 'błąd';
  }else if (fail >=2 && fail <=4){
    fText = 'błędy';
  }else{
    fText = 'błędów';
  }
  return fText;
}

