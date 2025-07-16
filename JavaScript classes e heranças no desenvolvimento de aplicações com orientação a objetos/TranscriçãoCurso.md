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

### Aula 02 - Construindo por parâmetro - Vídeo 1

Transcrição  
Observação: Esta aula será apresentada pela instrutora Bia.

Nosso projeto tem duas instâncias criadas: personagemPedrinho e personagemJose. Contudo, após criarmos através do new Personagem() é necessário escrever o valor de cada propriedade individualmente.

Vamos otimizar a forma de realizar esse processo. Para isso, acessaremos o arquivo personagem.js. Abaixo das propriedades e acima de obterInsignia(), adicionaremos um constructor() e um bloco de chaves {}.

Entre os parênteses escreveremos as propriedades nome, level e tipo, separando-as com uma vírgula. Por enquanto não vamos nos preocupar com as outras propriedades.

Dentro do bloco de chaves adicionaremos os comandos abaixo, um em cada linha:

```JavaScript
this.nome = nome;
this.level = level e
this.tipo = tipo.
export class Personagem {
    nome
    vida
    mana
    level
    tipo
    descricao
    constructor(nome, level, tipo) {
        this.nome = nome
        this.level = level
        this.tipo = tipo
    }
```

Salvaremos o código e retornaremos ao arquivo index.js. Nele apagaremos todo o código, mantendo somente o import.

```JavaScript
import { Personagem } from "./modules/personagem.js"
```

Duas linhas abaixo do import adicionaremos uma const personagemPedrinho que receberá o sinal = e um new Personagem().

```JavaScript
import { Personagem } from "./modules/personagem.js"

const personagemPedrinho = new Personagem()
```

O VS Code lança um dropdown dizendo que Personagem possui três argumentos como parâmetro: nome, level e tipo, que são justamente as propriedades inseridas no constructor.

Inicialmente o VS Code destaca a propriedade nome. Vamos adicionar o nome Pedrinho entre aspas simples e dentro dos parênteses de new Personagem().

```JavaScript
import { Personagem } from "./modules/personagem.js"

const personagemPedrinho = new Personagem('Pedrinho')
```

Neste momento o VS Code passa a destacar a propriedade level. Vamos adicionar o valor dela: 5.

Não podemos esquecer de separar os valores com uma vírgula.

```JavaScript
import { Personagem } from "./modules/personagem.js"

const personagemPedrinho = new Personagem('Pedrinho', 5)
```

Por fim, o VS Code passa a destacar a propriedade tipo. Vamos adicionar a ele o tipo mago entre aspas simples.

```JavaScript
import { Personagem } from "./modules/personagem.js"

const personagemPedrinho = new Personagem('Pedrinho', 5, 'Mago')
```

Faremos o mesmo procedimento para personagemJose, adicionando o nível 3 e o tipo Arqueiro.

```JavaScript
import { Personagem } from "./modules/personagem.js"

const personagemPedrinho = new Personagem('Pedrinho', 5, 'Mago')
const personagemJose = new Personagem('Jose', 3, 'Arqueiro')
```

O processo se tornou mais prático do que adicionar cada elemento separadamente. Contudo, temos um novo termo: o constructor.

O que é um constructor?  
Trata-se de um método especial que só é executado quando a instância é criada. Nos parâmetros dele adicionamos variáveis que serão requisitadas por essa instância.

A partir do momento que criamos o personagemPedrinho, dizemos que ele é um new Personagem e passamos os seus valores, as variáveis do constructor() carregam esses valores e os associam às propriedades da classe.

No caso de personagemPedrinho, estamos enviando Pedrinho como o valor de nome para a variável do constructor, e portanto ela será associada a this.nome.

Estamos utilizando o this pois não sabemos qual será o nome desse personagem — pode ser Pedrinho, Jose, Ana ou qualquer outro.

Importante: Dentro de uma classe só poderá existir um método constructor(). Se criarmos mais de um, será lançado um erro de sintaxe.

Vimos as informações de personagemPedrinho e personagemJose sendo renderizadas no console. Contudo, essa não é a ideia do curso. Aqui, renderizaremos todo o avanço do nosso projeto em um layout na página.

A seguir, vamos nos ajudar para realizar essa tarefa. Nos vemos no próximo vídeo.

### Aula 02 - Criando a view - Vídeo 2

Transcrição  
Além da pasta "modules" que criamos, o nosso projeto conta com diversas outras pastas e arquivos que foram disponibilizados no projeto base, localizado na atividade "Preparando o ambiente"https://cursos.alura.com.br/course/javascript-orientacao-a-objetos/task/120244.

Acessaremos o explorador de arquivos na lateral esquerda do VS Code. A pasta "src" estará aberta, e dentro dela veremos as seguintes pastas:

"assets", que contém o CSS e as imagens do projeto;
"components", que contém os arquivos modal.js e personagem-view.js.
Neste vídeo, trabalharemos com o arquivo personagem-view.js.

Importante: Para fazer este curso, é necessário ter concluído os cursos da [Formação de Javascript para Front-End](https://www.alura.com.br/formacao-javascript-front-end), em especial aqueles que trabalham com a manipulação do DOM.

Acessando o arquivo personagem-view.js, veremos funções que estão comentadas. Isso ocorre pois vamos trabalhar com elas em outro momento.

O que nos importa são as funções render() e criaPersonagem(). A primeira preenche o conteúdo interno de uma `<ul>` com várias `<li>`s. Essas, por sua vez, são os objetos ou instâncias que estamos criando. Já a segunda função é responsável pela criação dessas `<li>`s.

```JavaScript
function render() {
    this.ulPersonagens.innerHTML = ''
    this.personagens.forEach(personagem => {
        const personagemLI = this.criaPersonagem(personagem)
        this.ulPersonagens.appendChild(personagemLI)
    })
}

criaPersonagem = (personagem) => {
    const personagemLI = document.createElement('li')
    personagemLI.classList.add('personagem', personagem.tipo)

/* Código omitido */

}
```

Basicamente a criaPersonagem() cria um elemento, adicionando classes e estilos a ele, enquanto constrói um HTML para esse `<li>`. Esse HTML será preenchido posteriormente com os valores das propriedades preenchidas pelas instâncias.

Depois desse processo, a função criaPersonagem() salvará o HTML na variável personagemLI e retornará essa variável, a qual será utilizada pela função render() para incorporar a `<li>` na `<ul>`.

Para esse código funcionar, precisamos colocar todo esse conteúdo dentro de uma classe.

Pressionaremos "Enter" duas vezes na linha 1 e subiremos o cursor de volta à ela. Na linha vazia criaremos a classe export class personagemView e abriremos um bloco de chaves {}. Em seguida selecionaremos e recortaremos todo o código do arquivo atual. Vamos colar esse conteúdo entre as chaves da nova classe.

```JavaScript
export class personagemView {
    function render() {
        this.ulPersonagens.innerHTML = ''
        this.personagens.forEach(personagem => {
            const personagemLI = this.criaPersonagem(personagem)
            this.ulPersonagens.appendChild(personagemLI)
        })
    }
    criaPersonagem = (personagem) => {
        const personagemLI = document.createElement('li')
        personagemLI.classList.add('personagem')

/* Código omitido */

    }
}
```

Neste momento surgirá um erro na palavra function de render(). Para solucioná-lo, apagaremos essa palavra.

O erro ocorreu pois dentro das classes não devemos declarar métodos com essa palavra reservada. Se digitarmos somente render(), ela já será interpretada como um método da classe.

Definimos um padrão para o nosso projeto, dividindo as responsabilidades das classes. Enquanto a classe Personagem é responsável por manter a Model — ou seja, os modelos dos objetos — a classe PersonagemView será responsável por manter a View — ou seja, a interface com a qual a pessoa usuária vai interagir.

Já criamos a classe. A seguir, precisamos evoluí-la para começar a renderizar os objetos da página. Nos vemos no próximo vídeo.

### Aula 02 - Para saber mais: padrão MVVM
 Próxima Atividade

No universo do desenvolvimento, é muito importante prezar por um código limpo e bem estruturado. Uma das ações que podem ser tomadas para atingir esse objetivo, é utilizar design patterns ou padrões de projeto como aliados para melhorar a organização e auxiliar na manutenção do software.

O padrão [Model - View - ViewModel (MVVM)](https://learn.microsoft.com/pt-br/windows/uwp/data-binding/data-binding-and-mvvm) é o padrão de arquitetura de software que sugere separar a lógica de apresentação de dados (UI) da parte da lógica de negócios principal da aplicação (Model).

Esse não é o único padrão que existe, existem outros como o padrão MVP e o MVC, por exemplo. E aí aproveito para indicar o [curso JavaScript:aprofundando em MVC](https://cursos.alura.com.br/course/javascript-es6-orientacao-a-objetos-parte-2), padrão Proxy e Factory, que é um curso da escola de Front-end, ministrado pelo instrutor Flávio Almeida, que tem como objetivo abordar OO para solucionar problemas, utilizando na estrutura da aplicação o padrão MVC.

Mas voltando para o MVVM, que é o padrão que mais nos aproximamos na organização nesse projeto, dá uma olhadinha em como funcionam as suas camadas!

O código é separado de acordo com uma determinada responsabilidade.

- Modelo: Esta camada é responsável pela abstração das fontes de dados. Model e ViewModel trabalham juntos para obter e salvar os dados. Exemplo: classe Personagem.
- View: o objetivo desta camada é informar a ViewModel sobre a ação do usuário. Esta camada é encapsulada pela ViewModel e representa tudo o que o usuário irá ver e interagir na tela. Exemplo: Código HTML que está sendo injetado na variável personagemLi.
- ViewModel: expõe os fluxos de dados que são relevantes para a View. Além disso, funciona como um elo entre o Modelo e a Visão. Exemplo: classe PersonagemView.

E esses são os três principais modelos utilizados, você já os conhecia ou utilizou em algum projeto? Se sim, não deixe de contar para nós sua experiência por meio das comunidades da Alura.

### Aula 02 - Renderizando na página - Vídeo 3

Transcrição  
Criamos a classe PersonagemView. Precisamos criar um constructor() para ela.

Na primeira linha do bloco de chaves da PersonagemView escreveremos personagens e pressionaremos "Enter" duas vezes. Na quarta linha do bloco adicionaremos o constructor(personagens). À direita abriremos um bloco de chaves e pularemos uma linha entre ele e a função render().

Dentro do bloco de chaves adicionaremos this.ulPersonagens = document.querySelector('ul#personagens'). Esse comando busca a `<ul>` no HTML e a salva na propriedade ulPersonagens, a qual será utilizada pela render().

Desceremos uma linha e adicionaremos this.personagens = personagens. A propriedade personagens será um arranjo que conterá todos os objetos ou instâncias que estamos criando.

Já que salvamos os objetos dentro de um arranjo e a propriedade personagens está sendo pedida pelos parâmetros do constructor, este será o processo utilizado para enviar esses objetos para aPersonagemView.

```JavaScript
export class PersonagemView {
    personagens
    constructor(personagens) {
        this.ulPersonagens = document.querySelector('ul#personagens');
        this.personagens = personagens
    }
    render() {

    /* Código omitido */
    }
    }
```

Adicionaremos mais uma classe em personagemLI e preencheremos o seu HTML com os valores das propriedades' da classe Personagem.

Entre os parênteses do comando personagemLI.classList.add() que adiciona a classe (ou seletor) de CSS, adicionaremos uma vírgula à direita de 'personagem' seguida de personagem.tipo. Vamos entender essa adição posteriormente.

```JavaScript
    criaPersonagem = (personagem) => {
        const personagemLI = document.createElement('li')
        personagemLI.classList.add('personagem', personagem.tipo)

/* Código omitido */

    }
```

No HTML entre as crases de personagemLI.innerHTML buscaremos o parágrafo abaixo que possui a classe level.

```JavaScript
<p class="level-texto">Level</p>
```

À direita da palavra Level daremos um espaço e adicionaremos uma template string dentro da qual escreveremos personagem.level.

```JavaScript
<p class="level-texto">Level ${personagem.level}</p>
```

Em seguida buscaremos o `<h2>` que possui a classe tipo.

```JavaScript
<h2 class="tipo"></h2>
```

Entre as tags de abertura e fechamento adicionaremos outra template string dentro da qual adicionaremos personagem.tipo.

```JavaScript
<h2 class="tipo">${personagem.tipo}</h2>
```

Buscaremos também o `<h3>` que possui a classe nome. Entre as tags de abertura e fechamento adicionaremos outra template string dentro da qual adicionaremos personagem.nome.

```JavaScript
<h3 class="nome">${personagem.nome}</h3>
```

Por último buscaremos o parágrafo que possui a classe insignia onde renderizaremos o texto da obterInsignia(). Entre as tags de abertura e fechamento adicionaremos uma template string dentro da qual adicionaremos personagem.obterInsignia() para chamar o método.

```JavaScript
<p class="insignia">${personagem.obterInsignia()}</p>
```

A classe PersonagemView está pronta para ser utilizada. Vamos importá-la para o index.js. Acessando esse arquivo, na linha abaixo do import de Personagem escreveremos import { Personagem }.

Neste momento será aberto um dropdown com sugestões do VS Code. Selecionaremos a opção PersonagemView que exibe à sua direita o local "./components/personagem-view.js", o que permitirá ao sistema autocompletar nossa importação.

```JavaScript
import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
```

Na linha abaixo da criação das instâncias personagemPedrinho e personagemJose daremos "Enter" e criaremos o arranjo const personagens = [], onde [] é o símbolo do arranjo. Dentro dele adicionaremos as instâncias personagemPedrinho e personagemJose separadas por vírgula.

Vamos enviar essas instâncias para PersonagemView, descendo duas linhas e adicionando new PersonagemView(personagens). À direita de (personagens) adicionaremos .render() para chamar essa função.

```JavaScript
const personagemPedrinho = new Personagem('Pedrinho', 5, 'Mago')
const personagemJose = new Personagem('Jose', 3, 'Arqueiro')

const personagens = [personagemPedrinho, personagemJose]

new PersonagemView(personagens).render()
```

Salvaremos nosso código e veremos no navegador as nossas cartas renderizadas.

Cartas do mago Pedrinho e do arqueiro José no navegador. Acima delas há dois elementos: alinhado à esquerda temos o título "*Devs & Dragons*" em amarelo, e alinhado à direita temos o botão amarelo com o título "Duelar!" em preto. No centro da tela temos as duas cartas. À esquerda, temos uma carta na cor verde. Na metade superior, o desenho de um mago vestido de verde e com um cajado na mão. No canto superior esquerdo, um ícone de poção. No canto superior direito, o texto "Level 5". Abaixo da imagem do mago, um retângulo azul de bordas arredondadas com o texto "Mago" em preto. Abaixo deste, um retângulo fino com o nome "Pedrinho" em preto. Logo abaixo um retângulo maior em branco. À direita, temos uma carta na cor azul. Na metade superior, o desenho de um arqueiro vestido de azul segurando um arco e portando nas costas uma aljava com flechas dentro. No canto superior esquerdo, um ícone de arco atravessado por uma flecha. No canto superior direito, o texto "Level 3". Abaixo da imagem do arqueiro, um retângulo azul de bordas arredondadas com o texto "Arqueiro" em preto. Abaixo deste, um retângulo fino com o nome "José" em preto. Logo abaixo um retângulo maior em branco. Na base dos cartões temos suas respectivas insígnias escritas em preto: no cartão esquerdo, "Implacável mago" e "Arqueiro iniciante".

Vamos analisar a aba de Ferramentas do Desenvolvedor aberta ao lado da página. Selecionaremos a aba secundária "Elementos". No corpo dela veremos uma `<ul>` que possui duas `<li>`s: uma para o mago Pedrinho e outra para o arqueiro José.

```JavaScript
<ul>
    <li class=""personagem Mago>…</li>
    <li class=""personagem Arqueiro>…</li>
</ul>
```

Anteriormente adicionamos uma outra classe a essas cartas: o personagem.tipo. Fizemos isso pois existe uma classe no CSS que possui o mesmo nome que o tipo desse personagem. Por exemplo, a classe de Mago possui características de CSS específicas para Mago.

Essas cartas possuem duas classes:

- personagem, que contém características comuns para todos os personagens;
- personagem.tipo, a classe que possui o mesmo nome do tipo — por exemplo, a classe Mago terá o fundo verde, o desenho do mago e o ícone de poção.

Aconteceu uma coisa interessante: as propriedades que colocamos no HTML possibilitaram a renderização dos dados. Na tela, podemos ver que dentro da carta do mago constam o nome "Pedrinho", o Level "5" e a sua insígnia "Implacável mago". O mesmo ocorreu para o arqueiro José.

Nossas cartas já estão renderizadas. A seguir, vamos voltar à Model, onde existem atributos que precisam ser trabalhados.

### Aula 02 - Atributos fora dos parâmetros - Vídeo 4

Transcrição
Na classe personagem existem alguns atributos que não foram definidos com nenhum valor: vida, mana e descricao. Neste momento trabalharemos com os dois primeiros.

Se observarmos a página da aplicação no navegador, veremos que cada carta de personagem possui dois ícones nos cantos inferiores. Do lado esquerdo, um frasco azul que representa a mana. Do lado direito, um coração que representa a vida.

Observação: Segundo o Dicionário Informal, Mana ou MP é um termo usado em jogos RPG que representa o poder ou a força interna de um ser vivo ou objeto inanimado.

Definiremos um valor para essas duas propriedades, permitindo que elas sejam renderizadas na página.

Acessaremos novamente o arquivo personagem.js pelo VS Code. Dentro do bloco de chaves do constructor, abaixo de this.tipo, adicionaremos this.vida = 100. Abaixo dessa linha escreveremos this.mana = 100.

```JavaScript
export class Personagem {
/* Código omitido */
    constructor(nome, level, tipo) {
        this.nome = nome
        this.level = level
        this.tipo = tipo
        this.vida = 100
        this.mana = 100
    }
```

Se realizarmos uma analogia entre a nossa aplicação e um jogo de RPG, no momento estamos na fase de criação de personagens. Quando o jogo inicia, geralmente esses personagens já possuem um valor pré-definido para vida e mana, que varia por classe e por nível.

Se aplicarmos outra analogia para o mundo real, em uma aplicação de gerenciamento de estoque, por exemplo, os produtos iniciam sempre com a quantidade 1. Se não houvesse pelo menos uma unidade, não haveria produto.

Nós definimos o valor das propriedades na própria classe. Anteriormente entendemos que o this é editado a partir da instância,a qual mudará o contexto da classe. Contudo, neste caso, o this irá representar a própria instância. Com esta configuração informamos que quando qualquer instância for criada, ela já terá o valor 100 definido para vida e mana.

Testaremos o nosso código acessando o arquivo index.js. Abaixo de new PesonagemView() adicionaremos um console.log(personagemJose.vida).

```JavaScript
/* Código omitido */

new PersonagemView(personagens).render()

console.log(personagemJose.vida)
```

Salvaremos esse código e acessaremos o console que está aberto no navegador, no qual veremos o retorno do valor de vida.

100

Vamos realizar alguns testes?

Voltando ao arquivo personagem.js, o que acontece se tirarmos o this dos atributos vida e mana localizados dentro do constructor?

```JavaScript
export class Personagem {

/* Código omitido */

    constructor(nome, level, tipo) {
        this.nome = nome
        this.level = level
        this.tipo = tipo
        vida = 100
        mana = 100
    }
```

Salvaremos o código e acessaremos novamente o console do navegador. Veremos que nem ele, nem a página renderizam mais nada. Tudo parou de funcionar.

Contudo, se recortarmos as linhas de código vida = 100 e mana = 100 de dentro do constructor e colá-las nas linhas 3 e 4 onde temos vida e mana, tudo volta a funcionar.

```JavaScript
export class Personagem {
    nome
    vida = 100
    mana = 100
    level
    tipo
    descricao

    constructor(nome, level, tipo) {
        this.nome = nome
        this.level = level
        this.tipo = tipo
    }
```

Por que isso acontece? Precisamos entender as responsabilidades de cada elemento, que são distintas. No constructor as propriedades dependem do this para funcionarem. Já as propriedades declaradas e inicializadas fora dele não dependem deste comando.

Quando inserimos vida = 100 e mana = 100 dizemos que, independente de haver constructor ou não, quando as instâncias forem criadas elas receberão essas propriedades com os seus valores pré-definidos.

E o que são as propriedades nome, level e tipo que são pedidas nos parênteses do constructor?

Vamos remover as propriedades nome, level e tipo declaradas acima do constructor e salvar o código.

```JavaScript
export class Personagem {
    vida = 100
    mana = 100
    descricao

    constructor(nome, level, tipo) {

/* Código omitido */

    }
```

Veremos no navegador que nada aconteceu. Por quê? As propriedades que são definidas no constructor não precisam necessariamente ser declaradas fora dele. Ou seja, trata de uma sintaxe opcional.

Voltaremos a incluir as propriedades nome, level e tipo removidas pois no nosso dia-a-dia de dev veremos muitos casos de propriedades declaradas fora do constructor e inicializadas dentro dele. Em Typescript, por exemplo, essa sintaxe não é opcional.

As propriedades vida e mana foram renderizadas no console, mas o objetivo deste curso é renderizá-las na página. Vamos levá-las para PersonagemView acessando o arquivo personagem-view.js.

Dentro do HTML de personagemLI.innerHTML vamos localizar os dois `<h4>`s com as classes mana e vida. Entre as chaves de abertura e de fechamento de cada classe adicionaremos uma template string, cujo interior receberá suas respectivas propriedades:

```JavaScript
na class="mana" adicionaremos personagem.mana e
na class="vida" adicionaremos personagem.vida.
/* Código omitido */
        personagemLI.innerHTML =
        `/* Código omitido */

        <div class="container-inferior">
            <img src="./src/assets/img/icone-mana.png" class="icone-mana">
            <p class="insignia">${personagem.obterInsignia()}</p>
            <img src="./src/assets/img/icone-vida.png" class="icone-vida">
            <h4 class="mana">${personagem.mana}</h4>
            <h4 class="vida">${personagem.vida}</h4>
        </div>
        `

/* Código omitido */
```

Salvaremos nosso código e voltaremos ao navegador. Nele veremos as duas novas propriedades renderizadas nos cantos inferiores das duas cartas:

- à esquerda, o número 100 abaixo do ícone do frasco que representa a mana e
- à direita, o número 100 abaixo do ícone do coração que representa a vida.

Concluímos a segunda aula deste curso. Partiremos para a próxima onde conheceremos os três principais fundamentos da Orientação a Objetos. Nos vemos lá!

### Aula 02 - Trabalhando com constructor - Exercício

O método especial Constructor é utilizado para criar e inicializar objetos criados a partir de uma classe. Imagine que você está iniciando um outro projeto que fosse sobre animais, qual seria a sintaxe correta para conseguir declarar e utilizar o constructor em uma classe? Analise as opções abaixo e assinale a alternativa correta.

resposta:

```JavaScript  
class Animal {
    constructor(nome, tipo, som) {
      this.nome = nome
      this.tipo = tipo
      this.som = som
    }
    imprimeSom() {
      return `Meu ${this.tipo} ${this.nome} faz ${this.som}`
    }
}
console.log(new Animal('Bob', 'Doguinho', 'Auuuuuu'))
```

> Perfeito, a sintaxe está completamente certa! No console há o retorno da nova instância com os valores 'Bob', 'Doguinho', 'Auuuuuu', para as propriedades nome, tipo e som, respectivamente. Essas propriedades estão sendo solicitadas no parâmetro do constructor e os valores estão sendo utilizados no this para setar o novo contexto da classe.

### Aula 02 - Desafio: Classe Mago

Agora é com você!  
Chegou o momento de você colocar em prática tudo que aprendeu até aqui, criando uma classe, utilizando o constructor, propriedades e o this.

Você já construiu a classe personagem e agora o desafio dessa aula é construir a classe Mago. Essa classe será usada muito em breve nesse curso, então é muito importante que você não deixe de realizar esse desafio.

Para te auxiliar, a seguir colocarei algumas informações sobre a class Mago.

1) A classe Mago contará com 3 propriedades, são elas:

- elementoMagico
- levelMagico
- inteligencia

2) Essas propriedades devem ser pedidas nos parâmetros do construtor.

3) Não esqueça de utilizar o export para exportá-la e o this para associar a variável do parâmetro à propriedade da classe.

Opinião do instrutor

PASSO 1
É necessário criar o arquivo da classe, então dentro da pasta modules, eu crio o arquivo chamado mago.js.

PASSO 2
Dentro de mago.js, crio a classe, abro o bloco e eu exportarei esse módulo.

```JavaScript
export class Mago { 
}
```

PASSO 3
Dentro do bloco, eu declaro as três propriedades que foram passadas na instrução do desafio.

```JavaScript
export class Mago { 
   elementoMagico
   levelMagico
   inteligencia
}
```

PASSO 4
Agora só falta criar o construtor dessa classe, pedir por parâmetro e associar essas variáveis aos atributos da classe com o this.

```JavaScript
export class Mago { 
   elementoMagico
   levelMagico
   inteligencia

  constructor(elementoMagico, levelMagico, inteligencia) {
        this.elementoMagico = elementoMagico
        this.levelMagico = levelMagico
        this.inteligencia =  inteligencia
    }
}
```

PASSO 5
Agora, se você for até o index.js e importar o arquivo de mago na linha 1

```JavaScript
import { Mago } from "./modules/mago.js"
```

E criar uma nova instância para visualizar no console.

```JavaScript
console.log(new Mago('gelo', 7, 9))
```

Já temos esse novo objeto que foi criado.

### Aula 02 - O que aprendemos?

Nessa aula, você aprendeu como:

- Criar um Constructor para a Classe;
- Atributos que são definidos por parâmetros e fora dos parâmetros;
- Como renderizar uma instância na página;
- Model x View.

## Aula 03 - 

### Aula 03 -  - Vídeo 1
### Aula 03 -  - Vídeo 2
### Aula 03 -  - Vídeo 3
### Aula 03 -  - Vídeo 4
### Aula 03 -  - Vídeo 5
### Aula 03 -  - Vídeo 6
### Aula 03 -  - Vídeo 7
### Aula 03 -  - Vídeo 8
### Aula 03 -  - Vídeo 1
### Aula 03 -  - Vídeo 1
