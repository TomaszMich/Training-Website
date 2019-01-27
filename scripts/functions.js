$(document).ready(function () {
    var NavY = $('.nav').offset().top;

    var stickyNav = function () {
        var ScrollY = $(window).scrollTop();

        if (ScrollY > NavY) {
            $('.nav').addClass('sticky');
        } else {
            $('.nav').removeClass('sticky');
        }
    };

    stickyNav();

    $(window).scroll(function () {
        stickyNav();
    });
});

$(function () {
    $('aside span.expand').click(function () {
        $('aside .nav').toggle(300);
    })
}
);

function store() {
    if (typeof (Storage) != undefined) {
        var inputImie = document.getElementById("imie");
        localStorage.setItem("imie", inputImie.value);

        var inputNazwisko = document.getElementById("nazwisko");
        localStorage.setItem("nazwisko", inputNazwisko.value);

        var inputEmail = document.getElementById("email");
        localStorage.setItem("email", inputEmail.value);

        var inputNumer = document.getElementById("numer");
        localStorage.setItem("numer", inputNumer.value);

        var inputText = document.getElementById("text");
        sessionStorage.setItem("text", inputText.value);
    }
}

function load() {
    if (typeof (Storage) != undefined) {
        document.getElementById("imie").value = localStorage.getItem("imie");
        document.getElementById("nazwisko").value = localStorage.getItem("nazwisko");
        document.getElementById("email").value = localStorage.getItem("email");
        document.getElementById("numer").value = localStorage.getItem("numer");
        document.getElementById("text").value = sessionStorage.getItem("text");
    }
}

function send() {
    document.getElementById("form").style.display = 'none';
    document.getElementById("send").style.display = 'block';
    document.getElementById("thanks").style.display = 'block';
}

function another() {
    document.getElementById("form").style.display = 'block';
    document.getElementById("send").style.display = 'none';
}

$(function () {
    $("input[type=radio]").checkboxradio();
});

$(function () {
    $(document).tooltip();
});

function add() {
    var p = document.createElement('p');
    var text = document.createTextNode("Formularz zostal wyczyszczony!");
    p.appendChild(text);

    var before = document.getElementById("fieldset");
    before.appendChild(p);
}