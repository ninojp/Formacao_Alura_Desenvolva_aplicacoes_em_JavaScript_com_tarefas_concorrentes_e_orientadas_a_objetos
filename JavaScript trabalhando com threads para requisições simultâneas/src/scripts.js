'use strict';
import selecionaCotacao from "./imprimeCotacao.js";

const graficoDolar = document.getElementById('graficoDolar');
const graficoParaDolar = new Chart(graficoDolar, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Dólar',
            data: [],
            borderWidth: 1
        }]
    }
});
//========================================================================================
// async function conectaAPI() {
//     const conecta = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL");
//     const conectaTraduzido = await conecta.json();
//     let tempo = gerarHorario();
//     let valor = conectaTraduzido.USDBRL.ask;
//     adicionarDados(graficoParaDolar, tempo, valor);
//     imprimeCotacao('dolar', valor)
// };
// setInterval(() => conectaAPI(), 15000)
//===============================================================================================================

function gerarHorario() {
    let data = new Date();
    let horario = data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();
    console.log(horario);
    return horario;
    // let dataHoraAtual = new Date();
    // let horario = dataHoraAtual.getHours() + ":" + dataHoraAtual.getMinutes() + ":" + dataHoraAtual.getSeconds();
    // let horaAtual = `${dataHoraAtual.getHours()}h:${dataHoraAtual.getMinutes()}m:${dataHoraAtual.getSeconds()}s`;
    // let dataAtual = `${dataHoraAtual.getDay()}/${dataHoraAtual.getMonth()}/${dataHoraAtual.getFullYear()}`;
    // console.log(horaAtual);
    // console.log(dataAtual);
};
// gerarHorario();
//===============================================================================================================

function adicionarDados(grafico, legenda, dados) {
    grafico.data.labels.push(legenda);
    grafico.data.datasets.forEach((dataset) => {
        dataset.data.push(dados);
    });
    grafico.update();
};
//===============================================================================================================

// MULTITHREADING - Paralelismo em JavaScript
//Assunto novo, sobre como executar duas ou mais tarefas ao mesmo tempo, sem travar o navegador
let workerDolar = new Worker('./src/workers/workerDolar.js');
workerDolar.postMessage('usd');
// console.log(workerDolar);
workerDolar.addEventListener('message', event => {
    let tempo = gerarHorario();
    let valor = event.data.ask;
    selecionaCotacao('dolar', valor);
    adicionarDados(graficoParaDolar, tempo, valor);
});
//========================================================================================

const graficoIene = document.getElementById('graficoIene');
const graficoParaIene = new Chart(graficoIene, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Iene',
            data: [],
            borderWidth: 1
        }]
    }
});
//===============================================================================================================

let workerIene = new Worker('./src/workers/workerIene.js');
workerIene.postMessage('iene');
workerIene.addEventListener('message', evento => {
    let tempo = gerarHorario();
    let valor = evento.data.ask;
    adicionarDados(graficoParaIene, tempo, valor);
    selecionaCotacao('iene', valor);
});
