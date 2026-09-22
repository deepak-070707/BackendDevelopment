<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login - Experiment 12B</title>
  <link rel="stylesheet" href="/style.css">
</head>
<body>
  <div class="container small">
    <h1>Login</h1>

    <% if (error) { %>
      <div class="error"><%= error %></div>
    <% } %>

    <form action="/login" method="POST">
      <label>Username</label>
      <input type="text" name="username" required>

      <label>Password</label>
      <input type="password" name="password" required>

      <button type="submit">Login</button>
    </form>

    <p><a href="/">Back to Home</a></p>
  </div>
</body>
</html>
