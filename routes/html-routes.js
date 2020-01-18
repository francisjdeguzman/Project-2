// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies

var path = require("path");

// Routes

module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads the index (home) html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // about route loads about.html
  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/about.html"));
  });

  // gallery route loads gallery.html
  app.get("/gallery", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/gallery.html"));
  });

  // services route loads services.html
  app.get("/services", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/services.html"));
  });

  // appointments route loads appointments.html
  app.get("/appointments", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/appointments.html"));
  });

};
