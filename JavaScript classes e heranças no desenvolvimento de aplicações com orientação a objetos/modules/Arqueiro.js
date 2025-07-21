import Personagem from "./Personagem.js"

export default class Arqueiro extends Personagem{
    static tipo = 'Arqueiro';
    static descricao = 'O Arqueiro, Tem o seu arco!';
    constructor(nome, destreza) {
        super(nome);
        this.destreza = destreza;
    };
    obterInsignia() {
        if (this.destreza >= 5) {
            return `Dominador de flechas`
        };
        return super.obterInsignia();
    };
};
