window.onload = function(){
    document.querySelector(".menuMobile").addEventListener("click", function(){
        if (document.querySelector(".menu nav ul").style.display == 'flex'){
            document.querySelector(".menu nav ul").style.display = 'none';
        } else {
            document.querySelector(".menu nav ul").style.display = 'flex';
        }
    });
}


$("a.scroll").on('click', function (event) {
    if (this.hash !== "") {
        event.preventDefault();
        let hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 5000, function () {
            window.location.hash = hash;
        });
    }
});

window.onscroll = function(){
    scroll();
}

function scroll(){
    var btn = document.getElementById("btnTop");
    if(document.documentElement.scrollTop > 250) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

const ano = document.getElementById("ano");
const anoAtual = new Date();
ano.innerHTML = anoAtual.getFullYear();