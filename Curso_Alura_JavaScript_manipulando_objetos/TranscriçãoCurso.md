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

### Aula 02 -  - Vídeo 2
### Aula 02 -  - Vídeo 3
### Aula 02 -  - Vídeo 4
### Aula 02 -  - Vídeo 5
### Aula 02 -  - Vídeo 6
### Aula 02 -  - Vídeo 7
### Aula 02 -  - Vídeo 8

