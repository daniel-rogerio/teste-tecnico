# Teste Técnico
Analista de Sistemas - Angular

A aplicação abaixo, nomeada como "Champion Show", foi desenvolvida para solucionar a prova técnica para a vaga de Analista de Sistemas - Angular.

## Champion Show

### Passo a passo para rodar o projeto:
 - Clonar (utilizando o GIT) o projeto para o seu ambiente de trabalho.
 - Acessar a pasta onde o projeto foi clonado.
 - Baixar as dependências do projeto utilizando: `npm install`
 - Executar o projeto usando um dos comandos a seguir: `npm start` ou `ng server`
 - Abrir o local host (no navegador) na porta 4200, exemplo: `http://localhost:4200/`

### Versões utilizadas no desenvolvimento:
 - Angular CLI: 19.0.3
 - Node: 20.15.0
 - Package Manager: npm 10.7.0

## Páginas

### Página de Login:
Desenvolvida com um desing que lembra a tela de login do launcher de 2015, a página de login aprensenta um formulário com os campos de email e senha, para que os usuários possam se conectar na aplicacão. Também está presente um link para que novos usuários possam se registrar.

### Página de Registro de Usuários:
Desenvolvida com um desing que lembra a tela de login do launcher de 2015, porém, com a imagem de fundo sendo do personagem Sona, para homenagear o meu parceiro de bot lane. 

A página de registro de usuários possui um formulário com os campos necessários para cadastro. Além disso, a página possui dicas de como preencher os campos, validação no campos e mensagens amigáveis caso aprensente algum erro.

### Página de Listagem de Campeões:
Desenvolvida com um desing simples e utilizando o tema padrão (light) do Angular Material. A página de listagem de campeões, lista todos os campeões do jogo e os apresenta em uma tabela com páginação. Além disso, a página possui um campo onde o usuário poderá pesquisar um campeão específico somente digitando o nome do mesmo. Também presente na tabela, um botão de mais informações, que redirecionará o usuário para a página de detalhes do campeão selecionado.

### Página de Detalhes do Campeão:
Desenvolvida com um desing simples e utilizando o tema padrão (light) do Angular Material. A página de detalhes do campeão possui dois "cards":

Primeiro card: possui o nome do campeão e abaixo o seu título, também possui a "Splash Art" padrão do campeão e por fim a sua lore (história).

Segundo card: possui o título "Skins do Campeão" e apresenta um cartão com o nome e a foto de cada skin que o campeão possuir. Além disso, se o usuário clicar na imagem, será apresentado um modal com as mesma informações, porém com o tamanho maior.

## Componentes Compartilhados

### Header (cabeçalho):
A aplicação possui um componente de cabeçalho compartilhado entre todas as páginas presentes após o usuário efetuar o login.

O cabeçalho possui os seguintes itens:
 - Botão para a página principal: redireciona o usuário para a página principal do site.
 - Nome do site.
 - Botão para desconectar: caso o usuário clique neste botão, será aprensentado um modal pedindo a confirmação para se desconectar.

 ### Progress Spinner (barra de progresso):
 Mostra uma barra de progresso giratória indicando que o sistema está processando alguma informação.

 ## Funcionalidades

 O sistema possui as seguintes funcionalidades:
  - Requisições HTTP: faz requisições HTTP do tipo GET e POST para capturar e transmitidir dados.
  - Guarda de rotas: possui autenticação por Token e não permite que usuários não conectados acessem a aplicação. O Token é salvo via serviço de Cookies.
  - Responsividade: apresenta responsividade para diversos tamanhos de telas.
  - Dicas: botões e areas específcas possuem mensagens com dicas sobre a sua utilização.
  - Estado da página: a aplicação guarda informações sobre o estado da página de listagem de campeões para que o usuário possa ir para outra página e retornar de onde parou.