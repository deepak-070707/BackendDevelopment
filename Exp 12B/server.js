const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));

// EJS
app.set("view engine", "ejs");

// Session configuration
app.use(
  session({
    secret: "experiment12b-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 30, // 30 minutes
      httpOnly: true
    }
  })
);

// Demo user
const USER = {
  username: "deepak",
  password: "12345"
};

// Home page
app.get("/", (req, res) => {
  res.render("index", {
    title: "Experiment 12B - Sessions & Cookies",
    username: req.session.username || null,
    theme: req.cookies.theme || "light"
  });
});

// Login page
app.get("/login", (req, res) => {
  res.render("login", {
    error: null
  });
});

// Login using session
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === USER.username && password === USER.password) {
    req.session.username = username;
    res.redirect("/profile");
  } else {
    res.status(401).render("login", {
      error: "Invalid username or password"
    });
  }
});

// Protected profile page
app.get("/profile", (req, res) => {
  if (!req.session.username) {
    return res.redirect("/login");
  }

  // Session counter
  req.session.visitCount = (req.session.visitCount || 0) + 1;

  res.render("profile", {
    username: req.session.username,
    visitCount: req.session.visitCount
  });
});

// Logout and destroy session
app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send("Could not log out");
    }
    res.redirect("/");
  });
});

// Set a cookie
app.get("/set-cookie", (req, res) => {
  res.cookie("theme", "dark", {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true
  });

  res.send("Cookie 'theme=dark' has been set. Go back to the home page.");
});

// Read cookie
app.get("/read-cookie", (req, res) => {
  const theme = req.cookies.theme;

  res.json({
    message: "Cookie value retrieved successfully",
    theme: theme || "No theme cookie found"
  });
});

// Delete cookie
app.get("/delete-cookie", (req, res) => {
  res.clearCookie("theme");
  res.send("Theme cookie deleted. Go back to the home page.");
});

// 404 handler
app.use((req, res) => {
  res.status(404).send("404 - Page not found");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
