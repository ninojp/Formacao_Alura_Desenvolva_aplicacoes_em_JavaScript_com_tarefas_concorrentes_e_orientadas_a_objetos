# JavaScript: manipulando objetos

## Aula 01 - Iniciando o Projeto

### Aula 01 - Apresentação - Vídeo 1

Transcrição  
Olá e boas vindas ao curso de JavaScript: manipulando objetos! Sou o instrutor Luan Alves que te acompanhará nessa jornada de estudos.

> Autodescrição: Sou um homem com cabelos curtos e cor de olhos castanhos escuros, uso barba curta, estou vestindo uma camiseta na cor ferrugem, meu tom de pele é branco e, atrás de mim, há uma luz de fundo na cor verde.

Neste curso, aprenderemos sobre objetos no JavaScript desenvolvendo o projeto Lista de Compras, feito para listarmos itens a serem comprados, como itens de mercado, feira ou Shopping por exemplo.

Vamos testar o projeto:

Tela do projeto "Lista de Compras" no navegador. O fundo é azul escuro na base e clareia conforme chega ao topo da tela. Ao centro, no topo da página, está um campo de texto retangular branco contendo o texto "Digite o item que deseja adicionar" escrito em cinza claro. Abaixo dele, centralizado também, está o botão retangular de cor turquesa e legenda "Salvar item" escrito em branco. Abaixo deste, há um retângulo grande que ocupa quase toda a parte central da tela e tem fundo branco. Alinhado à esquerda, está o título "Lista de compras" escrito em azul, seguido de dois itens da lista, "Laranja" e "Maçã", com opção de marcação vazia à esquerda, e ambos possuem um ícone de edição representado por um lápis sobre um quadrado, e um ícone de exclusão representado por uma lixeira cada um, alinhados à direita da área branca. Abaixo dos itens, está uma divisão feita com uma linha tracejada horizontal que separa essa grande área branca. Abaixo, está o título "Comprados" em azul, seguido de três itens listados e riscados com a opção de marcação preenchida, sendo "Chocolate", "Fermento" e "Tapioca". Todos os itens possuem um ícone de lixeira à direita de cada um também. Já fora da área branco, embaixo, está o escrito "Desenvolvido por Alura" em branco.

Poderemos adicionar algum item no campo de texto superior, como "Uva" por exemplo.

Clicando no botão "Salvar item", inseriremos a nova linha abaixo de "Maçã" e conseguiremos editar clicando no ícone de lápis". Com isso, poderemos mudar o nome para "Suco" por exemplo e, quando o ícone de lápis for substituído por um de disquete, basta clicar nele para salvarmos a alteração.

Também conseguiremos clicar no ícone de lixeira para deletar os itens, ou mudar os itens de lista, de "Lista de compras" para "Comprados" ao clicarmos no input de marcação ou checkbox ao lado esquerdo.

Iremos aprender bastante nesse projeto, e não trabalharemos apenas com o código; até o final do curso, o colocaremos em um site para utilizarmos e compartilharmos com as pessoas.

Em nossas aulas, aprenderemos:

- Métodos para comparar, clonar e editar objetos
- Manipulação de elementos no DOM
- Verificação de valores no JavaScript.

Porém, não abordaremos nenhum tema relativo à herança, classes, frameworks e bibliotecas, como Angular e React, por exemplo.

Nosso foco será em objetos literais.

O pré-requisito para acompanhar este conteúdo é ter conhecimentos em lógica de programação, funções e arrays.

Também traremos informações extras para nos incentivar ainda mais a estudar JavaScript.

Um relatório atual do GitHub, que é o maior repositório de projetos utilizado por pessoas programadoras mundialmente, informa que a linguagem JavaScript domina a maior parte dos projetos.

Isso significa que é de alto nível, pois do contrário ninguém usaria, além de que é grande geradora de vagas de emprego ao redor do mundo.

Já temos motivos suficientes para estudarmos JavaScript! Vamos adiante?

### Aula 01 - Preparando o ambiente: download do projeto

Desejo boas vindas ao curso Objetos JavaScript!

Vamos construir nosso aprendizado nessa jornada desenvolvendo o projeto Lista de Compras.

Você pode [baixar o arquivo zip inicial do projeto](https://github.com/alura-cursos/lista-de-compras/archive/refs/heads/projeto-base.zip), ou acessar os [arquivos no Github](https://github.com/alura-cursos/lista-de-compras/tree/projeto-base).

O editor de código utilizado neste curso é o [VSCode](https://code.visualstudio.com/), você também pode baixar a [extensão Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) utilizada no editor de código.

O nosso projeto vem com a parte de HTML e estilos prontos, para focarmos no que interessa neste curso, praticar a linguagem JavaScript.

Se, ao final desta atividade, houver alguma dúvida, não hesite em solicitar ajuda no fórum deste curso ou em nosso servidor no Discord. Estaremos sempre dispostos a ajudar você em cada passo, incentivando seu crescimento profissional e de toda comunidade de estudantes da Alura. Ficamos muito contentes em ajudar a solidificar o seu aprendizado, e se sinta livre para ajudar outras pessoas no fórum e no Discord. Lembre-se: a comunidade Alura é você quem faz!

### Aula 01 - Criando um objeto - Vídeo 2

Transcrição  
Boas vindas novamente! Neste curso, falaremos sobre objetos contextualizando com funções, métodos do JavaScript e manipulações de elementos no DOM.

Começaremos conhecendo o projeto disponibilizado na atividade anterior de "Preparando o ambiente" e já baixado, e o abriremos no VSCode, que é o editor de código que utilizaremos nas aulas.

Feito isso, notaremos a estrutura de pastas no menu lateral esquerdo da IDE, em que a pasta "assets" possui o arquivo style.css contendo todos os estilos CSS já prontos.

Abaixo deste, encontraremos o index.html com todo o código HTML do projeto pronto, e iremos apenas inserir elementos ao longo do curso.

O último arquivo que aparece na lista é o README.md contendo "colas" de códigos que usaremos também.

Por fim, conheceremos o main.js, que é o mais importante que usaremos. Nele, iremos "codar" todo o código JavaScript para podermos criar nosso sistema e aprender mais sobre objetos.

Os objetos servem para salvar informações.

Porém, já existem outros elementos que guardam dados no JavaScript, como os arrays por exemplo.

Para entendermos então o porquê de criarmos objetos, criaremos uma lista de arrays para compararmos a uma lista de objetos.

Na primeira linha, escreveremos a variável let com o nome listaDeCompras igual a um par de colchetes []. Dentro deles que representam um array, passaremos informações do tipo string para textos, que deverão estar sempre entre aspas simples.

Inseriremos itens de compras, como 'Arroz', 'Biscoito', 'Suco'. Com isso, teremos três elementos na lista.

```JavaScript
let listaDeCompras = ['Arroz', 'Biscoito', 'Suco']
```

Na introdução deste curso, explicamos a funcionalidade do projeto em que adicionaremos coisas no campo de texto e salvaremos para mostrarmos na tela. Também poderemos movimentar, editar e excluir itens.

Então, pegar esses elementos dentro de um array é bem complexo em um código grande, então conforme cresce, nossa dificuldade para referenciar todos os elementos também aumentará.

Com objetos, é mais simples referenciarmos um só elemento para ser manipulado. Faremos isso passando um objeto do tipo const chamado listaDeItens em seguida.

A diferença deste para um array é que colocaremos as chaves {} ao invés de colchetes da lista []. Com isso, conseguiremos salvar elementos passando um conjunto de chave e valor, ou seja, criaremos uma chave e atribuiremos um valor à ela.

Dentro das chaves do objeto, diremos que o primeiro item item1: do grupo de elementos guardado no objeto será um dado do tipo string, ou seja, de texto. Então também escreveremos 'biscoito' entre aspas simples.

Na linha seguinte, o segundo item item2: será 'Suco'.

```JavaScript
let listaDeCompras = ['Arroz', 'Biscoito', 'Suco']

const listaDeItens = {
    item1: 'biscoito',
    item2: 'Suco'
}
```

Nesta estrutura, criamos uma chave item1: que recebe o valor 'Biscoito'. Passando o cursor sobre esse primeiro item, aparecerá uma caixa dizendo que é uma string do tipo de texto.

Diferente das constantes em que usamos o sinal de igualdade = para atribuir um valor, em objetos digitaremos os dois pontos :.

Inclusive, é possível guardarmos números também. Escrevendo mais uma chave de quantidade1:, atribuiremos o valor 3, e em quantidade2: na linha seguinte, teremos 4.

Se passarmos o cursor do mouse por cima de quantidade2:, o VSCode indicará que ele guarda um dado do tipo number, ou seja, tipo número.

```JavaScript
let listaDeCompras = ['Arroz', 'Biscoito', 'Suco']

const listaDeItens = {
    item1: 'biscoito',
    item2: 'Suco'
    quantidade1: 3,
    quantidade2: 4
}
```

Poderemos criar uma funcionalidade para referenciarmos só o elemento dentro do objeto para podermos manipular.

Na linha seguinte, ainda dentro da listaDeItens, adicionaremos mostrarItens: com o valor function() e uma sintaxe padrão de função abrindo e fechando parênteses e chaves.

Dentro das {}, escreveremos um alert() chamando uma string entre aspas simples: 'Comprei '. Após o espaço, faremos uma concatenação digitando o sinal de adição + seguido de uma propriedade do objeto, que neste caso será listaDeItens.quantidade1.

Concatenação: Junção de tipos de dados.

Inserindo mais um sinal de mais para concatenarmos outra junção, a qual será composta por um tipo de dado objeto do JavaScript em listaDeItens.quantidade1 junto com outro dado do tipo string em 'Comprei ', colocaremos aspas simples novamente em seguida.

Escreveremos ' pacotes de ', seguido de outra junção com + e listaDeItens.item1. Neste caso, estamos criando um alert() para imprimirmos algo na tela, e iremos testar a função.

Para chamarmos uma que foi criada fora de um objeto, iremos à ultima linha do código de main.js e escreveremos o nome listaDeItens seguido de .mostrarItens().

Salvaremos e voltaremos à página no navegador para vermos o que aparecerá na tela.

```JavaScript
let listaDeCompras = ['Arroz', 'Biscoito', 'Suco']

const listaDeItens = {
    item1: 'biscoito',
    item2: 'Suco'
    quantidade1: 3,
    quantidade2: 4,
    mostrarItens: function() {
        alert('Comprei ' + listaDeItens.quantidade1 + ' pacotes de ' + listaDeItens.item1)
    }
}

listaDeItens.mostrarItens()
```

Teremos uma caixa de diálogo em que "127.0.0.0.1:5500 diz":

Comprei 3 pacotes de biscoito

Então já aprendemos que, dentro de objetos, conseguiremos guardar dados do tipo texto, número e até mesmo funções.

Dentro deles, guardaremos qualquer informação da linguagem JavaScript. Inclusive trazendo funcionalidades para o objeto.

Analisando o que fizemos, já aprendemos muitas coisas interessantes. Porém, em nosso projeto, não seremos nós que inseriremos os dados impressos na tela, afinal receberemos os inputs de quem estará usando o sistema.

Portanto, apagaremos todos os elementos dentro das chaves de listaDeItens e a linha de .mostrarItens(). Construiremos uma lista array de objetos para os manipularmos.

Substituiremos const por let e as chaves {} por colchetes []. Também apagaremos todo o listaDeCompras da primeira linha do arquivo, obtendo apenas:

```JavaScript
let listaDeItens = []
```

Já abordamos conceitos muito importantes sobre objetos e sua construção. A seguir, aprenderemos a obter dados da pessoa usuária para criarmos objetos dinamicamente.

### Aula 01 - Para saber mais: adicionando propriedades

A linguagem JavaScript é do tipo orientada a objetos, isso significa que, objetos são a parte central dessa linguagem, dessa forma, é importante entender como manipular as informações que um objeto guarda.

Já os objetos nos permitem trazer para o mundo da programação elementos do mundo real, transformando-os em dados, e, a partir disso, ser possível trabalhar com esses dados.

Estrutura de um objeto literal

Criamos objetos literais e descobrimos como é formada sua estrutura:

```JavaScript
const cliente = { nome: ‘Mariana’ }

//variável nomeDoObjeto = { chave: valor}
```

O objeto literal no JavaScript é formado por uma coleção de propriedades. Uma propriedade é formada pelo conjunto chave + seu valor, no exemplo acima temos a propriedade nome, que é o conjunto da chave nome+ valor ’Mariana’.

Adicionando propriedades em um objeto

Vamos supor que seja necessário adicionar propriedades em um objeto. Existem diferentes notações que nos possibilitam chegar a esse objetivo, a mais comum é a de ponto.

Vamos conferir nesse exemplo:

```JavaScript
const cliente = { nome: ‘Mariana’ }

cliente.idade = 35

console.log(cliente)
```

O console irá retornar:

```JavaScript
{
   nome: 'Mariana', 
   idade: 35
}
```

É possível conferir que foi adicionado a chave idade, com valor 35, que anteriormente não existia.

No exemplo acima foi utilizado a notação de ponto, e existe também a notação de colchetes.

Vamos conferir como utilizar a notação de colchetes para adicionar propriedades em um objeto:

```JavaScript
cliente = {
   nome: 'Mariana', 
   idade: 35
}

cliente['genero'] = 'Feminino'

console.log(cliente)
```

O console irá retornar:

```JavaScript
{
   nome: 'Mariana', 
   idade: 35, 
   genero: 'Feminino'
}
```

Note que a chave foi passada entre aspas, ou seja, no formato de string. Com isso, podemos chegar à conclusão que chaves de objetos também podem ser dados do tipo string. Como no exemplo abaixo:

```JavaScript
cliente = {
   'nome': 'Mariana', 
   'idade': 35,
   'sexo': 'Feminino'
 }
 ```

Agora você já sabe como transformar uma informação em um dado, e salvá-lo em um objeto!

Na próxima atividade deixei um desafio para você poder exercitar o que aprendeu até aqui!

### Aula 01 - Desafio: método de ponto ou colchetes

Um desafio para você fixar bem o conteúdo, vamos utilizar o objeto criado na última atividade:

```JavaScript
cliente = {
   nome: 'Mariana', 
   idade: 35,
   genero: ‘Feminino’
}
```

1- Insira com método de ponto ou colchetes, uma propriedade com valor: Pernambuco.

2- Crie um alerta que retorne na tela a frase: Olá, meu nome é Mariana e moro no estado de Pernambuco., referenciando os valores de suas propriedades.

Dica: utilize o método de ponto ou colchetes, para inserir uma nova propriedade ao objeto.

Opinião do instrutor

Resultado do desafio com notação de colchetes:

```JavaScript
cliente = {
    nome: 'Mariana', 
    idade: 35,
    genero: 'Feminino'
 }

cliente['estado'] = 'Pernambuco'

 alert('Olá, meu nome é ' + cliente.nome + ' e moro no estado de ' + cliente.estado + '.')
 ```

Resultado do desafio com notação de ponto:

```JavaScript
cliente = {
    nome: 'Mariana', 
    idade: 35,
    genero: 'Feminino'
 }

cliente.estado = 'Pernambuco'

 alert('Olá, meu nome é ' + cliente.nome + ' e moro no estado de ' + cliente.estado + '.')
```

### Aula 01 - Para saber mais: objetos com var, let ou const

Neste [Link tem um vídeo](https://youtu.be/EFoEqHIwxqY), do youtuber Marco Bruno explica a diferença entre var, let e const, e porque é indicado que objetos nunca iniciem a partir de uma variável do tipo: var.

### Aula 01 - Para saber mais: deletando e editando propriedades

Em um sistema, muitas vezes será necessário deletar ou editar uma informação guardada em objetos.

A linguagem JavaScript nos permite editar e deletar propriedades de objetos já criados.

Tendo o exemplo utilizado em aula como base:

```JavaScript
const listaDeCompras = {
    compra1: "Arroz",
    compra2: "Feijão",
    compra3: "Biscoito"
}
```

Deletando chave e valor de objetos  
Vamos supor que eu queira deletar a chave compra2 e o seu valor ”Feijão”, do objeto listaDeCompras:

```JavaScript
delete listaDeCompras.compra2    
```

Utilizando o console para conferir o resultado:

```JavaScript
console.log(listaDeCompras)
```

O console irá retornar: {compra1: 'Arroz', compra3: 'Biscoito'}

Editando o valor de uma chave  
E se for preciso apenas editar o valor de alguma chave? Por exemplo, alterar o valor da chave compra3, que é ”Biscoito”, para ”Bolacha”.

É possível da seguinte forma:

```JavaScript
listaDeCompras.compra3 = "Bolacha"
```

Utilizando o console para conferir o resultado:

```JavaScript
console.log(listaDeCompras.compra3)
```

O console irá retornar: Bolacha

Diferente de deletar que é necessário o comando delete, para editar o valor de uma chave é preciso apenas passar o nome do objeto + chave, seguido de sinal de igual + o novo valor que deseja substituir.

E se eu quiser deletar um objeto por completo do sistema ou alterar o seu nome?  
Nesse caso, não é permitido alterar o nome de um objeto, ou deletá-lo, uma vez já declarado. Uma alternativa seria criar um clone do objeto, copiando as propriedades que ele guarda. Dessa forma, serão criados dois objetos no sistema. Você pode aprender na prática como clonar objetos no vídeo a seguir! :)

### Aula 01 - Clonando objetos - Vídeo 3

Transcrição  
Nesta aula, iremos trabalhar bastante no código e aplicaremos algumas funcionalidades ao nosso sistema.

É muito interessante que usemos as informações do curso para criarmos um projeto à parte, o que ajudará bastante na fixação do conteúdo.

Continuando, iremos criar uma interatividade com a página, neste caso com o campo de texto contendo o placeholder da frase "Digite o item que deseja adicionar" e o botão de "Salvar item".

Passaremos algum valor de input e salvaremos clicando no botão. Isso possibilitará a criação de objetos, já que estamos trabalhando neles do ponto de vista de front-end.

Portanto, sempre estaremos criando as funcionalidades da nossa página.

No VSCode, abriremos o arquivo index.html e analisaremos a implementação do campo de texto. Na tag `<input>` do `<form>` no `<main>` dentro do `<body>`, há a o tipo type="text" que é o campo de texto e, logo abaixo, há o `<button>` de type igual a "submit" da nossa página.

Ambos estão dentro de `<form>`. Precisaremos pegar esses três elementos, `<form>`, `<input>` e `<button>`, e levá-los para o arquivo main.js.

Neste, iremos à terceira linha e criaremos a variável do tipo const chamada form, a qual será igual a document.getElementById(). Com isso, pegaremos a tag de `<form>` por sua identificação id, que neste caso é "form-itens".

Todas as informações que obtemos do HTML para o JavaScript precisarão ser colocadas entre aspas duplas para que a linguagem entenda que se trata do tipo texto.

Entre os parênteses, adicionaremos "form-itens" para pegarmos o input do campo de texto.

Na linha seguinte, criaremos uma outra variável do tipo const chamada itensInput também sendo igual a document.getElementById(). Já sabemos que o id de `<input>` do arquivo HTML é "receber-item", então colocaremos essa identificação dentro dos parênteses também entre aspas duplas.

Feito isso, criaremos uma interatividade com a pagina a partir do clique com o botão. Duas linhas adiante ainda em main.js, escreveremos form.addEventListener(), em que o verbo em inglês "listen" significa "escutar" em português.

Então estaremos "ouvindo" a pessoa usuária e criando a interatividade através do botão.

Em seguida, abriremos o arquivo index.html e, em `<button>`, veremos que seu type é "submit", então a interatividade será deste tipo de "submeter".

Dentro dos parênteses de .addEventListener(), passaremos "submit" seguido de vírgula para depois passarmos o que queremos que aconteça com a funcionalidade usando uma função.

Após a vírgula, inseriremos function () e abriremos as chaves {} em seguida. Dentro desses parênteses da função, passaremos o evento e o chamaremos dentro do bloco com .preventDefault() na sequência, o qual serve para impedir que algo aconteça.

```JavaScript
let listaDeItens = []

const form = document.getElementById("form-itens")
const itensInput = document.getElementById("receber-item")

form.addEventListener('submit', function (event) {
    event.preventDefault()
})
```

Salvaremos e testaremos a página novamente.

No campo de texto do topo, escreveremos "Soja" como exemplo e clicaremos no botão.

Feito isso, a informação ficou persistente e se mantém no campo, mas não a perdermos já é o que queríamos. Substituindo o input por "Suco" e clicando em "Salvar item", a mesma coisa acontecerá.

Nosso próximo passo será pegar esse dado, transformá-lo em um objeto e salvá-lo em uma lista.

Voltando ao arquivo main.js, iremos até a última linha após o fim do bloco de form.addEventListener() e criaremos uma função para salvar os itens chamada salvarItem(), e abriremos as chaves.

Dentro dela, criaremos a nova variável const que receberá o valor do campo de texto, chamada comprasItem sendo igual a itensInput.

Porém, não queremos pegar a variável itensInput só, e sim o valor que está guardando. Então digitaremos .value em seguida.

Depois, ainda dentro da função salvarItem() criaremos o objeto de fato para salvar os dados dentro dele. Abriremos chaves apenas e, dentro delas, colocaremos o valor: recebendo comprasItem.

Salvaremos este objeto na listaDeItens, que é o array que criamos anteriormente. Portanto, antes da primeira chave que abrimos contendo o valor:, o escreveremos.

Como queremos inserir um objeto dentro da lista de itens, poderíamos fazer do mesmo jeito em que atribuímos valor às variáveis com o sinal de igualdade.

Para sabermos se está funcionando mesmo, iremos ao fim deste bloco de chaves do listaDeItens e aplicaremos um console.log() recebendo a lista para imprimirmos a função na tela do Console.

Mas queremos que a função salvarItem() seja chamada quando clicarmos no botão. Para isso, a chamaremos como uma segunda função dentro de .addEventListener().

```JavaScript
let listaDeItens = []

const form = document.getElementById("form-itens")
const itensInput = document.getElementById("receber-item")

form.addEventListener("submit", function (event) {
    event.preventDefault()
    salvarItem()
})

function salvarItem() {
    const comprasItem = itensInput.value;

    listaDeItens = {
        valor: comprasItem
    }

    console.log(listaDeItens)
}
```

Vamos testar nosso código. Salvaremos, abriremos a página e a atualizaremos.

Clicaremos sobre a tela com o botão direito do mouse e escolheremos a opção "Inspecionar" para abrirmos a aba lateral direita e clicarmos em "Console" no topo dela, e então exibirmos o print do console.log().

No campo de texto da aplicação, digitaremos "Suco" por exemplo e clicaremos no botão de "Salvar item". Feito isso, imprimiremos {valor: 'Suco'} na aba lateral do Console.

Como é uma lista de itens, adicionaremos mais coisas ao campo de texto, como "Arroz", "Feijão" e "Frango", sempre clicando no botão de salvar a cada um.

Feito isso, imprimiremos {valor: 'Suco'}, {valor: 'Arroz'}, {valor: 'Feijão'} e {valor: 'Frango'}. Notaremos que o mesmo objeto está sendo printado em cada linha e está sendo atualizado, porém está substituindo o valor atribuído à chave valor:.

Não é isso que queremos, pois precisamos criar novos objetos com novos valores para guardarmos em um array. Teremos um problema, pois teremos que criar novos objetos e não só substituir o valor.

De volta ao main.js, estamos atribuindo o objeto ao array com o sinal de igualdade em listaDeItens =. Isso não é o ideal para este caso, e usaremos um método do JavaScript que clona objetos novos e os salvam na lista.

Este método se chama .push(). Para o atribuirmos, usaremos o ponto final . após listaDeItens, e depois passaremos alguns parâmetros. Nos parênteses, englobaremos todo o objeto entre as chaves.

```JavaScript
//código omitido

function salvarItem() {
    const comprasItem = itensInput.value;

    listaDeItens.push({
        valor: comprasItem
    })

        console.log(listaDeItens)
}
```

Voltando à página da aplicação, digitaremos "Suco" no campo de texto e clicaremos no botão para salvar. Também adicionaremos "Refrigerante" e, na aba lateral direita em "Console", veremos que a sintaxe printada foi diferente da anterior, mas analisaremos isso mais adiante.

Inseriremos mais itens, como "Pêra" e "Arroz" para vermos a diferença da impressão.

[{...}]

(2) [{...}, {...}]

(3) [{...}, {...}, {...}]

(4) [{...}, {...}, {...}, {...}]

Abrindo a ultima atualização do array clicando na seta de sua linha para expandir as informações, veremos que possui quatro elementos.

```JavaScript
//omitido
(4) [{...}, {...}, {...}, {...}]
    0: {valor: 'Suco'}
    1: {valor: 'Refrigerante'}
    2: {valor: 'Pêra'}
    3: {valor: 'Arroz'}
//omitido
```

Há quatro objetos diferentes porque seu identificador é pelo índice, em que o primeiro começa com zero, o segundo objeto é 1:, o terceiro é 2: e o quarto é 3:.

Se clicarmos na seta de expansão ao lado do índice 0: por exemplo, expandiremos a linha e teremos o protótipo [[Prototype]]: sendo um Object de fato.

Clicando ainda na seta que expande a linha de [[Prototype]]:, visualizaremos uma série de propriedades que existem por padrão quando criamos um objeto literal do JavaScript.

Não trabalharemos com elas neste curso, pois está mais relacionado à classes e heranças, e não abordaremos isso em nossas aulas. Nosso foco será mais sobre a manipulação de objetos no DOM e criação de objetos literais.

Portanto, já aprendemos a criar e clonar objetos. Toda vez que salvarmos algo, iremos atualizar a lista de arrays impressa no Console.

Se mantivermos o mesmo valor "Arroz" no campo de texto por exemplo, clicarmos em "Salvar Item" consecutivas vezes e expandirmos a linha da última atualização impressa, veremos que sempre printará objetos novos, mas com o mesmo valor: 'Arroz'.

É mais interessante que nosso sistema fosse inteligente o suficiente para entender que itens iguais estão sendo guardados e avisar a pessoa usuária dessa situação.

A seguir, resolveremos essa questão de elementos duplicados.

### Aula 01 - Comparando objetos - Vídeo 4

Transcrição  
Em nosso sistema, já é possível guardar objetos e salvá-los em uma lista de itens na listaDeItens que criamos anteriormente.

Nesta aula, falaremos sobre comparação de objetos.

Para sabermos se há elementos repetidos ou não, iremos ao main.js e faremos uma verificação quando executarmos a função de salvarItem(). Na linha seguinte a comprasItem, escreveremos const e daremos o nome de checarDuplicado para deixarmos claro o que faremos com ela.

Como iremos conferir dentro da lista de itens, igualaremos a função a listaDeItens. Também usaremos um método do JavaScript que percorre toda a lista para fazermos essa verificação de duplicados chamado .some().

Dentro dos parênteses de .some(), criaremos a funcionalidade com a arrow function ou =>, ou seja, uma função anônima abrindo e fechando parênteses novamente, seguido de um sinal de igual = e de "maior que" >.

Receberemos o elemento dentro do parâmetro de () e, depois da arrow function, o enviaremos para dentro da função escrevendo elemento.valor, já que iremos conferir se a chave valor guarda o mesmo item ou não.

Para fazermos uma comparação verificando tanto o valor quanto o tipo de dado, usamos três sinais de igualdade seguidos ===;

Para compararmos apenas os valores, escrevemos dois sinais ==;

Para fazermos uma atribuição de valor, usamos apenas um =.

Neste caso, usaremos os três ===, que é inclusive uma forma de fazermos uma verificação melhor. Compararemos elemento.valor a comprasItem, que é o valor do objeto.

Criaremos uma condicional em que, se a comparação for verdadeira ou true, significa que os elementos estão repetidos, e se for falso ou false, quer dizer que o item é novo e poderemos salvar.

Em seguida, aplicaremos um if() que se traduz como "se" para dizer a condição que esperamos e abriremos chaves {}. Em caso positivo, ou seja, true, passaremos checarDuplicado dentro dos parênteses para que algo aconteça.

Neste caso, dentro das chaves, imprimiremos com alert() com a mensagem "Item já existe". Após o fechamento das chaves, ainda na mesma linha, escreveremos else e abriremos {} novamente.

Neste else que seria o "caso contrário", queremos que o objeto seja guardado normalmente na lista. Englobaremos todo o bloco de listaDeItens.push() até a linha anterior ao console.log().

```JavaScript
let listaDeItens = []

const form = document.getElementById("form-itens")
const itensInput = document.getElementById("receber-item")

form.addEventListener('submit', function (event) {
    event.preventDefault()
    salvarItem()
})

function salvarItem() {
    const comprasItem = itensInput.value;
    const checarDuplicado = listaDeItens.some((elemento) => elemento.valor === comprasItem)

    if (checarDuplicado) {
        alert("Item já existe.")
    } else {
         listaDeItens.push({
            valor: comprasItem,
        })
    }

        console.log(listaDeItens)
}
```

Com isso, em const checarDuplicado, geraremos apenas dois tipos de valores, verdadeiro ou falso, chamado booleano.

Se guardar o valor true, irá alertar que já existe, e se for false irá guardar o objeto na lista, e depois poderemos trabalhar mais com eles.

Testaremos este código abrindo nossa página no navegador com a aba lateral direita de "Console" aberta. No campo de texto do topo, escreveremos "Suco" novamente e clicaremos no botão de "Salvar item".

Se clicarmos novamente para adicionar o mesmo item, receberemos uma caixa de diálogo com a mensagem "Item já existe" que adicionamos no alerta.

Já estamos conseguindo fazer uma verificação com sucesso.

Porém, se escrevermos "Suco" com letra maiúscula, salvarmos e depois "suco" com letra minúscula e salvarmos de novo, imprimiremos dois objetos iguais no Console, apenas com essa diferença.

Portanto, nossa verificação ainda não está com boa qualidade, pois precisamos confirmar também se as letras são maiúsculas ou minúsculas.

De volta ao main.js no VSCode, transformaremos todos os elementos comparados em letra maiúsculas para solucionar esse problema. Para isso, o JavaScript tem o método .toUppercase().

O adicionaremos após elemento.valor e depois de comprasItem que estão na comparação de .some().

```JavaScript
//código omitido
function salvarItem() {
    const comprasItem = itensInput.value;
    const checarDuplicado = listaDeItens.some((elemento) => elemento.valor.toUpperCase() === comprasItem.toUpperCase())
//código omitido
}
```

Testando novamente na página, escreveremos "feijão" com "f" minúsculo no campo de texto, salvaremos o item, depois digitaremos "Feijão" com "F" maiúsculo e tentaremos salvar de novo.

Feito isso, imprimiremos a mensagem de que o item já existe, como esperávamos.

Já conseguiremos fazer uma verificação com uma qualidade bem melhor.

Não estamos comparando os objetos em si, mas sim os valores que guardam, pois o JavaScript tem uma característica sobre comparação de objetos. No Console, se abrirmos e fecharmos chaves printando um objeto, digitarmos três sinais de igualdade === seguido de um par de chaves {} de novo, o retorno será false.

{} === {}

< false

Neste caso, estamos fazendo uma comparação entre objetos idênticos, e mesmo assim nos retorna falso.

Quando criamos um objeto', estamos separando um espaço na memória do sistema, e quando criamos um outro, separamos outra parte da memória. Com isso, o JavaScript entende que são elementos diferentes.

A mesma coisa acontece se compararmos arrays, por exemplo:

[] === []

< false

Para compararmos objetos, devemos sempre pegar o valor dos objetos para compará-los, e assim conseguiremos ter true ou false com certeza.

Já aprendemos a fazer comparação de objetos, mas ainda estamos salvando-os apenas na lista de arrays.

Precisaremos printar essa lista de itens de volta na própria tela e não só no Console.

A seguir, aprenderemos sobre a funcionalidade de manipular objetos no DOM.

### Aula 01 - Estrutura de objetos - Exercício

No JavaScript, vimos que objetos são estruturas de dados compostas por chave e valor, que nos ajudam a representar algo da vida real. Observando esses conceitos, assinale o objeto que possui o conjunto de sintaxe e semântica corretos.

Resposta:

```JavaScript
const dadosDeUsuario = {
  nome: "Rafaela dos Santos Soares",
  agencia: 2158,
  conta: 525,
  saldo: 123.13,
  eMail: "rafaela.soares@email.com.br",
  mostraDados: function () {
    alert("Seja bem-vinda " + dadosDeUsuario.nome + "." )
  }
}
dadosDeUsuario.mostraDados()
```

Resultado no pop up: ”Seja bem-vinda Rafaela dos Santos Soares.”

> Parabéns! O nome do objeto representa os dados que ele guarda, e o nome da função representa o que ela realmente faz. A sintaxe do código está correta, retornando o que foi proposto: “Rafaela Soares dos Santos”.

### Aula 01 - O que aprendemos?

- Nessa aula, você aprendeu como:
- Definiu o que é objetos em JavaScript;
- Aprendeu na prática como criar objetos;
- Aprendeu como editar e deletar valores de objetos;
- Utilizou o conjunto de objetos, métodos e funções do JavaScript para criar funcionalidades no projeto;
- Aprendeu a diferença entre var, let e const;
- Aprendeu como criar objetos a partir das informações passadas pela pessoa usuária.

## Aula 02 - Métodos e Escopo Léxico

### Aula 02 - Definindo métodos - Vídeo 1

Transcrição  
Boas-vindas à mais um vídeo do curso de Objetos no Javascript. Nele teremos a missão de mostrar na tela os objetos guardados no arranjo listaDeItens.

Para isso, acessaremos o arquivo index.html. Nele identificaremos a ul na qual queremos que os elementos apareçam.

```HTML
<ul class="mx-2 borda-lista" id="lista-de-itens">
</ul>
```

Vamos referenciá-la pelo seu id: lista-de-itens.

Retornaremos ao arquivo main.js, abaixo da const itensInput, chamaremos a variável ulItens do tipo const, que será igualada ao document.getElementById(""). Entre os parênteses adicionaremos o id lista-de-itens.

```JavaScript
const itensInput = document.getElementById("receber-item")
const ulItens = document.getElementById("lista-de-itens")
```

Precisaremos criar uma função para exibir os itens. Para isso, acessaremos a linha abaixo das chaves da function salvarItem e nela declararemos a function mostrarItem(). Entre as chaves dela chamaremos a nossa listaDeItens junto ao método .forEach(). Este último manipula elementos dentro de um arranjo — que, no nosso caso, são objetos.

O .forEach() verificará cada elemento da lista de itens e nos trará um retorno. Este tipo de método é chamado de callback. Dentro dos parênteses desse método chamaremos o parâmetro () => {}. Esta é a sintaxe de uma função anônima ou função seta (arrow function, em inglês). Utilizaremos a função anônima para indicar que o bloco de código a ser digitado será utilizado apenas neste contexto — ou seja, essa função não será chamada em lugar nenhum.

Entre os parênteses da função anônima, adicionaremos um elemento e um index, ambos separados por vírgula. Eles nos permitirão acessar tanto o objeto quanto o seu índice, para dessa forma localizarmos exatamente o objeto a ser mostrado na lista. Entre as chaves da mesma função, adicionaremos o ulItens.innerHTML para inserir os elementos na variável que representa a nossa ul de elementos comprados. À sua direita, adicionaremos o sinal += seguido de crases (``).

```JavaScript
function salvarItem() {
// Código omitido
}

function mostrarItem() {
    listaDeItens.forEach(() => {
        ulItens.innerHTML += ``
    })
}
```

Entre as crases passaremos os elementos do HTML, os quais podemos consultar no arquivo README.md que já está dentro do projeto. Vamos clicar nele por meio do explorador e copiar o código abaixo, que está localizado na seção "Código modelo da li 'Lista de compras'".

```HTML
    <li class="item-compra is-flex is-justify-content-space-between" data-value="">
        <div>
            <input type="checkbox" class="is-clickable" />
            <input type="text" class="is-size-5" value=""/>
        </div>
        <div>
            <i class="fa-solid fa-trash is-clickable deletar"></i>
        </div>
    </li>
```

Voltaremos ao arquivo main.js e colaremos o conteúdo copiado entre as crases do ulItens.innerHTML += ``.

```JavaScript
function mostrarItem() {
    listaDeItens.forEach(() => {
        ulItens.innerHTML += `
        <li class="item-compra is-flex is-justify-content-space-between" data-value="">
        <div>
            <input type="checkbox" class="is-clickable" />
            <input type="text" class="is-size-5" value=""></input>
        </div>
        <div>
            <i class="fa-solid fa-trash is-clickable deletar"></i>
        </div>
        </li>
        `
    })
}
```

Temos a estrutura da `<li>` que mostrará os objetos na tela. Em sua primeira linha, adicionaremos entre as aspas duplas de data-value o índice do objeto. Para isso, utilizaremos uma Template String: ${} e dentro das suas chaves passaremos o index, ou seja, o parâmetro que utilizamos anteriormente.

```html
    <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
```

Acessaremos o `<input>` do texto e adicionaremos entre as aspas de value o valor do objeto que queremos comprar: ${elemento.valor}.

```html
    <input type="text" class="is-size-5" value="${elemento.valor}">
```

A variável ulItens já está guardando o valor dos elementos anteriores. Precisamos resetá-la quando ela for executada dentro do forEach(). Para isso, abriremos uma linha vazia entre as linhas function mostrarItem(){ e listaDeItens.forEach(() => {. Nela chamaremos ulItens.innerHTML a qual receberá uma string vazia: ''. Em seguida pressionaremos "Enter" para separar esse reset do resto da função.

Podemos acessar o código completo da função abaixo.

```JavaScript
function mostrarItem() {
    ulItens.innerHTML = ''

    listaDeItens.forEach(() => {
        ulItens.innerHTML += `
        <li class="item-compra is-flex is-justify-content-space-between" data-value="">
        <div>
            <input type="checkbox" class="is-clickable" />
            <input type="text" class="is-size-5" value="${elemento.valor}">
        </div>
        <div>
            <i class="fa-solid fa-trash is-clickable deletar"></i>
        </div>
    </li>
    `
    })
}
```

A função mostrarItem() funcionará após o clique no "submit", portanto precisamos chamá-la dentro dele. Buscaremos o form.addEventListener() {} acima da function salvarItem(). Entre suas chaves, logo abaixo do salvarItem(), adicionaremos a função mostrarItem().

```JavaScript
form.addEventListener("submit", function (evento) {
    evento.preventDefault()
    salvarItem()
    mostrarItem()
})

function salvarItem() {
// Código omitido
}
```

Retornaremos à aplicação aberta no navegador para testar nossa função. No campo de texto escreveremos "suco" e pressionaremos "Enter". Neste momento, veremos que o item "suco" aparecerá na seção "Lista de compras", com um quadrado de check à sua esquerda e um ícone de lixeira à sua direita. Se digitarmos "manga", "arroz" ou qualquer outro elemento, eles serão inseridos sem problemas.

A seguir, utilizaremos o `<input>` do checkbox para movimentar nossos objetos da lista de compras para a lista de itens comprados. Nos vemos no próximo vídeo.

### Aula 02 - Para saber mais: escopo léxico

Existem três tipos de escopo que você deve conhecer no JavaScript que são: Escopo de funções, escopo de blocos e escopo léxico.

Vamos abordar agora o Escopo léxico e entender seu funcionamento a partir dos exemplos a seguir:

Escopo global e escopo local

Um elemento de escopo global significa que foi declarado no primeiro nível de código, ou seja, ele não se encontra dentro de nenhuma outra função.

```JavaScript
function mostraFilme() {             // Exemplo de função de escopo global
    const filme = { titulo: 'Titanic'}  // Exemplo de objeto de escopo local
    console.log(filme.titulo)         // Exemplo de objeto de escopo local
}

mostraFilme()
```

Esse código retorna no console: Titanic.

No exemplo acima a função mostraFilme() se encontra no escopo global, e o objeto filme, se encontra no escopo local da função mostraFilme(). É importante entender que métodos do JavaScript também possuem escopo, como log(), forEach(), e while().

Por que é importante entender a diferença entre escopo global e local?

Vamos acrescentar mais elementos no nosso exemplo:

```JavaScript
const filme = { 
    titulo: 'Wakanda',
}

function declaraFilme() {
    console.log(filme.titulo)
}

function mostraFilme() {
    const filme = { titulo: 'Titanic'}
    console.log(filme.titulo)
}

mostraFilme()
declaraFilme()
```

Esse código retorna no console:

Titanic

Wakanda

É possível perceber que a função declaraFilme() recebe o objeto filme com a propriedade + chave titulo ‘Wakanda’ que foi declarado fora do seu escopo.

Já a função mostraFilme() recebe o objeto filme com propriedade + chave titulo ’Titanic’, que está declarado dentro do seu escopo.

Com isso, podemos observar que:

- Objetos podem ser declarados com o mesmo nome se estiverem em escopos diferentes.
- Funções podem acessar objetos que estiverem no seu interior.
- Se uma função estiver chamando um objeto que não está declarado no seu interior, esse objeto será buscado nos escopos acima(como no - caso da função declaraFilme()).
- Os apontamentos acima possuem o mesmo resultado substituindo objetos por variáveis.

Agora vamos conferir o código abaixo, neste caso, a função mostraFilme() está chamando no console filme.titulo, e também guarda uma nova função chamada novoFilme(). e nesta função está declarado o objeto filme:

```JavaScript
function mostraFilme() {
    console.log(filme.titulo)

    function novoFilme() {
        const filme = { 
            titulo: 'Wakanda',
        }
    }
}
mostraFilme()
```

Este código retorna um erro de referência no console: “Uncaught ReferenceError: filme is not defined”. O aviso informa que o objeto filme não conseguiu ser acessado quando a função mostraFilme() foi executada.

Com isso, é possível chegar a mais algumas conclusões:

Objetos podem ser acessados fora de uma função, ou dentro de uma função, mas nesse último caso não é possível ser acessado caso esteja dentro de outro escopo no seu interior.
A conclusão acima tem o mesmo resultado substituindo objetos por variáveis.
Escopo léxico nada mais é que funções alinhadas estarem sujeitas a buscar objetos ou variáveis no escopo acima delas.

Entender sobre escopos na linguagem JavaScript é importante para construção de códigos no qual seus blocos estejam interligados, o que acontece na maioria dos casos.

### Aula 02 - Interação com usuário - Vídeo 2

Transcrição  
O nosso projeto já exibe os objetos na lista de compras. Nossa próxima etapa é manipular esses objetos no DOM. Quando houver um clique no checkbox à esquerda dos objetos, os itens devem ser movidos para a lista de itens comprados.

Neste vídeo faremos o evento de clique no `<input>` do checkbox. Vamos retornar ao arquivo main.js e acessar a linha desse `<input>`, localizada acima do `<input>` de texto.

```JavaScript
function mostrarItem() {
// Código omitido
    listaDeItens.forEach(() => {
// Código omitido
            <input type="checkbox" class="is-clickable" />
            <input type="text" class="is-size-5" value="${elemento.valor}"></input>
// Código omitido
    })
}
```

Abaixo dos parênteses de listaDeItens.forEach(() => {}) criaremos a variável const inputsCheck para referenciar esse `<input>`. Já que teremos uma lista de elementos e cada elemento terá o seu input, o nosso inputsCheck receberá um document.querySelectorAll() que selecionará todos os inputs do tipo checkbox. Entre os seus parênteses, adicionaremos o parâmetro input[type="checkbox"] entre aspas simples. Este comando selecionará o checkbox por meio da sua tag no HTML.

Pressionaremos "Enter" duas vezes e nessa nova linha criaremos o evento de clique, onde chamaremos o inputsCheck.forEach(). Esse método de callback será utilizado para cada um dos inputs. Entre os seus parênteses adicionaremos como parâmetros uma função anônima através do parâmetro i seguido de => e chaves {}.

```JavaScript
        inputsCheck.forEach(i => {

        })
```

Dentro do bloco de chaves de inputsCheck.forEach() {} adicionaremos o i que faz referência aos inputs, seguido de .addEventListener(), cujos parênteses receberão o parâmetro click entre aspas simples e a função anônima () => {} para gerar um retorno com esse evento de clique. Os dois parâmetros serão separados por vírgula.

Dica: A função anônima possui menos caracteres e por isso é a função mais utilizada em situações onde sua reutilização não é necessária.

Entre os parênteses dessa função anônima adicionaremos o evento. Já entre as suas chaves adicionaremos um console.log("Fui clicado!") para printar um texto no console temos que adicionar o texto entre aspas.

Abaixo temos o código completo do evento de clique.

```JavaScript
function mostrarItem() {
// Código omitido
    listaDeItens.forEach(() => {
// Código omitido
            <input type="checkbox" class="is-clickable" />
            <input type="text" class="is-size-5" value="${elemento.valor}"></input>
// Código omitido
    })
        const inputsCheck = document.querySelectorAll('input[type="checkbox"]')
        inputsCheck.forEach(i => {
            i.addEventListener('click', (evento) => {
                console.log("Fui clicado!")
            })
        })
}
```

Vamos testar o nosso código retornando à página da aplicação aberta no navegador. Incluiremos na lista de compras os itens "arroz", "feijão" e "chocolate". Em seguida, clicaremos com o botão direito na tela e dentro do menu aberto selecionaremos a opção "Inspecionar". Na aba aberta à direita vamos acessar a barra de menus superior e selecionar o menu "Console". Voltaremos à tela da aplicação e clicaremos no checkbox do arroz. Neste momento, será exibido o retorno abaixo no console:

Fui clicado!

Se clicarmos várias vezes nos checkboxes da lista de compras, surgirá uma contagem de cliques no console, à esquerda do retorno. Com isso percebemos que os inputs estão sendo lidos como únicos. Contudo, queremos saber em qual input estamos clicando.

A seguir, implementaremos essa diferenciação dos inputs clicados.

### Aula 02 - Índice do objeto - Vídeo 3

Transcrição  
Acessaremos novamente o arquivo main.js. Já que é possível clicar no input do checkbox, poderemos localizar qual objeto está sendo clicado. Identificamos um objeto através do seu índice, portanto precisamos, através de um clique no checkbox, percorrer toda a `<li>` até encontrarmos a linha que armazena o índice do objeto no interior do data-value:

```JavaScript
   <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
```

Percorreremos os elementos utilizando o console.log() que implementamos anteriormente para testar o código. Vamos acessá-lo dentro dos parênteses de i.addEventListener().

Entre os parênteses de console.log(), por sua vez, vamos substituir o texto "Fui clicado!" pelo comando evento.target.parentElement.parentElement.

```JavaScript
i.addEventListener('click', (evento) => {
    console.log(evento.target.parentElement.parentElement)
```

Através deste comando utilizaremos o evento de clique para gerar um retorno. O target nos retorna um alvo, enquanto o parentElement retorna o elemento pai que está sendo clicado. O pai do checkbox é a `<div`> e o pai da `<div`> é a `<li>`. Já que queremos o pai do pai (ou seja, a `<li>` que é pai de todos os elementos), adicionamos o comando parentElement duas vezes.

```JavaScript
function mostrarItem() {
// Código omitido
    })

        const inputsCheck = document.querySelectorAll('input[type="checkbox"]')
        inputsCheck.forEach(i => {
            i.addEventListener('click', (evento) => {
                console.log(evento.target.parentElement.parentElement)
            })
        })
}
```

Vamos testar o nosso código retornando à página da aplicação com o console aberto no navegador. Incluiremos o item "Chocolate" na lista de compras e clicaremos no checkbox. Neste momento o emulador exibirá uma `<li>` com o objeto que estamos clicando, cujo data-value é "0".

```JavaScript
<li class="item-compra is-flex is-justify-content-space-between" data-value="0">
</li>
```

Adicionaremos mais três itens na lista: "Feijão", "Macarrão" e "Alface". O "Macarrão" é o terceiro objeto da lista. Se clicarmos no seu checkbox veremos que o seu índice é "2". Isso confirma que estamos clicando exatamente no objeto através do input checkbox.

Voltaremos ao código. Localizamos o objeto, contudo queremos selecionar o seu data-value, ou seja, o seu índice. Para isso, retornaremos ao interior dos parênteses do console.log(), onde adicionaremos um .getAttribute('data-value') à direita do getParentElement. Dessa forma teremos acesso ao valor do índice do objeto em que estamos clicando.

```JavaScript
function mostrarItem() {
// Código omitido
    })
        const inputsCheck = document.querySelectorAll('input[type="checkbox"]')
        inputsCheck.forEach(i => {
            i.addEventListener('click', (evento) => {
                console.log(evento.target.parentElement.parentElement.getAttribute('data-value'))
            })
        })
}
```

A partir dessa configuração, faremos a manipulação dos elementos em DOM. Nos vemos no próximo vídeo.

### Aula 02 - Alterando o valor do objeto - Vídeo 4

Transcrição  
Conseguimos mostrar no console qual objeto está sendo clicado através do seu índice. Com isso, podemos guardar esse objeto numa variável para manipulá-lo depois.

Acessaremos o VS Code ainda aberto no arquivo main.js. Retornaremos ao interior dos parênteses de i.addEventListener(), onde substituiremos o console.log() por const valorDoElemento, que receberá os mesmos parâmetros através do sinal =.

```JavaScript
function mostrarItem() {
// Código omitido
        inputsCheck.forEach(i => {
            i.addEventListener('click', (evento) => {
                const valorDoElemento = evento.target.parentElement.parentElement.getAttribute('data-value')
            })
        })
}
```

O próximo passo é criar um método para utilizar as chaves do objeto, permitindo a manipulação dos elementos no DOM. Para isso, buscaremos o nosso objeto comprasItem entre os parênteses de listaDeItens.push().

```JavaScript
// Código omitido
listaDeItens.push({
    valor: comprasItem
})
```

Adicionaremos vírgula no final à direita de comprasItem e pressionaremos "Enter". Na linha nova criaremos uma nova chave denominada checar, a qual será relacionada ao nosso check. Essa chave armazenará o valor false.

```JavaScript
// Código omitido

listaDeItens.push({
    valor: comprasItem,
    checa: false
})
```

Criaremos um método para alterar o valor dessa chave de false para true conforme clicamos no input. Dessa forma poderemos manipular os elementos no DOM.

Para isso, abaixo da variável const valorDoElemento, chamaremos a listaDeItens[valorDoElemento].checar. Este comando nos permite acessar a chave diretamente pelo objeto, identificando-o pelo seu índice guardado em valorDoElemento. Para alterarmos a chave de false para true, adicionaremos o sinal = seguido de evento.target.checked, onde checked é um método próprio do `<input>` checkbox.

Quando selecionamos o checkbox ele se torna checked. Quando o desselecionamos, o seu valor é alterado para check. Dessa forma também conseguiremos alterar o valor da chave checar.

```JavaScript
function mostrarItem() {
// Código omitido
        inputsCheck.forEach(i => {
            i.addEventListener('click', (evento) => {
                const valorDoElemento = evento.target.parentElement.parentElement.getAttribute('data-value')
                listaDeItens[valorDoElemento].checar = evento.target.checked
            })
        })
}
```

Vamos conferir o valor da chave checar. Para isso, copiaremos o comando listaDeItens[valorDoElemento].checar. Abaixo dessa linha criaremos um console.log() que receberá entre parênteses o comando que copiamos como parâmetro.

```JavaScript
function mostrarItem() {
// Código omitido
        inputsCheck.forEach(i => {
            i.addEventListener('click', (evento) => {
                const valorDoElemento = evento.target.parentElement.parentElement.getAttribute('data-value')
                                listaDeItens[valorDoElemento].checar = evento.target.checked
                                console.log(listaDeItens[valorDoElemento].checar)
            })
        })
}
```

Vamos testar o nosso código retornando à página da aplicação com o console aberto no navegador. No campo de texto adicionaremos o elemento "Caju". Vamos conferir se temos a chave checada, clicando no checkbox de "Caju" e observando o console. Após o clique, veremos no console o retorno true. Se clicarmos novamente, veremos o retorno false abaixo do primeiro. Isso indica que conseguimos alterar o valor da chave.

Estamos aprendendo a utilizar a chave de um objeto para manipular os elementos no DOM. A seguir, finalizaremos o `<input>` checkbox.

### Aula 02 - Manipulando objetos no DOM - Vídeo 5

Transcrição  
Finalizaremos a funcionalidade do `<input>` checkbox.

Para isso, retornaremos ao VS Code do arquivo index.html e buscaremos a `<ul>` da nova lista onde os elementos devem aparecer.

```html
<section class="pb-2">
                <h2 class="has-text-link has-text-weight-bold is-size-4 ml-2">Comprados</h1>
                <ul class="mx-2 borda-lista" id="itens-comprados">
                </ul>
</section>
```

Vamos referenciá-la pelo seu id que é itens-comprados.

Retornando ao arquivo main.js, posicionaremos o cursor no final da linha const ulItens = document.getElementById("lista-de-itens") e pressionaremos "Enter". Na linha nova chamaremos o nosso id criando a variável ulItensComprados do tipo const, que receberá um document.getElementById(). Entre os parênteses adicionaremos o id itens-comprados entre aspas duplas.

```JavaScript
let listaDeItens = []
const form = document.getElementById("form-itens")
const itensInput = document.getElementById("receber-item")
const ulItens = document.getElementById("lista-de-itens")
const ulItensComprados = document.getElementById("itens-comprados")
// Código omitido
```

Acessaremos o interior das chaves da função mostrarItem(), onde já aparecem os elementos na `<ul>` de itens. Buscaremos entre suas chaves o método listaDeItens.forEach((elemento, index) => {}).

Dentro desse método e acima da linha ulItens.innerHTML +- criaremos um if() {} else {}. As chaves do else {} deverão envolver toda a `<li>` de itens.

Entre as chaves do if() {} chamaremos a ulItensComprados.innerHTML seguida do sinal += e de um bloco entre crases (``).

```JavaScript
function mostrarItem(){
// Código omitido
    listaDeItens.forEach((elemento, index) => {
        if() {
        ulItensComprados.innerHTML += `
        `    
        } else {
        ulItens.innerHTML += `
    <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
        <div>
            <input type="checkbox" checked class="is-clickable" />
            <input type="text" class="is-size-5" value="${elemento.valor}"> </input>
        </div>
        <div>
            <i class="fa-solid fa-trash is-clickable deletar"></i>
        </div>
    </li>
    `
        }
})
```

Vamos inserir os elementos HTML na ulItensComprados. Para isso, acessaremos o arquivo README.md, onde copiaremos o código localizado na seção "Código modelo da li 'Comprados'".

```JavaScript
<li class="item-compra is-flex is-justify-content-space-between" data-value="">
    <div>
        <input type="checkbox" checked class="is-clickable" />
        <span class="itens-comprados is-size-5"></span>
    </div>
    <div>
        <i class="fa-solid fa-trash is-clickable deletar"></i>
    </div>
</li>
```

Colaremos esse conteúdo entre as crases de `ulItensComprados.innerHTML += ``.

```JavaScript
function mostrarItem(){
// Código omitido

    listaDeItens.forEach((elemento, index) => {
        if() {
        ulItensComprados.innerHTML += `
        <li class="item-compra is-flex is-justify-content-space-between" data-value="">
        <div>
            <input type="checkbox" checked class="is-clickable" />
            <span class="itens-comprados is-size-5"></span>
        </div>
        <div>
            <i class="fa-solid fa-trash is-clickable deletar"></i>
        </div>
    </li>
        `    
        } else {
// Código omitido
        }
})
```

Passaremos os dados do nosso objeto no atributo data-value, localizado dentro da tag de abertura da <li>, informando o index do objeto dentro de uma Template String:

```JavaScript
`${index}`
```

```JavaScript
function mostrarItem(){
// Código omitido

    listaDeItens.forEach((elemento, index) => {
        if() {
        ulItensComprados.innerHTML += `
        <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">

// Código omitido

}
```

Entre a abertura e o fechamento da tag `<span>` passaremos outra Template String com o elemento.valor que guarda o item a ser comprado.

```JavaScript
${elemento.valor}
```

```JavaScript
function mostrarItem(){
// Código omitido

    listaDeItens.forEach((elemento, index) => {
        if() {
// Código omitido

        <div>
            <input type="checkbox" checked class="is-clickable" />
            <span class="itens-comprados is-size-5">${elemento.valor}</span>
        </div>
// Código omitido

}
```

Passaremos um parâmetro para o if(), adicionando entre seus parênteses um elemento.checar. Dessa forma, o if() vai conferir se a chave checar possui o valor true. Se sim, os elementos serão printados na `<ul>` de itens comprados. Se for false, eles aparecerão na `<ul>` de itens.

```JavaScript
function mostrarItem(){
// Código omitido

    listaDeItens.forEach((elemento, index) => {
        if(elemento.checar) {
// Código omitido
```

Já criamos a nossa lógica. A função mostrarItem() deve ser executada quando houver um clique `<input>` check. Chamaremos essa função dentro do inputsCheck.forEach(), já que o seu addEventListener() possui um escopo fechado.

No final do arquivo main.js, abaixo da linha listaDeItens[valorDoElemento].checar = evento.target.checked, adicionaremos a função mostrarItem().

```JavaScript
//Código omitido

inputsCheck.forEach(i => {
        i.addEventListener('click', (evento) => {
            valorDoElemento = evento.target.parentElement.parentElement.getAttribute('data-value')
            listaDeItens[valorDoElemento].checar = evento.target.checked
            mostrarItem()
        })
    })
}
```

Resetaremos o valor da ulItensComprados. Entre as chaves da função mostrarItem(){}, abaixo da linha ulItens.innerHTML = '', adicionaremos o ulItens.innerHTML recebendo uma string vazia.

```JavaScript
function mostrarItem(){
    ulItens.innerHTML = ''
    ulItensComprados.innerHTML = ''
    // Código omitido

}
```

Vamos testar o nosso código retornando à página da aplicação aberta no navegador. Adicionaremos à lista de compras os itens "Suco" e "Uva". Clicaremos nos dois checkboxes de "Suco" e de "uva" e veremos ambos os itens serem tachados e descerem para a lista "Comprados" Isso significa que conseguimos manipular os elementos no DOM.

Podemos melhorar a experiência da pessoa usuária. Quando clicamos em "Salvar Item", seria ideal que o campo de texto continuasse selecionado. Seria interessante se ele também fosse resetado.

Voltaremos ao VS Code. Conseguimos manter o foco no campo de texto adicionando o comando itensInput.focus() entre as chaves do form.addEventListener("submit", function (evento) {}).

```JavaScript
form.addEventListener("submit", function (evento) {
    evento.preventDefault()
    salvarItem()
    mostrarItem()
    itensInput.focus()
})
```

Para resetar o campo, apagaremos o console.log() localizado abaixo da função salvarItem() {}. Em seu lugar adicionaremos um itensInput.value = ''. Dessa forma, sempre que o itensInput for executado passaremos a ele um valor vazio.

```JavaScript
salvarItem() {
// Código omitido

}
    itensInput.value = ''
}
```

Retornaremos ao navegador para testar. Se clicarmos no campo de texto, escrevermos "Laranja" e clicarmos no botão "Salvar Item", o campo de texto continuará selecionado e o seu conteúdo será limpo.

Conseguimos realizar várias funcionalidades no nosso projeto. Contudo, se atualizarmos a página, todos os itens que incluímos desaparecem.

A seguir, melhoraremos o projeto implementando a funcionalidades abaixo:

- deletar o objeto a partir do clique no ícone de lixeira;
- editar os elementos;
- manter os elementos na tela.
- Nos vemos lá.

### Aula 02 - Conhecendo escopos - Exercpicio

Nesta aula você aprendeu como os escopos influenciam no acesso de objetos na linguagem JavaScript, além de que é possível criar objetos e variáveis com o mesmo nome, estando em escopos diferentes.

Utilizando do conhecimento adquirido, assinale a alternativa que retorne no console o título: Casa do Dragão.

Uma dica, caso tenha alguma dificuldade em entender sobre os escopos nos códigos abaixo, você pode copiá-los e testá-los no editor de código, ou no próprio console do navegador.

Resposta:

```JavaScript
function mostraSeries() {
    const serie = {
        titulo: "Casa do Dragão"
    }
    function mostraNovaSerie() {
        console.log(serie.titulo)

        function novaSerie() {
            const serie = {
                titulo: "Grey's Anatomy"
            }
        }
    }
    mostraNovaSerie()
}
mostraSeries()
```

> O chamado do objeto no console.log declarado na função mostraNovaSerie() busca o objeto no seu escopo, e como não encontra, busca um escopo anterior, localizando o objeto que está declarado na função mostraSeries().

## Aula 03 - Deletando e Editando Objetos

### Aula 03 - Projeto da aula anterior

Aqui você pode [baixar o arquivo zip da aula 02](https://github.com/alura-cursos/lista-de-compras/archive/refs/heads/aula2.zip) ou acessar os [arquivos no Github](https://github.com/alura-cursos/lista-de-compras/tree/aula2).

### Aula 03 - Deletando objetos - Vídeo 1

Transcrição  
Nessa aula criaremos a funcionalidade de deletar objetos a partir do clique no ícone de lixeira, que fica ao final da linha do ícone, no lado direito da tela. Atualmente ao clicarmos nesse ícone, nada acontece.

Então ao abrirmos o código main.js, observamos que a lixeira está declarada na linha 56 e possui a classe deletar. Vamos referenciar essa classe, porque não podemos repetir IDs no HTML, mas classes sim. Portanto, vamos referenciar pela classe.

Na linha 73, criaremos uma variável deletarObjetos recebendo a nossa classe, com o querySelectorAll(), porque são vários ícones de lixeira. E nos parâmetros do querySelectorAll() vamos passar a classe ".deletar", entre aspas.

```JavaScript
const deletarObjetos = document.querySelectorAll(".deletar")
```

Nós já criamos a funcionalidade de localiza o objeto através do clique no inputsCheck. Portanto nosso próximo passo é copiar todo o inputsCheck, ou seja, selecionar da linha 65 a linha 71, pressionar "Ctrl + C" e, na linha 75, pressionar "Ctrl + V". Assim conseguimos reutilizar esse código.

Vamos substituir o inputsCheck, que está no começo da linha 75, por deletarObjetos. Além disso, vamos apagar a linha 78, que altera o valor da chave checar, porque ela já foi utilizada. No lugar dela, vamos criar a funcionalidade para deletar objetos.

```JavaScript
//código suprimido
    const deletarObjetos = document.querySelectorAll(".deletar")
    deletarObjetos.forEach(i => {
        i.addEventListener('click', (evento) => {
            valorDoElemento = evento.target.parentElement.parentElement.getAttribute('data-value')
            listaDeItens.splice(valorDoElemento,1)
            mostrarItem()
        })
    })
```

Para deletar os objetos, usamos o splice(), que é um método multifuncional, porque com ele conseguimos:

- Deletar objetos
- Substituir um objeto por outro
- Adicionar novos objetos

Nesse caso, vamos usá-lo para deletar objetos, então nos parâmetros do splice() passamos primeiro o que queremos deletar, no caso o valorDoElemento, que é onde o objeto é identificado através do clique. Em seguida, escrevemos uma vírgula (,) e passamos a quantidade de elementos que queremos deletar a partir do elemento. Como só queremos deletar um objeto, passamos (valordoElemento,1).

Dessa forma criamos o método para deletar objetos sem precisarmos escrever muitos códigos. Então vamos voltar para a página da nossa lista de compras e adicionar um novos itens, no caso, "Pera" e "Maracujá".

Em seguida, ao clicarmos no ícone de lixeira que aparece ao final da linha de "Pera", vemos que esse item é excluído da lista. Feito isso, vamos marcar a caixa de seleção ao lado esquerdo da palavra "Maracujá", para movê-lo para os itens "Comprados". Ao clicarmos no ícone de lixeira novamente, notamos que esse item também foi excluído, então está funcionando nos dois casos.

Conseguimos fazer mais coisas com o Splice, então vamos nos aprofundar no conhecimento desse método. Portanto, vamos voltar ao código do main.js no VS Code.

Na linha 78, dentro dos parâmetro do splice(), podemos escrever uma vírgula após o 1 e, depois dela, passarmos qual elemento queremos colocar no lugar daquele que apagamos. Por exemplo:

```JavaScript
listaDeItens.splice(valorDoElemento,1,"Limão")
```

Assim substituiremos o item que excluirmos por "Limão" na tela. Para testar, vamos até nossa aplicação, adicionaremos o item "Pera" novamente. Ao clicarmos no ícone da lixeira, no lugar de "Pera" ficou escrito "undefined".

Isso aconteceu porque substituímos um objeto por uma string, então nossa substituição não funcionou corretamente. Para dar certo, precisamos que "Limão" seja um objeto, então vamos deixá-lo entre chaves e definir o valor e o checar.

```JavaScript
listaDeItens.splice(valorDoElemento,1,{valor: "Limão", checar: false})
```

Agora que criamos a estrutura do nosso objeto, vai dar certo. Então vamos atualizar nossa aplicação, limpando a lista, adicionar o item "Maracujá" e depois clicar no ícone da lixeira. Ao fazermos isso, onde estava escrito "Maracujá" na lista, mudou para "Limão". Não queremos fazer isso, mas é importante entendermos esse funcionamento do splice().

Com o Splice também podemos apenas adicionar novos elementos, sem fazer substituições. Para isso, no segundo elemento do parâmetro, onde determinamos a quantidade de itens que queremos apagar, definimos como zero (0), assim não apagamos nenhum elemento.

```JavaScript
listaDeItens.splice(valorDoElemento,0,{valor: "Limão", checar: false})
```

Agora vamos voltar na página da nossa aplicação, adicionar o elemento "Pera" e, quando clicamos no ícone de lixeira, acima da "Pera" aparece o "Limão". Quando clicamos na lixeira do "Limão", acima dele aparece outro "Limão".

Portanto criamos um método que adiciona um novo "Limão" sempre que clicamos na lixeira. Assim entendemos todas as formas de trabalhar com o splice().

Vamos voltar para o main.js para corrigir a linha 78, ou seja, substituir o zero (0) por um (1) e, depois dele, apagar as outras informações dentro do parâmetro.

```JavaScript
listaDeItens.splice(valorDoElemento,1)
```

Ainda restam alguns desafios para fazermos. Precisamos editar o elemento depois que adicionamos ele a nossa lista. Sendo assim, no próximo vídeo vocês aprenderão um método para editar objetos.

### Aula 03 - Para saber mais: recortando objetos

No vídeo passado, você aprendeu como utilizar o método splice(), e é importante não confundir com outro método com nome parecido, o slice().

Que tal entender como o slice() funciona?

Vamos supor que no projeto que estamos desenvolvendo, o Lista de Compras exista um orçamento máximo, sendo possível comprar apenas alguns itens da lista. O slice() poderia nos ajudar a selecionar quais itens poderiam ser comprados. Veja como:

O slice() recorta uma cópia do array original e salva esse corte em um novo array, para isso, é possível passar dois parâmetros:

O primeiro parâmetro determina a partir de onde os elementos serão recortados:

```JavaScript
let listaDeItens = [
    {
        item1: 'Maracujá'
    },
    {
        item2: 'Manga'
    },
    {
        item3: 'Uva'
    },
    {
        item4: 'Suco'
    },
    {
        item5: 'Alface'
    },
    {
        item6: 'Feijão'
    },
]
novaLista = listaDeItens.slice(2)
console.log(novaLista)
```

O console irá retornar:

```JavaScript
{item3: 'Uva'}
{item4: 'Suco'}
{item5: 'Alface'}
{item6: 'Feijão'}
```

O segundo parâmetro determina até onde essa fatia será recortada:

```JavaScript
let listaDeItens = [
    {
        item1: 'Maracujá'
    },
    {
        item2: 'Manga'
    },
    {
        item3: 'Uva'
    },
    {
        item4: 'Suco'
    },
    {
        item5: 'Alface'
    },
    {
        item6: 'Feijão'
    },
]
novaLista = listaDeItens.slice(2, 4)
console.log(novaLista)
```

O console irá retornar:

```JavaScript
{item3: 'Uva'}
{item4: 'Suco'}
```

Passando valores negativos para o segundo parâmetro, será contado de forma decrescente quantos elementos ficarão de fora do recorte, ou seja, será contado de trás pra frente:

Passando valor 2 no primeiro parâmetro, e valor -2 no segundo parâmetro. O primeiro parâmetro identificará em ordem crescente a partir de onde os itens serão recortados('Maracujá', 'Manga'), já o segundo parâmetro com valor negativo -2, irá contar de forma decrescente quantos elementos ficarão de fora do recorte('Feijão', 'Tapioca'), ou seja, será contado de trás pra frente:

```JavaScript
let listaDeItens = [
    {
        item1: 'Maracujá'
    },
    {
        item2: 'Manga'
    },
    {
        item3: 'Uva'
    },
    {
        item4: 'Suco'
    },
    {
        item5: 'Alface'
    },
    {
        item6: 'Feijão'
    },
    {
        item7: 'Tapioca'
    },
]
novaLista = listaDeItens.slice(2,-2)
```

O console irá retornar:

```JavaScript
{item3: 'Uva'}
{item4: 'Suco'}
{item5: 'Alface'}
```

OBS: O slice() não altera os valores do array original, ele salva os itens selecionados em um novo array. Este método também pode ser utilizado para selecionar caracteres de uma string, ou qualquer outro conjunto de elementos salvos em um array.

### Aula 03 - Identificando índice de objetos - Vídeo 2

Transcrição  
Para ser possível editar os objetos, falta na tela um ícone para clicarmos e habilitar essa edição, que vamos habilitar nessa aula. No caso, usaremos dois ícones, que estão no arquivo README.md, na linha 38.

```JavaScript
<i class="fa-regular fa-floppy-disk is-clickable"></i><i class="fa-regular is-clickable fa-pen-to-square editar"></i>
```

Copiaremos esse código e vamos voltar para o main.js. Após o `<div>` da linha 55, vamos pressionar "Enter" uma vez e, na linha 56, vamos colar esses ícones que copiamos. Eles ficarão logo acima do ícone de deletar e dentro do ulItensComprados.innerHTML.

```JavaScript
//código suprimido
function mostrarItem(){
        ulItens.innerHTML = ''
        ulItensComprados.innerHTML += `
    <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
        <div>
            <input type="checkbox" checked class="is-clickable" />  
            <span class="itens-comprados is-size-5">${elemento.valor}</span>
        </div>
        <div>
            <i class="fa-regular fa-floppy-disk is-clickable"></i><i class="fa-regular is-clickable fa-pen-to-square editar"></i>
            <i class="fa-solid fa-trash is-clickable deletar"></i>
        </div>
    </li>
```

Voltando para nossa Lista de Compras, ao adicionarmos um item, como "Água", notamos que ao final da linha temos dois ícones antes da lixeira: o primeiro é um ícone de disquete e segundo é um quadrado com um lápis sobre ele. Nós desenvolveremos uma funcionalidade para que, ao clicarmos no ícone de lápis, habilitemos a edição e quando clicarmos no de disquete nós salvamos a edição.

Outra questão que precisamos pontuar é que, ao clicarmos na caixa de seleção do item "Água", ele é movido para lista de comprados, onde esses dois ícones que adicionamos não aparecem. Isso porque não faz sentido editarmos um ícone depois que ele foi comprado.

Então para editarmos os objetos precisamos criar o evento de clique para localizarmos o índice do objeto. Sendo assim, voltaremos para o arquivo main.js.

Depois do fechamento dos colchetes ([]) da linha 1, vamos pressionar "Enter" e, na linha 2, criaremos uma variável do tipo let chamada itemAEditar.

```JavaScript
let listaDeItens = []
let itemAEditar 
//código suprimido
```

Criamos uma variável do tipo let, porque a princípio ela não terá nenhum valor. Não podemos criar uma variável do tipo constante (const) sem atribuirmos nenhum valor, porque isso resultaria em erro.

Enviaremos o índice do objeto para essa variável itemAEditar, assim conseguiremos editar os objetos. Faremos isso através do evento de clique, então na linha 85 criaremos a const editarItens com esse evento:

```JavaScript
//código suprimido
const editarItens = document.querySelectorAll(".editar")

    editarItens.forEach(i => {
        i.addEventListener('click', (evento) => {
            itemAEditar = evento.target.parentElement.parentElement.getAttribute('data-value')
            mostrarItem()
        })
    })
```

Nos parâmetros o .querySelectorAll() passamos como parâmetro o "editar" para chamarmos o ícone de edição. Em seguida, para criar o evento de clique, copiaremos o código do deletarObjetos, da linha 77 a 83.

Vamos colar na linha 87 e fazer as edições necessárias para reutilizá-lo. Portanto trocaremos o nome de deletarObjetos para editarItens, apagaremos a linha 90, onde codamos o splice(), e na linha 89, ao invés de valorDoElemento, chamaremos a itemAEditar para passarmos o índice do objeto.

```JavaScript
//código suprimido
    const editarItens = document.querySelectorAll(".editar")
    editarItens.forEach(i => {
        i.addEventListener('click', (evento) => {
            itemAEditar = evento.target.parentElement.parentElement.getAttribute('data-value')
            mostrarItem()
            console.log(itemAEditar)
        })
    })
```

Na linha 91 codamos um console.log(itemAEditar) para testarmos se conseguimos localizar o elemento. Então vamos voltar para o navegador onde nosso projeto está aberto e abrir o Console.

Em seguida, vamos adicionar o item "Água" à lista de compras e clicar no ícone de lápis, que representa o "editar". No Console aparece o "0", representando o ícone do objeto, ou seja, conseguimos acessá-lo.

Vamos adicionar mais elementos à lista:

- Água
- Suco
- Uva
- Laranja

Após adicionarmos mais itens na lista, e com o Console ainda aberto, notamos que quando clicamos no ícone de lápis, conseguimos retornar o índice de cada objeto.

Agora que conseguimos acessar o índice de cada objeto na lista através do clique, nosso próximo passo será criar uma função para editar esses objetos. Faremos isso no próximo vídeo.

### Aula 03 - Editando no DOM - Vídeo 3

Transcrição  
O próximo passo é criar uma função para salvar a edição. Escreveremos ela na linha 97 do arquivo main.js.

```JavaScript
function salvarEdicao() {
    const itemEditado = document.querySelector()
}
```

Então criamos a função salvarEdicao(). Nela temos o itemEditado que receberá o índice do objeto que queremos atualizar, guardado o itemAEditar, e o valor do input, ou seja, o texto que queremos substituir.

Como obteremos esses valores através de tags HTML, usaremos as crases ( ``). Para obtermos a variável itemAEditar usaremos uma template string (${}), e para obtermos o texto, usaremos o input[]. Por fim, vamos testar o código com um console.log(itemEditado.value) e, para não nos confundirmos, apagaremos o console.log(itemAEditar) na linha 91.

```JavaScript
function salvarEdicao() {
    const itemEditado = document.querySelector(`[data-value"${itemAEditar}" input[type="text"]`)
    console.log(itemEditado.value)
}
```

Observação: o .value em itemEditado.value se refere à propriedade value do input text, que é item do texto que estamos obtendo. Portanto o value, nesse caso, não se refere ao valor da chave do objeto, tanto que um está em português (valor) e outro em inglês (value).

Nós executamos a função salvarEdicao quando o ícone de disquete é clicado. Então voltaremos na linha 57 para chamar essa função no ícone correspondente.

```JavaScript
//código suprimido

<div>
    <button onClick="salvarEdicao()"><i class="fa-regular fa-floppy-disk is-clickable"></i></button><i class="fa-regular is-clickable fa-pen-to-square editar"></i>
    <i class="fa-solid fa-trash is-clickable deletar"></i>
</div>
```

Então envolvemos o ícone de disquete com a tag `<button></button>` e adicionamos a função salvarEdicao no clique desse botão. Sendo assim, já podemos testar nosso código.

Com nossa aplicação aberta, abriremos o Console e vamos adicionar um novo elemento na lista, no caso, "Água". Ao clicarmos no ícone com o lápis, habilitamos a edição do item no input, por exemplo, podemos apagar "Água" e escrever "Suco".

Nós vamos enviar esse valor para o itemEditar ao executarmos função salvarEdicao, ou seja, quando clicamos no ícone de disquete. Ao fazermos isso, o valor do item muda para "Suco" na lista de compras e a palavra "Suco" aparece no Console do navegador. Dessa forma alteramos de "Água" para "Suco".

Porém só atualizamos esse valor da variável itemEditado, e não no objeto. No próximo vídeo aprenderemos a atualizar esse valor no objeto.

### Aula 03 - Array de objetos

Aprendemos que em um array de objetos o índice inicia a partir de 0, porém sua posição inicia a partir de 1. Supondo que em um array de objetos chamado de veiculos, são guardados dados contendo nomes de modelos de veículos. Adicione novos objetos a partir da posição 3, sem substituir por nenhum dos outros objetos que já estão no array.

Marque a alternativa que possibilita chegar nesse objetivo:

Resposta:  
> veiculos.splice(2,0, {veiculo3: "Bicicleta"}, {veiculo4: "Automóvel"})

Passando como primeiro parâmetro 2, é indicado que serão adicionados novos elementos a partir da posição seguinte, ou seja, posição 3. O segundo parâmetro determina quantos elementos serão substituídos pelos novos, neste caso 0, já que o objetivo é apenas adicionar novos elementos. E o terceiro parâmetro são quais serão os novos elementos a serem adicionados no array.

### Aula 03 - Editando objetos - Vídeo 4

Transcrição  
Para ser possível atualizar a lista de objetos, vamos chamar a listaDeItens na linha 99 e o console.log(listaDeItens) na linha 100.

```JavaScript
function salvarEdicao() {
    const itemEditado = document.querySelector(`[data-value"${itemAEditar}" input[type="[text"]`)
    console.log(itemEditado.value)
    listaDeItens[itemAEditar].valor = itemEditado.value
    console.log(listaDeItens)
}
```

E para referenciar o item que queremos editar, passamos o itemAEditar, que é o índice, seguido de .valor. E atribuímos o itemEditado.value, ou seja, o valor de itemEditado, que é o novo texto.

Temos outra questão para resolver: o itemAEditar precisa que seu valor seja sempre omitido quando for executado. Isso porque ele guarda um índice e, se editarmos mais de um elemento, ele ficará com o índice antigo, gerando um problema. Para isso, ao final da linha 100 vamos pressionar "Enter" e na linha 101, vamos codar:

```JavaScript
itemAEditar = -1
```

Não existe nenhum índice de objeto que começa com o número negativo, os objetos começam a partir do zero. Quando declaramos itemAEditar = -1, ele não se refere a nenhum objeto.

Também precisamos chamar a função mostrarItem para ela ser executada enquanto salvamos a edição. Por fim, vamos comentar o console.log(itemEditado.value), na linha 98, para conferirmos apenas a listaDeItens pelo console.log(listaDeItens).

Voltando para nossa aplicação no navegador, vamos abrir o Console. Vamos adicionar à nossa Lista de compras o "Suco". Em seguida, vamos clicar no ícone de lápis, que é o de editar e alterar de "Suco" para "Arroz". Ao clicarmos no ícone de disquete para salvar, aparece nossa lista no Console e, dessa forma, notamos que conseguimos salvar a alteração.

[{...}]

0: {valor: 'Arroz', checar: false}

length: 1

[[Prototype]]: Array(0)

Clicando novamente no ícone de editar, vamos trocar de "Arroz" para "Feijão" e clicar no ícone de salvar. Novamente a lista atualizada aparece no nosso Console, mostrando que conseguimos salvar.

[{...}]

0: {valor: 'Feijão', checar: false}

length: 1

[[Prototype]]: Array(0)

Então conseguimos mudar a informação na chave valor. Sabemos que conseguimos substituir porque nas duas listas temos o mesmo objeto apresentado, já que ambos têm o índice zero (0). Portanto é o mesmo objeto e conseguimos substituir o seu valor.

Ainda podemos observar mais alguns aspectos para melhorar a usabilidade da nossa página. Já que estamos na escola de Front-end, também precisamos nos preocupar com a usabilidade.

Por exemplo, quem utiliza a página não vai saber que precisa clicar primeiro no ícone com o lápis e depois no ícone de disquete. É interessante deixarmos apenas um ícone por vez.

Além disso, o input está habilitado o tempo todo. É interessante o habilitarmos somente depois clicar no ícone de lápis, quando habilitamos a edição.

Vamos resolver esses problemas a seguir.

### Aula 03 - Comparando e modificando valores - Vídeo 5

Transcrição  
Para resolver os problemas de usabilidade relacionados à edição dos itens, que são os ícones de disquete, o com o lápis e o input text habilitado, vamos precisar localizar esses elementos no arquivo main.js.

O input está declarado na linha 54. Então, antes do fechamento da `<input>`, precisamos adicionar uma template string para fazer uma comparação, resolvendo essa questão.

Primeiramente vamos fechar a tag, adicionando o sinal de maior que (>) antes do `</input>` para fechar a tag, porque ficou faltando.

```JavaScript
//código suprimido
<input type="text" class="is-size-5" value="${elemento.valor}"></input>`
```

Ainda na linha 54, antes de fechar a tag `<input>`, usaremos a template string (${}) para comparar se o index é diferente (!=) do itemAEditar. Se não for diferente (?), passaremos o disabled (desabilitado), uma propriedade que impede que o input seja editado. Se for diferente (:), substituímos o disabled por uma string vazia (''), para o input ser editado.

```JavaScript
//código suprimido
`<input type="text" class="is-size-5" value="${elemento.valor}" ${index != itemAEditar ? 'disabled' : ''}>`
```

Observação: Passamos o 'disabled' entre aspas por se tratar de um dado do tipo HTML.

Nesse código, o itemAEditar está vazio, a princípio, e só recebe o index do elemento como valor quando o ícone de lápis é clicado, para editar o item. Quando o index e o itemAEditar têm o mesmo valor, podemos habilitar o input para ser editado.

Após o `</div>` da linha 55 vamos pressionar "Enter" para deixar um espaço entre as divs. Depois, na linha 58, precisamos configurar para mostrar ou o ícone de lápis, ou o ícone de disquete. Sendo assim, usaremos outra vez o ternário.

Observação: o ternário é um tipo de condicional, como o if/else, mas é feito em apenas uma linha.

Então na linha 58 codaremos uma template string que vai conter todos os ícones e, como queremos que apareça um ou outro, vamos deixar cada um entre aspas. Isso porque eles são dados HTML e na template string passamos apenas dados do tipo JavaScript, ou seja, se passamos HTML puro, dá erro.

As primeiras aspas vão começar antes do `<button>` e terminar depois do `</button>`. Depois vamos abrir aspas antes do `<i>` e fechar depois do `</i>`, contendo o ícone de editar.

```JavaScript
//código omitido
        <div>
            ${'<button onclick="salvarEdicao()"><i class="fa-regular fa-floppy-disk is-clickable"></i></button>' '<i class="fa-regular is-clickable fa-pen-to-square editar"></i>'}
            <i class="fa-solid fa-trash is-clickable deletar"></i>
        </div>
```

Agora antes das primeiras aspas, dentro do template string, iremos comparar se o index == itemAEditar, porque para compararmos se são iguais, precisamos utilizar dois sinais de igual. Se for igual, queremos que apareça o primeiro botão, que é o de salvar edição, com o ícone de disquete, se forem diferentes, queremos que apareça o botão de editar, que é o ícone com o lápis.

```JavaScript
//código omitido
        <div>
            ${ index == itemAEditar ? '<button onclick="salvarEdicao()"><i class="fa-regular fa-floppy-disk is-clickable"></i></button>' : '<i class="fa-regular is-clickable fa-pen-to-square editar"></i>'}
            <i class="fa-solid fa-trash is-clickable deletar"></i>
        </div>
```

Feita a lógica do nosso código, vamos testá-la. Voltando à página da nossa lista de compras, vamos clicar no campo de texto na parte superior da tela e adicionar o elemento "Suco".

Na lista, clicamos no input de "Suco" e notamos que não conseguimos mais editar. No canto direito desse item, temos apenas o ícone com o lápis, que é o de edição, e o da lixeira.

Clicando no ícone de lápis, ele muda para o ícone de disquete e o input do "Suco" é habilitado para editarmos. Vamos mudar de "Suco" para "Laranja" e clicar no ícone de disquete, que é o ícone de salvar. Ao fazermos isso, o item tem seu texto alterado e não conseguimos mais editar o item.

Portanto conseguimos melhorar a interatividade da pessoa usuária e a usabilidade da nossa aplicação. Também podemos pontuar mais sobre comparações no JavaScript.

Por exemplo, na linha 58, onde alternamos nossos ícones, estamos comparando com dois sinais de igual (==), portanto comparamos apenas os valores dessa variáveis, e não o tipo. Isso porque o itemAEditar está guardando o valor do índice como uma String.

Na linha 90, o itemAEditar recebe o valor do index a partir de um 'data-value', que está entre aspas. Por isso o índice é salvo como uma string. Sendo assim, não podemos comparar o index e o itemAEditar com três sinais de igual (===).

Contudo, o indicado é sempre comprarmos com ===, que é uma comparação forte, e é importante usarmos comparações fortes no JavaScript. Para resolvermos isso sem termos sempre o resultado "false", ao invés de index === itemAEditar, codamos index === Number(itemAEditar).

Assim transformamos o valor que foi salvo como string em um dado do tipo Number. Por isso também vamos usar essa conversão no ternário da linha 54, adicionando mais um sinal de igual, ou seja, index !== Number{itemAEditar}.

```JavaScript
//código omitido
        `<div>
            <input type="checkbox" class="is-clickable" />
            <input type="text" class="is-size-5" value="${elemento.valor}" ${index !== Number(itemAEditar) ? 'disabled' : ''}></input>
        </div>

        <div>
            ${ index === Number(itemAEditar) ? '<button onclick="salvarEdicao()"><i class="fa-regular fa-floppy-disk is-clickable"></i></button>' : '<i class="fa-regular is-clickable fa-pen-to-square editar"></i>'}
            <i class="fa-solid fa-trash is-clickable deletar"></i>
        </div>`
```

Agora podemos testar essa funcionalidade. Voltando a nossa página da lista de compras, vamos adicionar o item "Suco" a lista. Em seguida, vamos clicar no botão de editar e substituir por "Refrigerante". Ao clicarmos no ícone de disquete, conseguimos salvar a alteração. Portanto conseguimos estabelecer essa funcionalidade e fazer uma comparação forte.

Vamos abrir o console do navegador, clicando com o botão direito do mouse na página e selecionando a última opção do menu, que é a "Inspecionar". Em seguida, nas abas superiores, vamos selecionar "Console".

No Console, vamos escrever 10 == "10" e pressionar "Enter". Temos como retorno "true".

```JavaScript
10 == "10"
```

true

O elemento da esquerda é um 10 do tipo Number, enquanto o da direita, que está entre aspas, ou seja, "10", é do tipo String. Ainda assim o retorno foi verdadeiro, porque com dois sinais de igual (==) comparamos apenas o valor.

Como dos dois lados temos 10, são iguais, mas de tipos diferentes. Por isso, quando adicionamos mais um sinal de igual, o retorno é "false".

```JavaScript
10 === "10"
```

false

Essas comparações no JavaScript podem se tornar confusas quando estamos trabalhando com verificações no código. O ideal é sempre utilizarmos três sinais de igual para comparações.

Para resolver essa situação do exemplo, que sempre retorna "false", utilizamos o Number(), adicionando a string dentro dos parênteses.

```JavaScript
10 === Number("10")
```

true

Assim conseguimos fazer uma comparação forte e termos como retorno "true".

Atenção: É um consenso na programação que sempre sejam feitas comparações fortes, ou seja, com três sinais de igual (===) para evitar problemas na execução do código.

Já aprendemos mais sobre comparações no JavaScript e finalizamos a parte de editar os elementos e objetos. Porém se pressionamos "F5", notamos que o item "Refrigerante", que estava na nossa lista, sumiu da tela.

Esse é um problema que precisamos resolver: manter os elementos de forma consistente na tela. Faremos isso no próximo vídeo.

### Aula 03 - O que aprendemos?

- Nessa aula, você aprendeu como:
- Utilizou de métodos do JavaScript que possibilitam remover, editar, adicionar e substituir elementos de um array, contextualizando - com objetos;
- Aprendeu métodos para comparar e modificar valores.

### Aula 03 -  - Vídeo 7
### Aula 03 -  - Vídeo 8
