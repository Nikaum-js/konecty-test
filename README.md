# Konecty Test

Este é um projeto de teste para a empresa Konecty. O projeto consiste em uma aplicação web que lista produtos de calçados, permitindo filtragem por marca e busca por nome do produto. A aplicação foi desenvolvida usando Next.js, React, Tailwind CSS, e realiza chamadas para uma API REST para obter os produtos.

## Tecnologias Utilizadas

- Next.js
- React
- TypeScript
- Tailwind CSS
- Axios
- Jest

## Estrutura do Projeto

```plaintext
konecty-test/
├── __mocks__/
│   └── products.json
├── src/
│   ├── components/
│   │   ├── Badge.tsx
│   │   ├── ProductCard.tsx
│   │   └── ...
│   ├── pages/
│   │   ├── api/
│   │   │   ├── products.ts
│   │   │   └── products.test.ts
│   │   ├── index.tsx
│   │   └── index.test.tsx
│   └── types/
│       └── Product.ts
├── package.json
├── tailwind.config.js
└── ...
```

## Funcionalidades

- **Listagem de Produtos:** Exibe uma lista de produtos de tenis.
- **Filtragem por Categoria:** Permite filtrar produtos por marca.
- **Pesquisa por Nome do Produto:** Permite buscar produtos pelo nome.

## Instalação

Para instalar e rodar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/konecty-test.git
```

2. Navegue até o diretório do projeto:

```bash
cd konecty-test
```

3. Instale as dependências:

```bash
npm i
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O aplicativo estará disponível em `http://localhost:3000`.

## Testes

O projeto utiliza Jest para testes unitários. Para rodar os testes, use o comando:

```bash
npm run test
```

### Estrutura dos Testes

- **API Tests:** Os testes para a API estão localizados em `src/pages/api/products.test.ts`.
- **Component Tests:** Os testes para os componentes estão localizados em `src/components/ProductCard.test.tsx`.
- **Page Tests:** Os testes para a página principal estão localizados em `src/pages/index.test.tsx`.
