module.exports = function(sequelize, DataTypes) {
  var Appointment = sequelize.define("Appointment", {
    // Giving the Author model a name of type STRING
    time: DataTypes.DATE
  });

  Appointment.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
  
   Appointment.belongsTo(models.Client, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Appointment;
};

