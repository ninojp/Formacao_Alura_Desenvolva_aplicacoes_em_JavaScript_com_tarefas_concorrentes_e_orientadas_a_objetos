import Personagem from "./Personagem.js";

export default class Guerreiro extends Personagem{
    static tipo = 'Guerreiro';
    static descricao = 'Você será esmagado pela fúria do Guerreiro!';
    constructor(nome, forca){
        super(nome)
        this.forca = forca;
    };
    obterInsignia(){
        if (this.level >= 7 && this.forca >= 5) {
            return 'Guerreiro furioso';
        } else {
            return super.obterInsignia();
        };
    };
};
