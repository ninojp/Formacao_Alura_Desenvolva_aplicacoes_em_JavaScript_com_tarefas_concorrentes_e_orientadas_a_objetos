'use strict';

async function conectaAPI() {
    const conexao = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL');
    const conexaoTrad = await conexao.json();
    postMessage(conexaoTrad.USDBRL); 
};

addEventListener('message', () => {
    conectaAPI();
    setInterval(() => conectaAPI(), 10000);
});
