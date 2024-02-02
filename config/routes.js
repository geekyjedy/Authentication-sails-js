module.exports.routes = {
  "/": { view: "pages/homepage" },
  "/register": { view: "pages/register" },
  "POST /register": { action: "register" },
  "POST /login": { action: "login" },
  "/movies": { view: "pages/movielist", policy: "movieaccess" },
};
