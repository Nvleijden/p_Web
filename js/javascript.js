function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}
var fab = document.querySelector('.container');

document.addEventListener("scroll", function () {

    if (window.pageYOffset > 450) {
        console.log("I show");
        fab.classList.remove("disp");
        fab.classList.add("show");
    }

});

document.addEventListener("scroll", function () {

    if (window.pageYOffset <= 450) {
        console.log("I hide");
        fab.classList.remove("show");
        fab.classList.add("disp");
    }

});
