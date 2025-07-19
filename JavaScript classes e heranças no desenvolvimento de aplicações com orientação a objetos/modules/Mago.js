import Personagem from "./Personagem.js";

export default class Mago extends Personagem {
    static tipo = 'Mago';
    static descricao = 'O Mago, é implacável!';
    constructor(nome, level, elementoMagico, levelMagico, inteligencia){
        super(nome, level);
        this.elementoMagico = elementoMagico;
        this.levelMagico = levelMagico;
        this.inteligencia = inteligencia;
    };
    //Polimorfismo, ou seja, sobrescrita do método da classe pai Personagem.
    obterInsignia(){
        if(this.levelMagico >= 5 && this.inteligencia >= 5){
            return `Mestre(a) do ${this.elementoMagico}`
        };
        //Se não atender as condições acima, chama o método(original) da classe pai Personagem.
        return super.obterInsignia();
    };
};
