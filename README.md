
# Encurtador de URL

Um simples encurtador de URL, feito para adquirir experiência com a conexão do Backend e Frontend.


## Funcionalidades

- Encurtar uma URL
- Redirecionar um usuário à página desejada
- Retornar um link com a URL encurtada


## Na prática:

![App Screenshot](https://i.postimg.cc/QdgtvnMX/imagem-2025-06-02-002443843.png)

![App Screenshot](https://i.postimg.cc/yNdD9yVs/imagem-2025-06-02-002614293.png)


## Documentação da API

#### Retorna todos os itens

```http
  POST /url/shorten
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `url longa` | `string` | Encurta a URL e gera um link |

#### Retorna um item

```http
  GET /url/:shortUrl
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `url curta`      | `string` | Redireciona o Usuário |



## Stack utilizada

**Front-end:** React, Axios, TailwindCSS

**Back-end:** Node, Express, NestJS, Typescript, MongoDB


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/Lucas-Jacchetti/Url-Shortener
```

Entre no diretório do projeto

```bash
  cd backend
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```
Após isso basta carregar o Frontend pelo link

```bash
  https://url-shortener-1xqw.vercel.app
```
