//DOM
const select = document.querySelector("main select");
const input = document.querySelectorAll("main input");
const btn = document.querySelectorAll("main button");
const tr = document.querySelectorAll("main tr");
const result = document.querySelector("main h1");
const resultImc = document.querySelector("main h2");

//Dados
let idade = input[0].value;
let altura = input[1].value;
let peso = input[2].value;
let imc = peso/(altura*altura)

//Calcular IMC
btn[0].addEventListener("click", calcImc)
function calcImc() {
    let idade = input[0].value;
    let altura = input[1].value;
    let peso = input[2].value;
    let imc = peso/(altura*altura)
    if(altura === "" || peso === "" || idade === "" ) {
        alert("Preencha os campos");
        input[0].value = "";
        input[1].value = "";
        input[2].value = "";
    }
    else if(altura >3 || peso>400 || idade>200) {
        alert("Dados invalidos, insira corretamente os dados.");
        input[0].value = "";
        input[1].value = "";
        input[2].value = "";
    }
    else if(imc < 17.5) {
        result.innerHTML = `Seu IMC é ${imc}`
        tr[1].style.background = "green"
    }
    else if(imc>=17.5 & imc<=25) {
        result.innerHTML = `Seu IMC é ${imc}`
        tr[2].style.background = "green"
    }
    else if(imc>=25 & imc<=28.6) {
        result.innerHTML = `Seu IMC é ${imc}`
        tr[3].style.background = "green"
    }
    else {
        result.innerHTML = `Seu IMC é ${imc}`
        tr[4].style.background = "green"
    }
}

//Tentar novamente 
btn[0].addEventListener("click", btnTentarNovamente);
btn[1].addEventListener("click", tentarNovamente)
function btnTentarNovamente() {
    if (btn[1].classList.contains("d-none")) {
        btn[1].classList.remove("d-none");
        btn[1].classList.add("d-block");
    }
    else {
        btn[1].classList.remove("d-block");
        btn[1].classList.add("d-none");
    }
}

function tentarNovamente() {
    window.location.reload();
}