const express = require("express");
const router = express.Router();

// @desc Login/Landing page
// @route GET /
router.get("/", (req, res) => {
  res.render("login.hbs", {
    layout: "login",
  });
});

// @desc Dashboard
// @route GET /dashboard
router.get("/dashboard", (req, res) => {
  res.render("dashboard.hbs");
});

module.exports = router;
