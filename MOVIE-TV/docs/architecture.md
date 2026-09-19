# Architecture — [Nome do Produto]

## 1. Visão Geral

[O MovieTV será desenvolvido utilizando React e organizado em páginas,
componentes reutilizáveis e arquivos de estilos.

A aplicação possui uma tela inicial, uma página de login, um catálogo
de filmes e uma página para visualizar os filmes adicionados à lista
do usuário.

Os componentes reutilizáveis serão separados das páginas para facilitar
a organização, manutenção e reutilização do código.]

## 2. Estrutura de Pastas

```text
src/

├── assets/
│
├── components/
│   ├── Categories.jsx
│   ├── Header.jsx
│   └── Main.jsx
│
├── pages/
│   ├── CatalogoPage.css
│   ├── CatalogoPage.jsx
│   ├── ListaPage.css
│   ├── ListaPage.jsx
│   └── LoginPage.jsx
│
├── App.css
├── App.jsx
├── index.css
└── main.jsx

[Adicione outras pastas somente se forem necessárias.]

## 3. Páginas e Rotas

| Página | Rota | Objetivo |
|---|---|---|
| Início | `/` | Apresentar o MovieTV e permitir que o usuário entre na aplicação |
| Login | `/login` | Permitir que o usuário informe seus dados de acesso |
| Catálogo | `/catalogo` | Exibir os filmes disponíveis para seleção |
| Sua Lista | `/lista` | Exibir os filmes adicionados pelo usuário |

## 4. Componentes

| Página | Rota | Objetivo |
|---|---|---|
| Header | Exibir o logo e os elementos do topo da aplicação | — |
| Main | Exibir e controlar os campos de usuário e senha | — |
| Categories | Permitir que o usuário alterne entre as categorias Curtidos, Favoritos e Assistindo | `abaAtiva`, `onChange` |


## 5. Estado da Aplicação

| Estado | Onde será controlado? | Por quê? |
| Estado | Onde será controlado? | Por quê? |
|---|---|---|
| Filmes selecionados | App.jsx | A lista precisa ser compartilhada entre o catálogo e a página Sua Lista |
| Usuário e senha | LoginPage.jsx | São dados utilizados somente durante o login |
| Filmes disponíveis | CatalogoPage.jsx | São utilizados na exibição do catálogo |
| Busca digitada | CatalogoPage.jsx | Armazena o texto usado para filtrar os filmes |
| Barra de pesquisa aberta/fechada | CatalogoPage.jsx | Controla se o campo de pesquisa aparece ou não |

## 6. useEffect

| Efeito | Quando acontece? | O que faz? |
|---|---|---|
| Carregar filmes populares | Quando a página de catálogo é aberta | Busca os filmes populares na API do TMDB e armazena os 9 primeiros no estado `filmes` |


## 7. Dependências

| Biblioteca | Uso | Motivo |
|---|---|---|
| React | Construção da interface | Permite criar a aplicação utilizando componentes reutilizáveis |
| React DOM | Renderização | Permite renderizar os componentes React no navegador |
| React Icons | Ícones | Facilita a utilização de ícones na interface |
| React Router DOM | Navegação entre páginas | Permite criar e controlar as rotas da aplicação |
| Vite | Ambiente de desenvolvimento | Facilita a execução e o build do projeto |