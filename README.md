# Tattoo Manager

## Descrição

Aplicação destinada a gerenciar e armazenar informações sobre flashes criados por tatuadores.

## Funcionalidades

- Listar e criar flashes.
- Listar e criar flashdays.
- Relatorio financeiro.

## Tecnologias

- React Typescript
- Firebase
- Styled Components
- React Router Dom

## Como rodar

- Clone o repositório com `git clone https://github.com/ThalesMuller/tattoo-manager.git`
- Entre no projeto e instale as dependências com `npm install` ou `yarn`
- Rode o projeto com o comando `npm run dev` ou `yarn dev`

## Arquitetura

Projeto baseado em Clean Arch, usando o Vite para criar a aplicação React com Typescript.
Utiliza o firebase para autenticação e banco de dados.
A estilização foi feita com Styled Components e o roteamento com React Router DOM.

O intuito de usar Clean Architecture é permitir a substituição de qualquer dependência externa com o mínimo esforço possível.
A seguinte estrutura foi criada:

- **domain**: Define os models e usecases.
- **data**: Define como os dados são trafegados na nossa aplicação.
- **infra**: Integração com bibliotecas externas, aqui são criados os adapters.
- **presentation**: Camada de apresentação, aqui são criados os components, pages e protocolos de validação.
- **validation**: Validação de dados com base nos protocolos criados na camada de apresentação.
- **main**: Camada suja da aplicação, aqui são criadas e são montadas as outras camadas com o uso de factories.

## Dicionário

- **Flash**: Desenho criado por um tatuador que já está pronto para tatuar. O flash pode ser exclusivo ou não.
- **Flash Exclusivo**: Flash que só pode ser tatuado uma unica vez (vendido para uma unica pessoa).
- **Flashday**: Evento onde um tatuador disponibiliza flashes para tatuar.
- **Tatuador**: Pessoa que cria flashes e os tatua.
- **Cliente**: Pessoa que compra flashes.
