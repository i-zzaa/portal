<h1 align="center">

👾  PORTAL 👾
</h1>
<p align="center">🚀  Esse projeto tem como objetivo principal permitir que o usuário abre solicitações helpdesk
</p>

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/) versão 19.2.0, [Vue3](https://v3.vuejs.org/)  Yarn.
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Front

```
# Clone este repositório
$ git https://github.com/i-zzaa/portal.git

# Acesse a pasta do projeto no terminal/cmd
$ cd portal

# Instale as dependências 
$ yarn install

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# O servidor inciará na porta:5173 - acesse <http://127.0.0.1:5173/>

```

### 🎲 Rodando o Front Produção

```
# Clone este repositório
$ git https://github.com/i-zzaa/portal.git

# Acesse a pasta do projeto no terminal/cmd
$ cd portal

# Instale as dependências 
$ yarn install

# Build da aplicação que vai criar a pasta dist para produção
$ yarn build

# Execute a aplicação em modo de produção
$ yarn start

# O servidor inciará

```

### ⚙️ Configurações

É necessário criar um arquivo .env  na raiz do projeto com a variável de ambiente VITE_API_URL com a url do backend

.*env*

```
VITE_API_URL = http://127.0.0.1:3000/
```

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Vue](https://vuejs.org/)3
- [Vite](https://vitejs.dev/)
- [Vue-router](https://router.vuejs.org/guide/advanced/meta.html)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- Pinia
- Eslint
- Prettier
- [Phospho Icon](https://phosphoricons.com/)