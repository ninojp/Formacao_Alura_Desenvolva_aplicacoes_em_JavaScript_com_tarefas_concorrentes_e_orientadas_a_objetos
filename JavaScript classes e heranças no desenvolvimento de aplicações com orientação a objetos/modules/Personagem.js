export default class Personagem {
    //As propriedades declaradas fora do construtor pertencem a classe Personagem.
    //Se você quiser garantir compatibilidade, inicialize os campos ou defina-os apenas no construtor.(IA, resposta)
    // nome; 
    #level;
    // tipo;
    vida = 100;
    mana = 100;
    // descricao; //undefined,
    //Conclusão! declarar(sem atribuir valor) aqui não é necessário, pois não será usada.
    constructor(nome) {
        //As propriedades declarados this.dentro do construtor pertencem a INSTÂNCIA da classe Personagem.
        this.nome = nome;
        this.#level = 7;
    };
    //--------------------------------------------------------------------------------------------------------
    get level() {
        return this.#level;
    };
    set level(novoLevel) {
        if (novoLevel >= 1 && novoLevel <= 10) {
            this.#level = novoLevel;
        };
    };
    //--------------------------------------------------------------------------------------------------------
    aumentarLevel() {
        this.level += 1;
    };
    //--------------------------------------------------------------------------------------------------------
    diminuirLevel() {
        this.level -= 1;
    }
    //--------------------------------------------------------------------------------------------------------
    //Já os métodos declarados fora do construtor pertencem a INSTÂNCIA da classe Personagem. Pois são declarados com this.
    obterInsignia() {
        if (this.#level >= 5) {
            return `Implacavel ${this.constructor.tipo}`;
        };
        return `${this.constructor.tipo} iniciante`;
    };
    //--------------------------------------------------------------------------------------------------------
    static verificarVencedor(personagem1, personagem2) {
        // if (personagem1.level === personagem2.level) {
        //     return 'Empate!!!';
        // };
        // if (personagem1.level > personagem2.level) {
        //     return `${personagem1.constructor.tipo} ${personagem1.nome} é o vencedor!`;
        // };
        // return `${personagem2.constructor.tipo} ${personagem2.nome} é o vencedor!`;
        if (personagem1.level === personagem2.level) {
            return 'Empate!!!';
        }else if(personagem1.level > personagem2.level){
            return `${ personagem1.constructor.tipo } ${personagem1.nome} é o vencedor(a)!`;
        }else{
            return `${ personagem2.constructor.tipo } ${personagem2.nome} é o vencedor(a)!`;
        };
    };
};
