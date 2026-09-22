# Experiment 12A: Node.js, Express.js and EJS Templating

## Objective
To understand and implement server-side JavaScript using Node.js, build RESTful APIs with Express.js, handle HTTP requests and responses, work with URL parameters and POST data, implement EJS templating, and use development tools like Nodemon.

## Requirements
- Node.js
- npm
- VS Code

## Installation

Open this folder in VS Code and run:

```bash
npm install
```

## Run normally

```bash
npm start
```

Open:

http://localhost:3000

## Run with Nodemon

```bash
npm run dev
```

## Endpoints

| Method | URL | Purpose |
|---|---|---|
| GET | `/` | EJS home page |
| GET | `/student/1` | URL parameter example |
| GET | `/api/students` | Get all students |
| GET | `/api/students/1` | Get one student |
| POST | `/api/students` | Add student using JSON |
| POST | `/students` | Add student using HTML form |

## Example POST JSON

Use Postman or Thunder Client:

```json
{
  "name": "Deepak",
  "course": "B.Tech CSE"
}
```

POST to:

`http://localhost:3000/api/students`

## Conclusion
The experiment demonstrates a basic Node.js server, Express.js routing and REST API development, handling URL parameters and POST data, EJS server-side rendering, static files, and Nodemon-based development.
