import { DataTypes } from "sequelize";
import { sequelize } from "../sequelize.js";

const User = sequelize.define
(
  "User", 
  {
    adresaMail:
    {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    idUtilizator:
    {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    parola:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    numeUtilizator:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    prenumeUtilizator:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefonUtilizator:
    {
        type: DataTypes.STRING,
        allowNull: true
    },
    admin:
    {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
 },
 {
    tableName: "Users", 
    timestamps: false 
 }
);

export { User };
