const hamburguer = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
})


const textp = document.querySelectorAll(`.titulo-noticia p`);
const limitp = 14;
 console.log(textp)
for(let p of textp){
    const abovelimitp = p.innerText.length > limitp;
    const dotsOrEmptyp = abovelimitp ? '...' : '';
    p.innerText = p.innerText.substring(0, limitp)+ dotsOrEmptyp;
}

document.getElementById('btn').onclick = function(){

    let vn =+ document.getElementById('ValorInivial').value;
    var jr =+ document.getElementById('juros').value;
    let ms =+ document.getElementById('meses').value;
    let vf = 0;


    let porcentagem = jr/100;

    for(var cont = 1; cont <= ms; cont++){
        vn = vn + vn*porcentagem;
    }

    document.getElementById('resultado').value = vn.toFixed(2);
}


