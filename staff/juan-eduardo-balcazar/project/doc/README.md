# IA2060 Activity!

## Intro

En IA2060 somos expertos en comercializar Inteligencia Artificial y IA2060 Activity nos ayuda a sincronizar las labores necesarias para la coorecta y eficiente comercializacion interconectando Comerciales con Provedores y Clientes en un solo sitio para que todos estemos informados de todo lo que necesitamos en todo momento con ahorro de esfuerzo, tiempo y errores humanos.

![IA2060](https://media4.giphy.com/media/xZ4hkbjXU9666KUXuq/200.webp?cid=ecf05e472rn2285setd7s5bz9fkb2wyufnig0lpe3n67hzte&ep=v1_gifs_search&rid=200.webp&ct=g)


## Functional

### Use Cases

This project will be use en IA2060 company to develop the work

User
- view data
- create data
- delete data
- edit data
- add comment to data
- remove comment from data
- ...

### UIUX Design

[Prototype]https://www.figma.com/design/RXzXWxQ6edROeixngiB3PC/Project-IA2060?node-id=1-536&t=j1Ugd5PoRBVN1CFL-1

## Technical

### Blocks

- App (UI)
- API (core)
- DB (data)

### Packages

- app (front-end)
- api (back-end)
- com (validation, errors)
- doc (documentation)

### Techs

- HTML/CSS/JS
- React
- Tailwind
- Express
- Node
- Mongo

### Data Model

User
- id (uuid)
- email (string, required)
- username (string, required)
- phone (string, required)
- password (string, required)
- role (string, required, commercial|admin|provider|client)
- author (User.id)
- date (date, required)
- status (string, open|closed)

Info
- id (uuid)
- user (User.id, required)
- email (string)
- companyName (string, required)
- companyActivity (string)
- companyPhone (string, required)
- recepcionistName (string, required)
- contactName (string)
- contactPhone (string)
- contactEmail (string)
- date (date, required)
- description (string)

Comment 
- id (uuid)
- user (User.id, required)
- author (User.id, required)
- visibility (string, private|public)
- text (string, required)
- date (date, required)


[gif]: https://media.giphy.com/media/
[def]: https://media.giphy.com/media/QihmNnEssSR36OwCUt/giphy.gif?cid=ecf05e4752xrl8yyyz6iofximhzmvxtae6ygldl087qoekus&ep=v1_gifs_related&rid=giphy.gif&ct=g
[def2]: https://media.giphy.com/media/QihmNnEssSR36OwCUt/giphy.gif?cid=ecf05e4752xrl8yyyz6iofximhzmvxtae6ygldl087qoekus&ep=v1_gifs_related&rid=giphy.gif&ct=g