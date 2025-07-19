'use strict';
import Arqueiro from "../modules/Arqueiro.js";
import ArqueiroMago from "../modules/ArqueiroMago.js";
import Mago from "../modules/Mago.js";
import Personagem from "../modules/Personagem.js";
import PersonagemView from "./components/personagem-view.js";

// const personagemPedrinho = new Personagem('Pedrinho', 5, 'Mago');
// console.log(personagemPedrinho);
// const personagemJose = new Personagem('José', 3, 'Arqueiro');
// console.log(personagemJose);
//-------------------------------------------------------------------

// const personagens = [personagemPedrinho, personagemJose];
// new PersonagemView(personagens).render();
// const viewPersonagens = new PersonagemView([personagemPedrinho, personagemJose]);
// console.log(viewPersonagens);
// viewPersonagens.render();
//-------------------------------------------------------------------------------------

// console.log(new Mago('gelo', 7, 9));
const magoNino = new Mago('Nino', 2, 'Fogo', 3, 4);
const magaGabi = new Mago('Gabi', 8, 'Gelo', 9, 8);
const arqueiroBruno = new Arqueiro('Bruno', 6, 5)
const arqueiroMagoChico = new ArqueiroMago('Chico', 7, 10, 'Fogo', 6, 8);
const personagens = [magoNino, magaGabi, arqueiroBruno, arqueiroMagoChico];
new PersonagemView(personagens).render();

console.log(Personagem.verificarVencedor(magoNino, magaGabi));

//============================================================================================
//Útil para inspecionar métodos estáticos, propriedades da classe e o próprio construtor.
// console.log(Personagem);
//Em JavaScript, new Personagem é equivalente a new Personagem(), 
//pois o construtor não exige argumentos obrigatórios (mas espera nome e level).
// console.log(new Personagem);
// console.log(new Personagem());

//com a declaração de static na classe Personagem, o código abaixo não funcionaria
// console.log(new Personagem().verificarVencedor(magoNino, magaGabi));


//==========================================================================================
// const personagemPedrinho = {
//     nome: 'Pedrinho',
//     vida: 7,
//     mana: 12,
//     level: 5,
//     tipo: 'Mago',
// }
// const personagemJose = {
//     nome: 'Jose',
//     vida: 7,
//     mana: 6,
//     level: 3,
//     tipo: 'Arqueiro',
// }
// const personagemAna = {
//     nome: 'Ana',
//     vida: 8,
//     mana: 10
// }
//======================================================
// class Personagem {
    //     nome
    //     vida
    //     mana
    //     level
    //     tipo
    //     descricao
    // }
//======================================================
    
// const personagemPedrinho = new Personagem();
// personagemPedrinho.nome = 'Pedrinho'
// personagemPedrinho.mana = 12
// personagemPedrinho.vida = 7
// personagemPedrinho.level = 5
// personagemPedrinho.tipo = 'Mago'
// console.log(personagemPedrinho);
// console.log('Insígnia de ' + personagemPedrinho.nome + ': ' + personagemPedrinho.obterInsignia())
//-------------------------------------------------

// const personagemJose = new Personagem()
// personagemJose.nome = 'Jose'
// personagemJose.tipo = 'Arqueiro'
// personagemJose.level = 3
// console.log('Insígnia de ' + personagemJose.nome + ': ' + personagemJose.obterInsignia())
