# Backend Developer Challenge

This project is a simple API to manage Places, i got this challenge from: https://github.com/RocketBus/quero-ser-clickbus/blob/master/testes/backend-developer/README.md

Features

```bash
Get all places.
Get a specific place by ID.
Create a new place with a name, slug, city, and state.
Edit an existing place by providing the ID and updated details.
Delete an existing place by providing the ID.
```

### Technologies!

![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![VSCode](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

#### Installation

```bash
$ npm install
```

### Running the app

```bash
$ npx prisma migrate dev

$ npx prisma studio

# development
$ yarn dev
```

### API end points

```bash
    GET /places: List all places.
    GET /places/:id: Get a specific place.
    POST /places: Create a new place.
    PUT /places/:id: Update an existing place.
    DELETE /places/:id: Delete an existing place.
```

### Examples

```bash
POST /places

Request Body:
{
  "name": "Test",
  "slug": "test",
  "city": "Sao Paulo",
  "state": "SP"
}

PUT /places/:id

Request Body:
{
  "name": "Updated Test",
  "slug": "updated-test",
  "city": "Updated Sao Paulo",
  "state": "Updated SP"
}
```

### Enviroment

```bash
PORT=3000
DATABASE_URL=
```
