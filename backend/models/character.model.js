module.exports = (sequelize, Sequelize) => {
  const Character = sequelize.define("character", {
    real_name: {
      type: Sequelize.STRING
    },
    alias: {
      type: Sequelize.STRING
    },
    rol: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.STRING
    },
    origin: {
      type: Sequelize.STRING
    },
    filename: {
      type: Sequelize.STRING
    }

  }, { timestamps: false });

  return Character;
}