'use strict';

addEventListener('message', () => {
    conectaAPI();
    setInterval(() => conectaAPI(), 95000);
});

async function conectaAPI() {
    const conexao = await fetch('https://economia.awesomeapi.com.br/last/JPY-BRL');
    const conexaoTrad = await conexao.json();
    postMessage(conexaoTrad.JPYBRL);
}
