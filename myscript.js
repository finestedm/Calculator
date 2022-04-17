const displayCurrentLine = document.getElementById('current-line');
const displayHistoryLine = document.getElementById('history-line');
const displayHistoryLineOperator = document.getElementById('history-line-operator');


buttonList = document.querySelectorAll('#keyboard button');
buttonList.forEach(element => {
    element.addEventListener("click", (e) => {
        if (e.target.attributes.class.nodeValue == 'operational') {
            var arg1 = parseFloat(displayHistoryLine.innerHTML);
            var arg2 = parseFloat(displayCurrentLine.innerHTML);
            var operationType = e.target.innerHTML;
            var result = doOperation(operationType, arg1, arg2);
            console.log(operationType, arg1, arg2);
            displayHistoryLine.innerHTML = result;
            displayHistoryLineOperator.innerHTML = e.target.innerHTML;
            displayCurrentLine.innerHTML = '';
        } else {
            addTextToCurrentLine(e.target.firstChild.data);
        }
    });
});

function addTextToCurrentLine(text) {
    displayCurrentLine.innerHTML += text;
    console.log(text);
}



function doOperation(operationType, arg1 = 0, arg2) {
    if (arg1 == 0) {
        return arg2;
    } else if (arg2 == '') {
        console.log('tesdee')

        return arg1;
    } else {
        console.log('tesd')

        if (operationType == '+') {
            return arg1 + arg2
        } else if (operationType == '-') {
            return arg1 - arg2
        } else if (operationType == '*') {
            return arg1 * arg2
        } else if (operationType == '/') {
            return arg1 / arg2
        }
    }

}

function moveToHistoryLine(argument, operator) {
    console.log(operator.innerHTML)
    displayHistoryLine.innerHTML = argument + operator;
    displayCurrentLine.innerHTML = ''
}

// displayHistoryLine.innerHTML = doOperation(e.target.id, displayHistoryLine.innerHTML, displayCurrentLine.innerHTML) :
