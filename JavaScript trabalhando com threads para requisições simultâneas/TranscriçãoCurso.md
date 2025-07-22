# Curso Alura JavaScript: trabalhando com threads para requisições simultâneas

## Aula 1 - Visualizando Dados

### Aula 1 - Apresentação - Vídeo 1

Transcrição  
Boas-vindas a mais um curso de JavaScript! Meu nome é Monica Hillman, mas pode me chamar de Moni Hillman. Serei sua instrutora nessa jornada de aprendizado.

Autodescrição: Sou uma mulher branca de cabelos castanhos escuros com mechas rosas. Estou usando óculos de grau e uma camiseta amarela. Ao fundo, há uma parede com iluminação azul e roxa.

Quais os pré-requisitos?  
Para conseguir acompanhar esse treinamento com mais facilidade, é importante que você já tenha noções de HTML e CSS, pois essa parte não será construída durante o projeto. Além disso, é interessante ter uma base de JavaScript, para entender melhor sobre requisições, métodos de array, laços de repetição etc.

O que vamos aprender?  
Neste curso, vamos trabalhar com a plataforma Bytebank, em que faremos parte da equipe que desenvolverá a página de cotações de moedas. No próximo vídeo, analisaremos com mais detalhes a aparência desse projeto.

Faremos a cotação de moeda em tempo real do dólar, fazendo gráficos que mostram essas alterações e variações de cotação de moedas como 1 dólar, 10 dólares, 100 dólares e assim em diante. Para praticar, aplicaremos esses conhecimentos em ienes também.

Para desenvolver essa aplicação, vamos nos aventurar com a biblioteca Chart.js, bem como o FetchAPI para nos conectar a uma API de cotação de moedas. Além disso, exploraremos conceitos como async await, setInterval() e o método Date(), nativo do JavaScript.

Estes últimos tópicos dizem respeito à assincronicidade, então vamos aproveitar para entender mais a fundo como o JavaScript lê o código, aprendendo sobre task queue, event loop e call stack.

Também estudaremos modelos de processos de leitura de código, como a de concorrência e o paralelismo. Para melhor entendimento do conceito de paralelismo, vamos compreender o que são threads, single thread e multithreads. Com os conhecimentos adquiridos nesse projeto, você aprenderá como e por que utilizar multithreads no JavaScript.

Se você se interessou por todos esses tópicos, não deixe de se matricular!

### Aula 1 - Preparando o ambiente

Olá, estudante! Desejamos boas vindas ao curso!

Aqui usaremos o editor de código chamado VSCode. Caso queira acompanhar a instrutora com as mesmas configurações, reserve um tempinho para a instalação do mesmo.

Também desenvolveremos os scripts em um projeto já construído com html e css que é a tela de cotação de moedas do ByteBank, para baixá-lo você pode acessar o [repositório do github](https://github.com/alura-cursos/bytebank-javascript/tree/main) ou [clicar aqui](https://github.com/alura-cursos/bytebank-javascript/archive/refs/heads/main.zip).

Caso tenha dúvidas durante a instalação ou no decorrer do curso, pode contar conosco criando um tópico no fórum ou interagindo no nosso servidor do Discord. Também não deixe de ajudar outros colegas. Vamos construir juntos essa grande comunidade da Alura? :)

### Aula 1 - Chart.js - Vídeo 2

Transcrição  
O Bytebank é um banco digital e estamos na equipe responsável pela página de cotação de moedas. Primeiramente, vamos abrir o [projeto no Figma](https://www.figma.com/file/WFREDPEsUmsMECg889qKyw/2480---JavaScript%3A-Concorr%C3%AAncia?node-id=33%3A283) para conferir a aparência desse projeto:

![alt text](image.png)

Protótipo da página de cotação de moedas. A descrição da imagem é feita nos próximos parágrafos da transcrição.

Na lateral esquerda, temos um menu sidebar na cor roxa. De cima para baixo, temos: o logotipo do Bytebank, a foto da pessoa usuária com seu nome, e as opções "Dashboard", "Investimentos", "Minha conta" e "Dúvidas frequentes". Essa estrutura é responsabilidade de outros colegas.

Eu e você ficamos responsáveis pelos blocos dispostos verticalmente na parte direita da tela, em que temos as variações da moeda desde o login. Cada bloco conta com um gráfico e com os valores da moeda, que fazem a conversão de dólares para reais (ou qualquer outra moeda desejada).

Implementando gráficos  
Para implementar um gráfico, utilizaremos a biblioteca Chart.js. No navegador, vamos acessar o [site oficial](https://www.chartjs.org/) do Chart.js e clicar no botão "Get Started" para [consultar a documentação](https://www.chartjs.org/docs/latest/).

Por que escolher a Chart.js? Entre várias bibliotecas JavaScript, ela é uma das utilizadas pela comunidade dev, contando com cerca de 60 mil likes no GitHub e 2.4 milhões de downloads semanais no npm! São muitas pessoas usando esse recurso, então garantimos melhor confiabilidade.

Na documentação, há um menu de navegação à esquerda. Atualmente, estamos na primeira seção, chamada "Chart.js". Nessa página, após o título e a frase de boas-vindas, vamos acessar o link "Get started with Chart.js".

Seremos redirecionados para a seção "Getting Started", onde vamos consultar o tópico "Create a Chart". Logo de início, temos um bloco de código. Para fazer a importação do chart, utilizaremos apenas a quarta linha desse bloco, que corresponde à tag de script com o atributo src. Vamos copiá-la:

```JavaScript
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
```

No VS Code, vamos abrir o arquivo index.html e colá-la após o fechamento da tag </main>, na linha 53:

<!-- código anterior omitido -->

  </main>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</body>

</html>Copiar código
Assim, o link do atributo src será: https://cdn.jsdelivr.net/npm/chart.js.

Dessa maneira, conseguimos importar o pacote CDN e teremos acesso a todas as funcionalidades dessa biblioteca, sem precisar fazer instalações em nosso computador.

No próximo vídeo, começaremos a criar nosso gráfico!

### Aula 1 -  - Vídeo 3
### Aula 1 -  - Vídeo 4
### Aula 1 -  - Vídeo 5
### Aula 1 -  - Vídeo 6
