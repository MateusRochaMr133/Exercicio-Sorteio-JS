let input = document.querySelector(".input-name");

let forma = document.querySelector("#formulario");

let but1 = document.querySelector(".add1");

let but2 = document.querySelector(".add2");

let but3 = document.querySelector(".add3");

let results = document.querySelector(".resultado")

let nomes = [];

let nomestodos = document.querySelector(".h2-nomes");

let valores;





function Verificacao() {
    nomes.forEach((items) => {
        if (items == input.value) {
            alert('Error')
        } else {
            alert('Voce foi Cadastrado')
            nomestodos.innerHTML = nomestodos.innerHTML + ", " + input.value;
            nomes.push(`${input.value}`);
            console.log(nomes)
        }

    });

}



but1.addEventListener('click', (e) => {

    e.preventDefault();

    Verificacao();
    console.log(Verificacao())
});


but3.addEventListener('click', (e) => {
    e.preventDefault();
    Remover();
});


forma.addEventListener("submit", (e) => {
    e.preventDefault();
});



function Atualizar() {

};

function Remover() {
    nomestodos.innerHTML = '';
};


but3.addEventListener



function sorteio() {

};

