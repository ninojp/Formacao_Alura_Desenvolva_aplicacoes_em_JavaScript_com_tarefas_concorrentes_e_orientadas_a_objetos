'use strict';
import imprimeCotacao from "./imprimeCotacao.js";

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

async function conectaAPI() {
    const conecta = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL");
    const conectaTraduzido = await conecta.json();
    // console.log(conectaTraduzido);
    let tempo = gerarHorario();
    let valor = conectaTraduzido.USDBRL.ask;
    adicionarDados(graficoParaDolar, tempo, valor);
    imprimeCotacao('dolar', valor)
}
// conectaAPI();
setInterval(() => conectaAPI(), 15000)
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
gerarHorario();

function adicionarDados(grafico, legenda, dados) {
    grafico.data.labels.push(legenda);
    grafico.data.datasets.forEach((dataset) => {
        dataset.data.push(dados);
    });
    grafico.update();
};
