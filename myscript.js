const displayCurrentLine = document.getElementById('current-line');
const displayHistoryLine = document.getElementById('history-line');
const displayHistoryLineOperator = document.getElementById('history-line-operator');


buttonList = document.querySelectorAll('#keyboard button');
buttonList.forEach(element => {                             // add event listener  for all buttons
    element.addEventListener("click", (e) => {
        if (e.target.attributes.class.nodeValue == 'operational') {  // if the button is operational then:
            var arg1 = parseFloat(displayHistoryLine.innerHTML);     // get arg1 from history line on display
            var arg2 = parseFloat(displayCurrentLine.innerHTML);     // get arg2 from current line on display
            var operationType = displayHistoryLineOperator.innerHTML;   // get type of oparation from display (previously selected operation (before arg2))
            var result = doOperation(operationType, arg1, arg2);
            console.log(operationType, arg1, arg2);
            displayHistoryLine.innerHTML = result;
            displayHistoryLineOperator.innerHTML = e.target.innerHTML;
            displayCurrentLine.innerHTML = '';
        } else if (e.target.attributes.class.nodeValue == 'special') {
            if (e.target.id == 'equals') {
                var arg1 = parseFloat(displayHistoryLine.innerHTML);     // get arg1 from history line on display
                var arg2 = parseFloat(displayCurrentLine.innerHTML);     // get arg2 from current line on display
                var operationType = displayHistoryLineOperator.innerHTML;   // get type of oparation from display (previously selected operation (before arg2))
                var result = doOperation(operationType, arg1, arg2);
                displayCurrentLine.innerHTML = result;
                displayHistoryLineOperator.innerHTML = e.target.innerHTML;
                displayHistoryLine.innerHTML = '';
            } else if (e.target.id == 'clear') {
                displayCurrentLine.innerHTML = '';
                displayHistoryLineOperator.innerHTML = '';
                displayHistoryLine.innerHTML = '';
            } else if (e.target.id == 'opposite') {
                textToChange = displayCurrentLine.innerHTML;
                changeSign(textToChange);
            } else if (e.target.id == 'backspace') {
                textToChange = displayCurrentLine.innerHTML;
                deleteLastDigit(textToChange);
            }
        } else {
            addTextToCurrentLine(e.target.firstChild.data);         // if pressed button is digit then add the digit to the current display
        }

    });
});

function addTextToCurrentLine(text) {
    displayCurrentLine.innerHTML += text;
    console.log(text);
}

function doOperation(operationType, arg1 = 0, arg2 = 0) {
    if ((isNaN(arg1)) || (operationType === '')) {
        return arg2;
    } else if (isNaN(arg2)) {
        return arg1;
    } else {
        if (operationType == '+') {
            return arg1 + arg2
        } else if (operationType == '-') {
            return arg1 - arg2
        } else if (operationType == '*') {
            return arg1 * arg2
        } else if (operationType == '/') {
            var result = (arg2 === 0) ? 'we are doomed!' : (arg1 / arg2);
            return result;
        } else if (operationType == 'x^x') {
            return arg1 ** arg2
        }
    }
}

function changeSign(textToChange) {
    if (textToChange[0] === '-') {
        displayCurrentLine.innerHTML = textToChange.slice(1);
    } else {
        displayCurrentLine.innerHTML = ('-' + textToChange);
    }
}

function deleteLastDigit(textToChange) {
    if (textToChange.length > 0) {
        displayCurrentLine.innerHTML = textToChange.slice(0, -1);
    }
}

// function roundNumber(numberToRound) {    // do this later
//     numberToRound = String(numberToRound);
//     numberToRoundSplit = numberToRound.split('.');
//     console.log(numberToRoundSplit);
// }