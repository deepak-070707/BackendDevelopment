# Experiment 12B: Using Node.js to Manage Sessions & Cookies

## Objective

To understand how sessions and cookies work for user management and how they can be implemented using Node.js.

## Concepts Covered

- HTTP is stateless
- Cookies
- Sessions
- Login and logout
- Protected routes
- Session-based visit counter
- EJS templating
- Express.js middleware

## Installation

Open this folder in VS Code and run:

```bash
npm install
```

## Start the application

```bash
npm start
```

For development with Nodemon:

```bash
npm run dev
```

Open:

http://localhost:3000

## Demo Login

Username:

```text
deepak
```

Password:

```text
12345
```

## Routes

| Method | Route | Purpose |
|---|---|---|
| GET | `/` | Home page |
| GET | `/login` | Login page |
| POST | `/login` | Authenticate user and create session |
| GET | `/profile` | Protected session page |
| GET | `/logout` | Destroy session |
| GET | `/set-cookie` | Set a cookie |
| GET | `/read-cookie` | Read a cookie |
| GET | `/delete-cookie` | Delete a cookie |

## Conclusion

The experiment demonstrates how Node.js and Express.js can manage user state using cookies and sessions. Cookies store small pieces of information on the client side, while sessions maintain user-specific state across multiple HTTP requests.
