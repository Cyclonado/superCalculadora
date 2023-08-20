// pegar os elementos do HTML via DOM
let soma = document.getElementById('soma');
let subtracaoAB = document.getElementById('subtracaoAB');
let subtracaoBA = document.getElementById('subtracaoBA');
let divisaoAB = document.getElementById('divisaoAB');
let divisaoBA = document.getElementById('divisaoBA');
let potenciaAB = document.getElementById('potenciaAB');
let potenciaBA = document.getElementById('potenciaBA');
let multiplicacao = document.getElementById('multiplicacao');
let raizQuadradaA = document.getElementById('raizQuadradaA');
let raizQuadradaB = document.getElementById('raizQuadradaB');
let fatorialA = document.getElementById('fatorialA');
let fatorialB = document.getElementById('fatorialB');
let porcentagemA = document.getElementById('porcentagemA');
let porcentagemB = document.getElementById('porcentagemB');
let media = document.getElementById('media');

soma.innerHTML = 0;
subtracaoAB.innerHTML = 0;
subtracaoBA.innerHTML = 0;
divisaoAB.innerHTML = 0;
divisaoBA.innerHTML = 0;
potenciaAB.innerHTML = 0;
potenciaBA.innerHTML = 0;
multiplicacao.innerHTML = 0;
raizQuadradaA.innerHTML = 0;
raizQuadradaB.innerHTML = 0;
fatorialA.innerHTML = 0;
fatorialB.innerHTML = 0;
porcentagemA.innerHTML = 0;
porcentagemB.innerHTML = 0;
media.innerHTML = 0;

// fazer as funções com os cálculos
function calcularSoma(a , b) {
    return a + b
};

function calcularSubtracaoAB(a , b) {
    return a - b
};
function calcularSubtracaoBA(a , b) {
    return b - a
};
function calcularDivisaoAB(a , b) {
    const resultado = (a/b)
    return resultado.toFixed(2);
};
function calcularDivisaoBA(a , b) {
    
    const resultado = (b/a)
    return resultado.toFixed(2);
    
};

function calcularMultiplicacao(a , b){
    return a * b
};

function calcularPotenciaAB(a , b){
    return a ** b;
}

function calcularPotenciaBA(a , b){
    return b ** a;
}

function calcularFatorialA(a){
    if (a < 0)
    return -1;
    
    else if (a == 0)
        return 1;
    
    else{
    return (a*calcularFatorialA(a - 1));
        /* 
        Se somarmos todas as chamadas em uma linha, temos
        (5{exemplo de número no lugar do 'a'} * (5 - 1) * (4 - 1) * (3 - 1) * (2 - 1)) = 5 * 4 * 3 * 2 * 1 = 120
        basicamente ele primeiro verifica ali se o num é 0 e já responde, e se o número for 1 tbm, mas nesse último ele faz
        a função de multiplicar A e fazer o decremento de 1 eu acho, slá fatorial n entra no meu cérebro fds
        */
}
}

function calcularFatorialB(b){
    if (b < 0)
    return -1;
    
    else if (b == 0)
        return 1;
    
    else{
    return (b*calcularFatorialA(b - 1));
}
}

function calcularPorcentagemA(a,b){
   return Math.round(b*100/a) + "%";
}
function calcularPorcentagemB(a,b){
    return Math.round(a*100/b) + "%";
}
function calcularMedia(a,b){
    return (a + b) / 2
}

const calcularRaizQuadradaA = (a) => Math.sqrt(a).toFixed(2);

const calcularRaizQuadradaB = (b) => Math.sqrt(b).toFixed(2);




// fazer a função calcular para exibir os resultados
const calcular = () =>{
    let inputA = document.getElementById('primeiroNumero').value;
    let inputB = document.getElementById('segundoNumero').value;

    let a = parseFloat(inputA);
    let b = parseFloat(inputB);


    soma.innerHTML = calcularSoma(a,b);
    subtracaoAB.innerHTML = calcularSubtracaoAB(a,b);
    subtracaoBA.innerHTML = calcularSubtracaoBA(a,b);
    divisaoAB.innerHTML = calcularDivisaoAB(a,b);
    divisaoBA.innerHTML = calcularDivisaoBA(a,b);
    potenciaAB.innerHTML = calcularPotenciaAB(a,b);
    potenciaBA.innerHTML = calcularPotenciaBA(a,b);
    multiplicacao.innerHTML = calcularMultiplicacao(a,b);
    raizQuadradaA.innerHTML = calcularRaizQuadradaA(a);
    raizQuadradaB.innerHTML = calcularRaizQuadradaB(b);
    fatorialA.innerHTML = calcularFatorialA(a);
    fatorialB.innerHTML = calcularFatorialB(b);
    porcentagemA.innerHTML = calcularPorcentagemA(a,b);
    porcentagemB.innerHTML = calcularPorcentagemB(a,b);
    media.innerHTML = calcularMedia(a,b);


};