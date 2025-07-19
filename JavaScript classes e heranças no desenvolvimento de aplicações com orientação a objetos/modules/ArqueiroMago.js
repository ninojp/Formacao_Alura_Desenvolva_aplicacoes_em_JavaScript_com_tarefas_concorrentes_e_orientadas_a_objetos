import Arqueiro from "./Arqueiro.js";
import Mago from "./Mago.js";
import Personagem from "./Personagem.js";

export default class ArqueiroMago extends Personagem {
    static tipo = 'ArqueiroMago';
    static descricao = 'O ArqueiroMago, é o detentor de lancas e flechas mágicas!';
    constructor(nome, level, destreza, elementoMagico, levelMagico, inteligencia) {
        super(nome, level);
        //Composição, ou seja, instâncias de outras classes dentro da classe ArqueiroMago.
        this.ladoArqueiro = new Arqueiro(nome, level, destreza);
        this.ladoMago = new Mago(nome, level, elementoMagico, levelMagico, inteligencia);
    };
    obterInsignia() {
        return `${this.ladoArqueiro.obterInsignia()} = ${this.ladoMago.obterInsignia()}`
    };
};
