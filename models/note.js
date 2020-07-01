'use strict';
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    subject: DataTypes.STRING,
    detail: DataTypes.STRING,
    isDeleted: DataTypes.BOOLEAN
  }, {});
  Note.associate = function(models) {
    // associations can be defined here
  };
  return Note;
};