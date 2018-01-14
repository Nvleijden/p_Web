var pop = document.querySelector('.popupTekst');
var fab = document.querySelector('.container');
var like1 = document.querySelector('.like1');
var like2 = document.querySelector('.like2');
var like3 = document.querySelector('.like3');
var like4 = document.querySelector('.like4');
var like5 = document.querySelector('.like5');
var like6 = document.querySelector('.like6');
var like7 = document.querySelector('.like7');
var like8 = document.querySelector('.like8');

fab.classList.add("disp");

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

document.querySelector(".like1").onclick = function () {
    console.log("I toggle like");
    like1.classList.toggle("likeButton");
    like1.classList.toggle("likedButton");
    if (like1.classList.contains("likedButton")) {


        pop.classList.toggle("disp");
        pop.classList.add("show");
        pop.innerHTML = "Gefrustreerd is toegevoegd aan je favorieten!";
        setTimeout(function () {
            pop.classList.toggle("disp")
        }, 3000);
    } else if (like1.classList.contains("likeButton")) {
        pop.classList.toggle("disp");
        pop.classList.add("show");
        pop.innerHTML = "Gefrustreerd is verwijderd uit je favorieten!";
        setTimeout(function () {
            pop.classList.toggle("disp")
        }, 3000);
    }
};

document.querySelector(".like2").onclick = function () {
    console.log("I toggle like");
    like2.classList.toggle("likeButton");
    like2.classList.toggle("likedButton");
    if (like2.classList.contains("likedButton")) {


        pop.classList.toggle("disp");
        pop.classList.add("show");
        pop.innerHTML = "Zombie is toegevoegd aan je favorieten!";
        setTimeout(function () {
            pop.classList.toggle("disp")
        }, 3000);
    } else if (like2.classList.contains("likeButton")) {
        pop.classList.toggle("disp");
        pop.classList.add("show");
        pop.innerHTML = "Zombie is verwijderd uit je favorieten!";
        setTimeout(function () {
            pop.classList.toggle("disp")
        }, 3000);
    }
};

document.querySelector(".like3").onclick = function () {
    console.log("I toggle like");
    like3.classList.toggle("likeButton");
    like3.classList.toggle("likedButton");
    if (like3.classList.contains("likedButton")) {


        pop.classList.toggle("disp");
        pop.classList.add("show");
        pop.innerHTML = "Western is toegevoegd aan je favorieten!";
        setTimeout(function () {
            pop.classList.toggle("disp")
        }, 3000);
    } else if (like3.classList.contains("likeButton")) {
        pop.classList.toggle("disp");
        pop.classList.add("show");
        pop.innerHTML = "Western is verwijderd uit je favorieten!";
        setTimeout(function () {
            pop.classList.toggle("disp")
        }, 3000);
    }
};

document.querySelector(".like4").onclick = function () {
    console.log("I toggle like");
    like4.classList.toggle("likeButton");
    like4.classList.toggle("likedButton");
    if (like4.classList.contains("likedButton")) {


        pop.classList.toggle("disp");
        pop.classList.add("show");
        pop.innerHTML = "Beroemd is toegevoegd aan je favorieten!";
        setTimeout(function () {
            pop.classList.toggle("disp")
        }, 3000);
    } else if (like4.classList.contains("likeButton")) {
        pop.classList.toggle("disp");
        pop.classList.add("show");
        pop.innerHTML = "Beroemd is verwijderd uit je favorieten!";
        setTimeout(function () {
            pop.classList.toggle("disp")
        }, 3000);
    }
};

document.querySelector(".like5").onclick = function () {
    console.log("I toggle like");
    like5.classList.toggle("likeButton");
    like5.classList.toggle("likedButton");
    if (like5.classList.contains("likedButton")) {


        pop.classList.toggle("disp");
        pop.classList.add("show");
        pop.innerHTML = "Sponsor  is toegevoegd aan je favorieten!";
        setTimeout(function () {
            pop.classList.toggle("disp")
        }, 3000);
    } else if (like5.classList.contains("likeButton")) {
        pop.classList.toggle("disp");
        pop.classList.add("show");
        pop.innerHTML = "Sponsor  is verwijderd uit je favorieten!";
        setTimeout(function () {
            pop.classList.toggle("disp")
        }, 3000);
    }
};

document.querySelector(".like6").onclick = function () {
    console.log("I toggle like");
    like6.classList.toggle("likeButton");
    like6.classList.toggle("likedButton");
    if (like6.classList.contains("likedButton")) {


        pop.classList.toggle("disp");
        pop.classList.add("show");
        pop.innerHTML = "Bejaard is toegevoegd aan je favorieten!";
        setTimeout(function () {
            pop.classList.toggle("disp")
        }, 3000);
    } else if (like6.classList.contains("likeButton")) {
        pop.classList.toggle("disp");
        pop.classList.add("show");
        pop.innerHTML = "Bejaard is verwijderd uit je favorieten!";
        setTimeout(function () {
            pop.classList.toggle("disp")
        }, 3000);
    }

};

document.querySelector(".like7").onclick = function () {
    console.log("I toggle like");
    like7.classList.toggle("likeButton");
    like7.classList.toggle("likedButton");
    if (like7.classList.contains("likedButton")) {


        pop.classList.toggle("disp");
        pop.classList.add("show");
        pop.innerHTML = "Moe is toegevoegd aan je favorieten!";
        setTimeout(function () {
            pop.classList.toggle("disp")
        }, 3000);
    } else if (like7.classList.contains("likeButton")) {
        pop.classList.toggle("disp");
        pop.classList.add("show");
        pop.innerHTML = "Moe is verwijderd uit je favorieten!";
        setTimeout(function () {
            pop.classList.toggle("disp")
        }, 3000);
    }
};

document.querySelector(".like8").onclick = function () {
    console.log("I toggle like");
    like8.classList.toggle("likeButton");
    like8.classList.toggle("likedButton");
    if (like1.classList.contains("likedButton")) {


        pop.classList.toggle("disp");
        pop.classList.add("show");
        pop.innerHTML = "Blind is toegevoegd aan je favorieten!";
        setTimeout(function () {
            pop.classList.toggle("disp")
        }, 3000);
    } else if (like8.classList.contains("likeButton")) {
        pop.classList.toggle("disp");
        pop.classList.add("show");
        pop.innerHTML = "Blind is verwijderd uit je favorieten!";
        setTimeout(function () {
            pop.classList.toggle("disp")
        }, 3000);
    }
};

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
    pop.classList.toggle("disp");
}
