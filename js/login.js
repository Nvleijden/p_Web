var warn = document.querySelector('.warningText');
var inp1 = document.querySelector('.input1');
var inp2 = document.querySelector('.input2');
var btn = document.querySelector('.warningButton');

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

document.querySelector(".warningButton").onclick = function () {
    console.log("hello im clicked");
    warn.classList.add("warning");
    warn.classList.remove("warningText");
    inp1.classList.add("warnBorder");
    inp2.classList.add("warnBorder");
    btn.classList.add("warningshake");
    sleep(500);
    return false;
};
