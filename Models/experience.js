import { DataTypes } from "sequelize";
import { sequelize } from "../sequelize.js";

const Experience = sequelize.define
(
  "Experience", 
  {
    idExperienta:
    {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    punctPlecare:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    punctSosire:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
   mijlocTransport:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    oraPlecare:
    {
        type: DataTypes.TIME,
        allowNull: false
    },
    oraSosire:
    {
        type: DataTypes.TIME,
        allowNull: false
    },
    durataCalatorie:
    {
        type: DataTypes.TIME,
        allowNull: true
    },
    gradAglomerare:
    {
        type: DataTypes.ENUM("Liber","Putin aglomerat","Aglomerat","Foarte aglomerat"),
        allowNull: false
    },
    observatii:
    {
        type: DataTypes.STRING,
        allowNull: true
    },
    nivelSatisfactie:
    {
        type: DataTypes.ENUM("Foarte nemultumit","Nemultumit","Satisfacator","Multumit","Foarte multumit"),
        allowNull: false
    }
  },
  {
    tableName: "Experiences", 
    timestamps: false 
  }
);

export { Experience };
