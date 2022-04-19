module.exports = (sequelize, DataTypes) => {
    const Excel = sequelize.define("excel", {
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
      }
    });
  
    return Excel;
  };