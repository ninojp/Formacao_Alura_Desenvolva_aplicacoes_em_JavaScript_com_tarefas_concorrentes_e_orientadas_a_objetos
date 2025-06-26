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
let itemASerEditado;
const form = document.getElementById('form-itens');
const itensInput = document.getElementById('receber-item');
const ulItens = document.getElementById("lista-de-itens");
const ulItensComprados = document.getElementById("itens-comprados");
//=====================================================================
form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    salvarItem();
    mostrarItem();
    itensInput.focus();
});
//======================================================================
function salvarItem() {
    const valorNoInput = itensInput.value;
    const checarDuplicados = listaDeItens.some((objItem) => objItem.chaveItem.toLowerCase() === valorNoInput.toLowerCase());
    if (checarDuplicados) {
        alert('Item já existe na lista');
    } else {
        listaDeItens.push({
            chaveItem: valorNoInput,
            checar: false
        });
    };
    itensInput.value = '';
};
//======================================================================
function mostrarItem() {
    ulItens.innerHTML = '';
    ulItensComprados.innerHTML = '';
    listaDeItens.forEach((itemObj, indice) => {
        if (itemObj.checar) {
            ulItensComprados.innerHTML += `
                <li class="item-compra is-flex is-justify-content-space-between" data-value="${indice}">
                    <div>
                        <input type="checkbox" checked class="is-clickable" />  
                        <span class="itens-comprados is-size-5">${itemObj.chaveItem}</span>
                    </div>
                    <div>
                        <i class="fa-solid fa-trash is-clickable deletar"></i>
                    </div>
                </li>
            `;
        } else {
            ulItens.innerHTML += `
                <li class="item-compra is-flex is-justify-content-space-between" data-value="${indice}">
                    <div>
                        <input type="checkbox" class="is-clickable">
                        <input type="text" class="is-size-5" value="${itemObj.chaveItem}" ${indice !== Number(itemASerEditado) ? 'disabled' : ''}>
                    </div>
                    <div>
                        ${indice === Number(itemASerEditado) ? '<button onclick="salvarEdicao()"><i class="fa-regular fa-floppy-disk is-clickable"></i></button>'
                            : '<i class="fa-regular is-clickable fa-pen-to-square editar"></i>'}
                        <i class="fa-solid fa-trash is-clickable deletar"></i>
                    </div>
                </li>`;
        };
    });
    //--------------------------------------------------------------------------------------------------
    const inputsCheck = document.querySelectorAll('input[type="checkbox"]')
    inputsCheck.forEach((inputSelected) => {
        inputSelected.addEventListener('click', (evento) => {
            const valorDataValue = evento.target.parentElement.parentElement.getAttribute('data-value');
            listaDeItens[valorDataValue].checar = evento.target.checked;
            mostrarItem();
        });
    });
    //--------------------------------------------------------------------------------------------------
    const itensADeletar = document.querySelectorAll('.deletar');
        itensADeletar.forEach((objtSelected) => {
        objtSelected.addEventListener('click', (evento) => {
            const valorDataValue = evento.target.parentElement.parentElement.getAttribute('data-value');
            listaDeItens.splice(valorDataValue, 1);
            mostrarItem();
        });
    });
    //--------------------------------------------------------------------------------------------------
    const itensAEditar = document.querySelectorAll('.editar');
        itensAEditar.forEach((objtSelected) => {
        objtSelected.addEventListener('click', (evento) => {
            itemASerEditado = evento.target.parentElement.parentElement.getAttribute('data-value');
            mostrarItem();
        });
    });
};
//=======================================================================================================
function salvarEdicao() {
    const itemEditado = document.querySelector(`[data-value="${itemASerEditado}"] input[type="text"]`);
    listaDeItens[itemASerEditado].chaveItem = itemEditado.value;
    itemASerEditado = -1;
    mostrarItem();
    console.log(listaDeItens);
};
