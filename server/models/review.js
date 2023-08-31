const Sequelize = require('sequelize');
const { Agent } = require('./agent');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite3'
});

class Review extends Sequelize.Model {}

Review.init(
  {
    // attributes
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    rating: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    comment: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Review',
    // options
  }
);

Review.belongsTo(Agent);
Agent.hasMany(Review);

module.exports = Review;
