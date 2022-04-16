const displayCurrentLine = document.getElementById('current-line');

buttonList = document.querySelectorAll('.num');
buttonList.forEach(element => {
    element.addEventListener("click", (e) => {
        addTextToCurrentLine(e.target.firstChild.data);
    });
});

function addTextToCurrentLine(text) {
    displayCurrentLine.innerHTML = text;
    console.log(text);
}
