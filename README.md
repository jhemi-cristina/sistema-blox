🚀 Tecnologias usadas
Esse projeto foi desenvolvido com as seguintes tecnologias:

[ReactJs]
[Typescript]
[JavaScript]
[html]
[Css]

# Instalações

- Primeiramente, acesse o seu terminal e pasta desejada.
- Em seguida faça o clone do projeto com `git clone https://github.com/jhemi-cristina/sistema-blox.git`
- Feito isso acesse a pasta do repositório com `cd sistema-blox`
- Faça a instalação das dependências com `yarn ` ou `npm install` (Recomendamos a utilização do Yarn).
- Pode acessar o site direto, por esse link: [sistema-blox.netlify.app](https://sistema-blox.netlify.app/)

# Startando o Front-end:

- basta rodar `yarn start` ou `npm start`


# Documentação técnica:

- Para integração com a api, foi utilizado o axios em uma camada chamada services.
- Foi implementado o context-api do react para controle do usuário e autenticação.
- Dentro do contexto tem duas funções chamadas `SignIn` e `SignUp`que são utilizadas nas suas páginas.

- Página de login

  - Tem integração com o contexto `AuthContext`e chama a função `SignIn` no envio do formulário.
  - No formulário foi utilizado o react-hook-form, para evitar a utilização de muitos estados do React e ainda ter um ganho de perfomance.

- Página de cadastro

  - Tem integração com o contexto `AuthContext`e chama a função `SignUp` no envio do formulário.
  - No formulário foi utilizado o react-hook-form (mesmo motivo do `SignIn`).
  - Para a validação dos campos foi utiilizado o hook-form e os parametros de erro dos componentes do material.

- Página ListUnits (Para listagem de unidades curriculares)
  - Existe uma camada service onde está a integração com o endpoint de listagem de unidades.
  - Dentro da página existe o useEffect para trazer a lista de unidades no carregamento da tela.
  - Dentro da página existe o useMemo que está memorizando o ultimo valor pesquisado e comparando com o valor atual digitavel, caso seja divergente então vai resetar o estado da pesquisa e mostrar a listagem completa novamente.
  - Quando clicar na lupa novamente, então a pesquisa será atualizada.
    img
  - Existe um select para filtrar as categorias, que vem da pasta functions.
