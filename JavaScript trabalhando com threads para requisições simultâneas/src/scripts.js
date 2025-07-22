'use strict';

const graficoDolar = document.getElementById('graficoDolar');

const graficoParaDolar = new Chart(graficoDolar, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    }
});
//========================================================================================

async function conectaAPI() {
    const conecta = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL");
    const conectaTraduzido = await conecta.json();
    console.log(conectaTraduzido);
}
// conectaAPI();
setInterval(() => conectaAPI(), 5000)
//===============================================================================================================

function gerarHorario() {
    let dataHoraAtual = new Date();
    let horario = dataHoraAtual.getHours() + ":" + dataHoraAtual.getMinutes() + ":" + dataHoraAtual.getSeconds();
    let horaAtual = `${dataHoraAtual.getHours()}h:${dataHoraAtual.getMinutes()}m:${dataHoraAtual.getSeconds()}s`;
    let dataAtual = `${dataHoraAtual.getDay()}/${dataHoraAtual.getMonth()}/${dataHoraAtual.getFullYear()}`;
    console.log(horario);
    console.log(horaAtual);
    console.log(dataAtual);
    
};
gerarHorario();
