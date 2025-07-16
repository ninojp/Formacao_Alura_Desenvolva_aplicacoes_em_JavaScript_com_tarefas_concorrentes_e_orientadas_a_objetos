# Curso Alura JavaScript classes e heranças no desenvolvimento de aplicações com orientação a objetos

## Aula 01 - Hello POO!

### Aula 01 - Apresentação - Vídeo 1

Transcrição  
Ana Beatriz (Bia): Olá, eu sou a Ana Beatriz, mas podem me chamar de Bia. Sou instrutora de Front-end aqui na Alura.

Autodescrição da Bia: Mulher de pele morena. Tem cabelos longos e cacheados na cor castanho escuro com pontas mais claras. Tem o rosto redondo, sobrancelhas bem desenhadas, olhos castanhos, nariz médio e lábios grossos. Está usando óculos de lentes transparentes com a armação oval preta e fina. Está usando uma camiseta laranja. No fundo há uma parede lisa, sem decoração e com uma iluminação de cor azul.

Nayanne Batista (Nay): Olá! Eu sou a Nay!

Autodescrição da Nay: Mulher de pele morena. Tem cabelos longos e lisos na cor castanho. Tem o rosto quadrado, sobrancelhas bem desenhadas, olhos castanhos, nariz médio e boca média com um batom marrom claro. Está usando um óculos de lentes transparentes com uma armação também transparente. Está usando uma blusa laranja. O fundo está iluminado por uma luz azul e à esquerda tem uma janela coberta por uma persiana, à direita tem um violão e centralizado há uma estante branca com vários livros.

Junto com a Bia, vou acompanhar vocês ao longo do curso. Com ele vocês aprenderão os pilares da programação orientada a objetos. Vocês entenderão sobre:

- Classes
- Herança
- Encapsulamento
- Polimorfismo
- Composição

E muito mais.  
O melhor de tudo é que utilizarão esses conceitos de forma prática no nosso mais novo projeto: o Devs & Dragons (Devs e Dragões).

Vamos lá!

### Aula 01 - Preparando o ambiente

Olá, Dev! Tudo bem?  
Primeiramente gostaria de dizer que a nerd que habita em mim, saúda a pessoa nerd que habita em você!

É muito bom te receber por aqui, nesse treinamento de Orientação a Objetos(OO) com JavaScript. Espero que seja uma experiência de aprendizado incrível, onde eu e você iremos vencer todos os desafios que aparecerem pela frente.

Ao longo do percurso, você irá aprender sobre os principais pilares da Orientação a Objetos, ou seja, sobre Classes, Herança, Composição, Polimorfismo, Encapsulamento e muito mais! Neste curso, vamos utilizar o que construirmos com OO para renderizar no layout da página um projeto bem bacana que é o Devs&Dragons.

Antes de colocar a mão na massa, é importante que o seu ambiente de desenvolvimento esteja 100% sincronizado com o meu, então veja algumas informações que deixei abaixo:

Preparando o ambiente  
Neste treinamento, usaremos o editor de código [Visual Studio Code](https://code.visualstudio.com/download). Ele pode ser baixado tanto para Windows, como Linux ou Mac.

Além disso, estamos usando o Chrome como navegador principal e é importante tê-lo instalado em seu computador.

Caso você queira dar uma olhada no layout, esse é o [figma do projeto!](https://www.figma.com/community/file/1418663911280735423)

> Lembrando que você está totalmente livre para customizar o CSS do seu projeto da maneira que desejar, inclusive, iremos adorar ver como ficou o seu resultado personalizado!

E por último e não menos importante, o foco aqui é trabalhar POO com JavaScript! Então para que eu e você possamos nos direcionar totalmente para esse tema, é necessário que você [baixe o zip do projeto base](https://github.com/alura-cursos/cartas-personagens/archive/edfeec1395c2708f8b1b7b7370b6226658b976f3.zip) ou [acesse os arquivos no Github](https://github.com/alura-cursos/cartas-personagens/tree/edfeec1395c2708f8b1b7b7370b6226658b976f3) antes de iniciarmos.

É de extrema importância que após baixar o projeto base, você dê uma boa navegada pelos arquivos para entender exatamente o que já está sendo aplicado.

Recomendações extras  
Para acompanhar as aulas do curso, recomendo que você tenha a extensão Live Server instalada, pois ela irá nos proporcionar visualizarmos as alterações ao vivo das modificações na página.

Para realizar testes, responder as atividades e desafios do curso de forma mais rápida e simplificada, sugiro o uso do [CodePen](https://codepen.io/).

> A Alura conecta pessoas que são encantadas e apaixonadas por tecnologia, que acreditam no poder da educação e que amam compartilhar conhecimento. Então lembre-se, em caso de dúvidas ao decorrer do curso, conte sempre com o discord e o fórum para te ajudar. Caso não tenha dúvidas, fique a vontade para compartilhar seu aprendizado, insights e projetos por lá, tenho certeza que ajudará outras pessoas e iremos adorar acompanhar o seu progresso.

### Aula 01 - Quando usar Classes? - Vídeo 2

Transcrição  
Observação: A instrutora Bia que vai apresentar essa aula.

Estou com o nosso projeto D&D (Devs & Dragons) aberto no VS Code, onde já existem dois objetos criados no index.js: o personagem "Pedrinho" e o personagem "José".

```JavaScript
const personagemPedrinho = {
    nome: 'Pedrinho',
    vida: 7,
    mana: 12,
    level: 5,
    tipo: 'Mago',
}
const personagemJose = {
    nome: 'Jose',
    vida: 7,
    mana: 6,
    level: 3,
    tipo: 'Arqueiro',
}
```

Reparem que eles têm algumas propriedades, que são "nome", "vida", "mana", que é o nível de poder ou de energia do personagem, "level" (nível) e "tipo". Vamos aprender como fazer para criar mais uma personagem.

Na linha 17, codamos const personagemAna = {}, sendo que Ana é o nome que quero dar para essa personagem. Em seguida, dentro das chaves, preenchemos as propriedades da personagemAna.

```JavaScript
const personagemAna = {
    nome: 'Ana',
    vida: 8,
    mana: 10
}
```

Porém imaginem a quantidade de cartas que tem em um baralho de RPG (Role Play Game, traduzido como Jogo de Interpretação de Papéis). Ao pesquisarmos essa informação no Google, descobrimos que no baralho de RPG tem em torno de 52 cartas.

Pensem comigo, se cada objeto representa uma carta de personagem, criar essas personagens uma a uma não seria muito prático, principalmente porque cada personagem possuirá as mesmas propriedades. Para solucionarmos isso, na linha 23 criaremos um modelo contendo todos os dados que são comuns nesses objetos.

```JavaScript
//código omitido
class Personagem {
    nome
    vida
    mana
}
```

Por enquanto vamos deixar nosso modelo dessa forma. Em seguida, comentaremos da linha 1 a linha 7, onde tem o bloco de código do personagem "Pedrinho", usando /* */.

```JavaScript
/*const personagemPedrinho = {
    nome: 'Pedrinho',
    vida: 7,
    mana: 12,
    level: 5,
    tipo: 'Mago',
}*/
```

Depois vamos transformar esse personagem em variável, então vamos selecionar const personagemPedrinho na linha um, pressionar "Ctrl + C", e depois, na linha 29, pressionamos "Ctrl + V". Nós iremos codar que o personagemPedrinho é igual a new Personagem().

```JavaScript
const personagemPedrinho = new Personagem()
```

Feito isso vamos pressionar "Enter" e na linha 30, ao escrevermos personagemPedrinho. aparecem sugestões de autocomplete do VS Code com as propriedades que escrevemos na classe Personagem(). Sendo assim, vamos começar a preencher.

```JavaScript
//código omitido

const personagemPedrinho = new Personagem()
personagemPedrinho.nome = 'Pedrinho'
personagemPedrinho.mana = 12
personagemPedrinho.vida = 7
```

Agora precisamos adicionar novas propriedades do personagem, e para isso precisamos alterar classe Personagem(). Vamos adicionar "level", "tipo" e "descricao", que será a descrição do personagem.

```JavaScript
class Personagem {
    nome
    vida
    mana
    level
    tipo
    descricao
}
```

Agora quando escrevermos, na linha 36, personagemPedrinho. já aparecem as novas propriedades que adicionamos à classe Personagem(). Isso acontece porque declaramos que personagemPedrinho comporta um new Personagem(), ou seja, informamos que a variável personagemPedrinho é uma instância da classe Personagem().

Quando escrevemos class criamos uma classe que é um modelo contendo todas as informações em comum dos objetos que serão criados a partir dela. Portanto criamos uma conexão entre o que a classe tem e o que o objeto terá. A partir da classe, diversos objetos podem ser criados.

Ao deixarmos o mouse sobre Personagem() na linha 32, reparamos que o VS Code informa que ele e um constructor (construtor), utilizado para construir algo, que é exatamente o que estamos fazendo. E isso que nós criamos pode ser facilmente trazido para o mundo real.

Imagine em um sistema de banco termos um classe chamada classeCliente contendo diversas propriedades, como:

Nome
CPF
Agência

A partir da classeCliente é possível criar diversos clientes, então tem as instâncias dos clientes 2000, 2001 e assim por diante. Portanto esse foi o primeiro passo para solucionar a questão de repetição das propriedades que nós começamos a aprender.

Ainda temos muito para evoluir, então vejo vocês no próximo vídeo.

### Aula 01 - Para saber mais: instanceof

instanceof  
O operador instanceof testa se um objeto possui como protótipo ou modelo, que atua como uma determinada classe ou função construtora, o seu valor de retorno é um booleano .

Tendo o seguinte código:

```JavaScript
export class Personagem {
    nome
    vida
    mana
    level
    tipo
    obterInsignia() {
        if (this.level >= 5) {
            return `Implacavel ${ this.tipo }`
        }
        return `${ this.tipo } iniciante`
    }
}
const personagemJack = new Personagem()
```

Testando!

```JavaScript
console.log(personagemJack instanceof Personagem) 
```

O retorno no console é true, visto que quando foi escrito const personagemJack = new Personagem(), esse objeto se tornou uma instância da classe Personagem.

Caso fosse testado que personagemJack é uma instância de outra classe, por exemplo:

```JavaScript
class Mago {
    magia = 10
}
console.log(personagemJack instanceof Mago)
```

O resultado no console seria false.

Isso porque o grande objetivo dessa palavra chave é verificar se aquela instância foi ou não foi criada a partir de uma determinada classe.

### Aula 01 - Import e export - Vídeo 3

Transcrição  
Agora que construímos a classe Personagem(), nesse vídeo vamos organizar a estrutura de classes e arquivos no nosso projeto da maneira que é feito ao utilizarmos esse tipo de modelo de classes.

Para isso acessaremos o Explorador, que é a coluna à esquerda, e dentro da pasta "src" criaremos uma nova pasta. Então clicamos em "src", para encolhê-la, e depois no ícone de uma pasta com um "+" no canto inferior direito. Esse ícone de "Nova pasta" é o segundo da esquerda para direita na parte superior direita do Explorador. Vamos nomear essa pasta como "modules" ("módulos").

Com a pasta "modules" selecionada, criaremos um novo arquivo dentro dela, clicando no primeiro ícone da esquerda para direita na parte superior direita do Explorador. Esse ícone de "Nova arquivo" tem o formato de uma folha com o canto superior direito dobrado e tem um "+" no canto inferior direito. Nomearemos o arquivo como "personage.js".

Retornando ao "src > index.js", apagaremos a linha 36, onde está escrito apenas personagemPedrinho.. Em seguida, vamoms selecionar o bloco da classe Personagem(), da linha 23 a 30, pressionar "Ctrl + X" e vamos colar no arquivo personagem.js.

```JavaScript
class Personagem {
    nome
    vida
    mana
    level
    tipo
    descricao
}
```

Essa forma que nós fizemos é a recomendada pela documentação do MDN. Trata-se de uma boa prática, porque nos últimos anos começaram a pensar em maneiras de melhorar a usabilidade e manutenção do código. Uma das formas a qual chegaram foi a de separar o código em pequenos módulos que só seriam utilizados quando fossem necessários.

Tanto que, no arquivo "index.html", o script da linha 33, que chama o index.js modifica seu type (tipo). Atualmente temos:

```JavaScript
<script type="module" src="./src/index.js"></script>
```

Então temos o type="module" porque a maioria dos navegadores reconhece esse tipo. Porém para o arquivo ser interpretado dessa forma, ele precisa ser do tipo module. Por isso essa modificação.

Agora voltamos para o index.js e, na linha 28, vamos codar:

```JavaScript
console.log(personagemPedrinho)
```

Assim poderemos visualizar esse objeto. Quando acessamos o Console do navegador onde está nossa página, encontramos um erro informando que "Personagem is not defined" ("Personagem não está definido"), e que esse erro está acontecendo na linha 23 do "index.js". Portanto é justamente na linha onde o new Personagem() parou de funcionar.

Para resolver isso, voltaremos para o arquivo "personagem.js" e na linha 1, antes de class Personagem {}, escreveremos export.

```JavaScript
export class Personagem {
    /*código omitido*/
```

De volta ao "index.js", clicaremos no começo da linha 1 e pressionaremos "Enter" duas vezes para descer o código comentado para linha 3. Depois voltaremos à linha 1 para fazer a importação da classe Personagem.

```JavaScript
import { Personagem } from "./modules/personagem.js"

/*const personagemPedrinho = {
    nome: 'Pedrinho',
    vida: 7,
    mana: 12,
    level: 5,
    tipo: 'Mago',
}*/

/*código omitido*/
```

Percebam que ao escrevermos import { Personagem }, a importação se autocompleta, mas é importante que o endereço de onde está sendo importado termine em personagem.js. O .js é muito importante, ou a importação não irá funcionar.

Vamos salvar o código e, ao retornarmos para o Console do navegador, observamos que a instância personagemPedrinho voltou a funcionar. Sendo assim, recebemos várias informações de personagemPedrinho.

Personagem {nome: 'Pedrinho', vida: 7, mana: 12, level: undefined, tipo: undefined, ...}

descricao: undefined

level: undefined

mana: 12

nome: "Pedrinho"

tipo: undefined

vida: 7

[[Prototype]]: Object

As propriedades de nome, vida e mana estão preenchidas, e as propriedades que não atribuímos valor está como undefined (indefinido). Além disso, conseguimos visualizar na primeira linha que personagemPedrinho é uma instância da classe Personagem.

Essa ação que nós precisamos fazer de import e export foi porque o script que criamos, que é um módulo, depende dessas palavras reservadas. Basicamente o export (exportar) envia o pedaço de código para algum lugar e o import (importar) busca esse código que foi enviado.

Agora que nosso projeto está devidamente organizado, vamos evoluir ainda mais essa classe personagem.

### Aula 01 - Para saber mais: orientação a objetos

Agora que você está entrando no universo da Orientação a objetos (OO), te convido a [assistir um episódio do #HipsterPontoTube](https://youtu.be/jpuJ1qrluoU) no canal do youtube da Alura, onde o Paulo Silveira bate um papo com a Roberta Arcoverde sobre a utilização de orientação a objeto e suas aplicações.

### Aula 01 - Sobre o this - Vídeo 4

Transcrição  
As classes possuem características, ou seja, propriedades, e comportamentos. Nesse vídeo construiremos o primeiro método na classe Personagem().

Com o arquivo "personagem.js" aberto, vamos clicar ao final de descricao, na linha 7, e pressionar "Enter" duas vezes. Na linha 9, ou seja, dentro da classe e depois das propriedades, escreveremos obterInsignia(){}. Dentro das chaves ({}) desse método, vamos codar a condicional.

```JavaScript
export class Personagem {
    nome
    vida
    mana
    level
    tipo
    descricao

    obterInsignia() {
        if(this.level >= 5){
            return 'Implacavel ${this.tipo}'
        }
        return '${this.tipo} iniciante'
    }
}
```

Então verificamos se o nível é maior ou igual a 5, retorna a frase com "Implacavel" e o tipo do personagem. Caso contrário, retorna o tipo do personagem e informa que ele é "iniciante". E para concatenar essas informações usamos o cifrão e as chaves (${}).

Salvamos essa alteração e no arquivo "index.js" vamos terminar de preencher as propriedades do personagemPedrinho.

```JavaScript
//código omitido

const personagemPedrinho = new Personagem()
personagemPedrinho.nome = 'Pedrinho'
personagemPedrinho.mana = 12
personagemPedrinho.vida = 7
personagemPedrinho.tipo = 'Mago'
personagemPedrinho.level = 5
```

Vamos aproveitar para criarmos uma nova instância. Para isso, vamos comentar o bloco sobre o personagemJose, ou seja, da linha 11 a linha 17, usando /* */.

```JavaScript
/*const personagemJose = {
    nome: 'Jose',
    vida: 7,
    mana: 6,
    level: 3,
    tipo: 'Arqueiro',
}*/
```

Em seguida, vamos selecionar o const personagemJose, na linha 11, copiar com "Ctrl + C" e reutilizarmos essa variável na linha 32, pressionando "Ctrl + V". Então na linha 32 codaremos const personagemJose = new Personagem() e em seguida vamos completar as informações de nome, tipo e nível do personagem.

```JavaScript
const personagemJose = new Personagem()
personagemJose.nome = 'Jose'
personagemJose.tipo = 'Arqueiro'
personagemJose.level = 3
```

Agora vamos testar se a obterInsignia está funcionando. Para isso, na linha 37, vamos apagar o console.log(personagemPedrinho) e no lugar vamos codar:

```JavaScript
//código omitido
console.log('Insígnia de ' + personagemPedrinho.nome + ': ' + personagemPedrinho.obterInsignia())
```

Podemos, inclusive, aumentar o tamanho da tela para observarmos melhor o código.

Após escrevê-lo, vamos selecionar toda linha 37 e pressionar "Ctrl + C" para copiá-la. Ao final da linha 37 vamos pressionar "Enter" e vamos colar o código na linha 38, pressionando "Ctrl + V".

Na linha 38, selecionamos Pedrinho, pressionamos "Ctrl + D", e vamos substituí-lo por Jose nos dois locais ao mesmo tempo.

```JavaScript
//código omitido
console.log('Insígnia de ' + personagemPedrinho.nome + ': ' + personagemPedrinho.obterInsignia())
console.log('Insígnia de ' + personagemJose.nome + ': ' + personagemJose.obterInsignia())
```

Salvamos o código e voltamos para onde nosso projeto está aberto junto ao Console da página. Quando o projeto renderiza, no Console temos as informações do método obterInsignia, e eu vou ampliar para ficar mais fácil de visualizarmos.

Insígnia de Pedrinho: Implacavel Mago

Insígnia de Jose: Arqueiro Iniciante

Voltando para o arquivo "personagem.js", observamos que ao criarmos o obterInsignia, cujo papel fundamental é gerar uma insígnia para o personagem, ela verifica o level. Se ele for maior ou igual a 5, a insígnia é "Implacável tipo_do_personagem", caso contrário é "tipo_do_personagem iniciante".

Porém, quando criamos o método dentro da classe, não sabemos que personagem está chamando esse método, se é o Pedrinho, o Jose ou a Ana. Então vamos usar uma palavra reservada, que é o this para chamar o this.level e o this.tipo.

O this se traduz como "isto", ou seja, é algo que não conhecemos quando estamos criando o dentro da classe. Porque essa informação será gerada a partir da instância, que vai mudar o estado interno da classe, ou seja, o contexto da classe.

Voltando para o "index.js", reparem que ao escrevermos na linha 29 personagemPedrinho.tipo = 'Mago', o this.tipo que codamos na classe vira "Mago". Por outro lado, na linha 34 codamos personagemJose.tipo = 'Arqueiro', então o this.tipo da classe será "Arqueiro". Essa regra também se aplica ao level.

Isso significa que essas informações da classe, quando usam o this vai depender da instância, e a instância tem a responsabilidade de alterar o estado interno da classe. Portanto o this é algo que não conhecemos quando estamos construindo dentro da classe.

Lembram que conversamos que Personagem é um constructo? Chegou o momento de conversamos de forma mais aprofundada sobre a palavra constructor.

### Aula 01 - Mudando de acordo com o contexto - Exercício

Você aprendeu sobre o que a palavra chave this representa, atuando como um estado interno de um determinado contexto. Diante disso, analise o código abaixo e assinale as alternativas corretas:

```JavaScript
 class Animal {
    nome
    tipo
    som
    imprimeSom() {
      return `Meu ${this.tipo} ${this.nome} faz ${this.som}`
    }
}
  const gatinhoTom = new Animal()
  gatinhoTom.tipo = 'gatinho'
  gatinhoTom.som = 'meaaaw'

  const doguinhoBob = new Animal()
  doguinhoBob.nome = 'Bob'
  doguinhoBob.tipo = 'catioro'
  doguinhoBob.som = 'auau'

console.log(doguinhoBob.imprimeSom())
console.log(gatinhoTom.imprimeSom())
```

Alternativa correta  
Na linha 23, o console.log(doguinhoBob.imprimeSom()) irá retornar “Meu catioro Bob faz auau”.

> Isso porque para a instância doguinhoBob da classe Animal, o contexto do this.nome é Bob, o this.tipo é catioro e o this.som é auau, formando então esta frase.

Alternativa correta  
Na linha 25, o console.log(gatinhoTom.imprimeSom()) irá retornar “Meu gatinho undefined faz meaaaw”.

> Como a propriedade nome da instância ou objeto gatinhoTom não foi definida, o this.nome não encontrará nenhum valor e por isso irá trazer o undefined.

## Aula 02 - Constructors e Renderização

### Aula 02 -  - Vídeo 1
