'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class IngresoArticulos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Ingreso, { 
        foreignKey: 'ingresoId', 
        as: 'detalle-ingreso' 
      });
      this.belongsTo(models.Articulo, { 
        foreignKey: 'articuloId', 
        as: 'detalle-articulo' 
      })
    }
  };
  IngresoArticulos.init({
    ingresoId: DataTypes.INTEGER,
    articuloId: DataTypes.INTEGER,
    articulo: DataTypes.STRING,
    cantidad: DataTypes.INTEGER,
    precio: DataTypes.INTEGER,
    descuento: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'IngresoArticulos',
  });
  return IngresoArticulos;
};