const visor = document.getElementById('visor');

function adicionarCaractere(caractere) {
    if (visor.innerText === '0') {
        visor.innerText = caractere;
    } else {
        visor.innerText += caractere;
    }
}

function limparVisor() {
    visor.innerText = '0';
}

function calcular() {
    try {
        visor.innerText = eval(visor.innerText);
    } catch (erro) {
        visor.innerText = 'Erro';
    }
}
