import { Sequelize } from "sequelize";

const sequelize = new Sequelize
(
  {
    dialect: "sqlite",
    storage: "./sqlite/database.db", 
  }
);


sequelize.sync({ alter: true }).then
(() => 
    {
      console.log("Toate modelele au fost sincronizate.");
    }
); 

export { sequelize };
