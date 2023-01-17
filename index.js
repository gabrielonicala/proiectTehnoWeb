import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { sequelize } from "./sequelize.js";
import { experiencesRouter } from "./Routes/experiencesRouter.js";
import { usersRouter } from "./Routes/usersRouter.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use("/api", experiencesRouter);
app.use("/api", usersRouter);

app.listen(5001, async () => 
{
  console.log("Server-ul web express ruleaza pe port-ul 5001.");
  try 
  {
    await sequelize.authenticate();
    console.log("Conexiunea a fost stabilita!");
  } 
  catch (err) 
  {
    console.err("Conectarea la baza de date nu a reusit!", err);
  }
}
          );
