import Arqueiro from "./Arqueiro.js";
import Mago from "./Mago.js";
import Personagem from "./Personagem.js";

export default class ArqueiroMago extends Personagem {
    static tipo = 'ArqueiroMago';
    static descricao = 'O ArqueiroMago, é o detentor de lancas e flechas mágicas!';
    constructor(nome, destreza, elementoMagico, levelMagico, inteligencia) {
        super(nome);
        //Composição, ou seja, instâncias de outras classes dentro da classe ArqueiroMago.
        this.ladoArqueiro = new Arqueiro(nome, destreza);
        this.ladoMago = new Mago(nome, elementoMagico, levelMagico, inteligencia);
    };
    obterInsignia() {
        return `${this.ladoArqueiro.obterInsignia()} = ${this.ladoMago.obterInsignia()}`
    };
};
