var db = require("../models");

module.exports = function(app) {
  app.get("/api/appointments", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Appointments.findAll({
      include: [db.Post]
    }).then(function(dbAppointments) {
      res.json(dbAppointments);
    });
  });

  app.get("/api/appoinments/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Appointments.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then(function(dbAppointments) {
      res.json(dbAppointments);
    });
  });

  app.post("/api/appointments", function(req, res) {
    db.Appointments.create(req.body).then(function(dbAppointments) {
      res.json(dbAppointments);
    });
  });

  app.delete("/api/appointments/:id", function(req, res) {
    db.Appointments.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbAppointments) {
      res.json(dbAppointments);
    });
  });

};
