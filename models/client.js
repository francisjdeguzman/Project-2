module.exports = function(sequelize, DataTypes) {
  var Client = sequelize.define("Client", {
    // Giving the Author model a name of type STRING
    email: DataTypes.STRING, 
    phone: DataTypes.INTEGER
  });

  Client.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Client.hasMany(models.Appointment, {
       onDelete: "cascade"
    });
    
  };

  return Client;
};

