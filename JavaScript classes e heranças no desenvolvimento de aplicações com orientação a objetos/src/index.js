'use strict';
import { Personagem } from "../modules/Personagem.js";

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

const personagemPedrinho = new Personagem();
personagemPedrinho.nome = 'Pedrinho'
personagemPedrinho.mana = 12
personagemPedrinho.vida = 7

console.log(personagemPedrinho);
