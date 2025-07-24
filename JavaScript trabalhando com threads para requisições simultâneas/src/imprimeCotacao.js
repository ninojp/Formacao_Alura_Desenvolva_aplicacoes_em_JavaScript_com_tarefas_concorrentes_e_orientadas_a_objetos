'use strict';

const listas = document.querySelectorAll('[data-lista]');

export default function selecionaCotacao(nome, valor) {
    listas.forEach((listaEscolhida) => {
        if(listaEscolhida.id == nome) {
            imprimeCotacao(listaEscolhida, nome, valor);
        };
    });
};

function imprimeCotacao(listas, nome, valor) {
    listas.innerHTML = '';
    const plurais = {
        'dolar': 'dolares',
        'iene': 'ienes'
    };
    for(let multiplicador = 1 ; multiplicador <= 1000 ; multiplicador *= 10) {
        const listaItem = document.createElement('li');
        listaItem.innerHTML = `${multiplicador} ${multiplicador == 1 ? nome : plurais[nome]}: R$${(valor * multiplicador).toFixed(2)}`
        listas.appendChild(listaItem);
    };
};
