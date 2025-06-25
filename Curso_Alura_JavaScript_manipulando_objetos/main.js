'strict mode';
// let listaDeCompras = ['Arroz', 'Biscoito', 'Suco'];
// const listaDeItens = {
//     item1: 'biscoito',
//     item2: 'Suco',
//     quantidade1: 3,
//     quantidade2: 4,
//     mostrarItens: function() {
//     // alert(`Comprei ${this.quantidade1} de ${this.item1} e ${this.quantidade2} de ${this.item2}`);
//        alert(`Comprei ${listaDeItens.quantidade1} de ${listaDeItens.item1}`);
//     }
// };
//Para acessar(adicionar, editar) os itens do objeto, usamos a notação de PONTO ou COLCHETES
// console.log(listaDeItens['item1']);
// console.log(listaDeItens.item2);
// listaDeItens['novoItem'] = 'Arroz'; // Adicionando um novo item ao objeto
// console.log(listaDeItens.novoItem); // Acessando o novo item
// // listaDeItens.mostrarItens();
// delete listaDeItens.item1; // Deletando um item do objeto
// console.log(listaDeItens); // Verificando se o item foi deletado
//======================================================================================================

let listaDeItens = [];
const form = document.getElementById('form-itens');
const itensInput = document.getElementById('receber-item');
const ulItens = document.getElementById("lista-de-itens");

form.addEventListener('submit', (evento) => {
    evento.preventDefault(); // Impede o envio do formulário
    salvarItem();
    mostrarItem();
    itensInput.value = '';
});

function salvarItem() {
    const inputDosItens = itensInput.value;
    const checarDuplicados = listaDeItens.some((objItem) => objItem.chaveItem.toLowerCase() === inputDosItens.toLowerCase());
    if (checarDuplicados) {
        alert('Item já existe na lista');
    } else {
        listaDeItens.push({
            chaveItem: inputDosItens
        });
        console.log(listaDeItens);
    };
};

function mostrarItem() {
    ulItens.innerHTML = '';
    listaDeItens.forEach( (itemObj, index) => {
        ulItens.innerHTML += `
            <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
                <div>
                    <input type="checkbox" class="is-clickable" />
                    <input type="text" class="is-size-5" value="${itemObj.chaveItem}"></input>
                </div>
                <div>
                    <i class="fa-solid fa-trash is-clickable deletar"></i>
                </div>
            </li>`
    });
};
