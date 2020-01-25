var db = require("../models");

module.exports = function(app) {
  app.get("/api/appointments", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Appointment.findAll({
      include: [db.Post]
    }).then(function(dbAppointment) {
      res.json(dbAppointment);
    });
  });

//   app.get("/api/appointments/:id", function(req, res) {
//     // Here we add an "include" property to our options in our findOne query
//     // We set the value to an array of the models we want to include in a left outer join
//     // In this case, just db.Post
//     db.Appointment.findOne({
//       where: {
//         id: req.params.id
//       },
//       include: [db.Post]
//     }).then(function(dbAppointment) {
//       res.json(dbAppointment);
//     });
//   });

  app.post("/api/appointments", function(req, res) {
    db.Appointment.create(req.body).then(function(dbAppointment) {
      res.json(dbAppointment);
    });
  });

  app.delete("/api/appointments/:id", function(req, res) {
    db.Appointment.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbAppointment) {
      res.json(dbAuthor);
    });
  });

};
