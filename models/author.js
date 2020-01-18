module.exports = function(sequelize, DataTypes) {
  var Appointments = sequelize.define("Appointments", {
    // Giving the Appointments model a name of type STRING
    name: DataTypes.STRING
  });

  Appointments.associate = function(models) {
    // When an appointment is deleted, also delete any associated Posts
    Appointments.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return Appointments;
};
