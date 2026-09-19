# Requirements — [Nome do Produto]

## 1. Visão do Produto

### Nome
[NMovieTv]

### Problema
[Muitas pessoas encontram filmes que desejam assistir, mas acabam esquecendo
os títulos ou não possuem uma forma simples de organizar esses filmes em uma
lista pessoal.]

### Público
[Pessoas que gostam de filmes e séries e desejam organizar de forma simples
os títulos que pretendem assistir.]

### Proposta de solução
[O MovieTV permite que o usuário visualize filmes disponíveis e adicione
os títulos de seu interesse a uma lista pessoal, facilitando a organização
dos filmes que deseja assistir.]

## 2. Objetivo do MVP
[Ao final do projeto, o usuário deverá conseguir acessar a aplicação,
visualizar os filmes disponíveis, adicionar filmes à sua lista pessoal
e visualizar os títulos adicionados.]

## 3. Funcionalidades

### F01 — Login

**Descrição:** [Permite que o usuário informe seu nome de usuário e senha
para acessar o MovieTV.]


**Critérios de aceitação:**
- [ ] O usuário deve conseguir preencher o campo de nome de usuário.
- [ ] O usuário deve conseguir preencher o campo de senha.
- [ ] Ao inserir os dados corretamente, o usuário deve acessar a tela de filmes.

**Estados:**
- [ ] Inicial — campos de usuário e senha vazios.
- [ ] Sucesso — dados preenchidos e acesso liberado.
- [ ] Erro — tentativa de acesso com campos não preenchidos ou dados inválidos.

### F02 — Pesquisar filmes

**Descrição:** Permite que o usuário pesquise filmes pelo título dentro do catálogo.

**Critérios de aceitação:**

- [ ] O usuário deve conseguir abrir o campo de pesquisa.
- [ ] O usuário deve conseguir digitar o nome de um filme.
- [ ] A lista deve ser filtrada conforme o texto digitado.
- [ ] Se nenhum filme corresponder à busca, nenhum card deve ser exibido.


### F03 — Adicionar filme à lista

**Descrição:** Permite que o usuário adicione um filme do catálogo à sua lista pessoal.

**Critérios de aceitação:**

- [ ] Cada filme deve possuir um botão para ser adicionado à lista.
- [ ] Ao clicar no botão de adicionar, o filme deve ser incluído na lista do usuário.
- [ ] O filme adicionado deve aparecer na página "Sua Lista".


**Estados:**

- [ ] Inicial — o filme ainda não foi adicionado.
- [ ] Sucesso — o filme foi adicionado à lista.

## 4. Fora do Escopo
- Criação de perfis diferentes para vários usuários.
- Recomendações personalizadas por inteligência artificial.
- Opção de categorizar os filmes como "neutro","não gostei" e "recomendo"
- O mesmo filme não deve ser adicionado mais de uma vez.

