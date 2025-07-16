export class Personagem {
    //As propriedades declaradas fora do construtor pertencem a classe Personagem.
    // Conclusão! declarar(sem atribuir valor) aqui não é necessário, pois não será usada.
    // Se você quiser garantir compatibilidade, inicialize os campos ou defina-os apenas no construtor.
    // nome; 
    // level;
    // tipo;
    vida = 100;
    mana = 100;
    // descricao; //undefined,
    constructor(nome, level, tipo) {
        //As propriedades declarados this.dentro do construtor pertencem a INSTÂNCIA da classe Personagem.
        this.nome = nome
        this.level = level
        this.tipo = tipo
    }
    //Já os métodos declarados fora do construtor pertencem a INSTÂNCIA da classe Personagem. Pois são declarados com this.
    obterInsignia() {
        if(this.level >= 5){
            return `Implacavel ${ this.tipo }`;
        };
        return `${ this.tipo } iniciante`;
    };
};
