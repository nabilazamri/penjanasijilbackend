module.exports = (sequelize, DataTypes) => {
    const Penerima = sequelize.define("penerima", {
      nama: {
        type: DataTypes.STRING
      },
      nokadpengenalan: {
        type: DataTypes.STRING
      },
      peranan: {
        type: DataTypes.STRING
      },
      program: {
        type: DataTypes.STRING
      },
      tarikh: {
        type: DataTypes.STRING
      },
      tempat: {
        type: DataTypes.STRING  
      },
      userId: {
        type: DataTypes.INTEGER
      }
    });
  
    return Penerima;
  };