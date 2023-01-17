import express from "express";
import * as usersController from "../Controllers/usersController.js";

const router = express.Router();

router.get("/users", usersController.getAllUsersFromDB);
router.post("/newUser", usersController.insertUserIntoDB);
router.get("/users/:adresaMail", usersController.getUserFromDBByMail);
router.put("/users/:adresaMail", usersController.updateUserByMail); 
router.delete("/users/:adresaMail", usersController.deleteUser); 

export { router as usersRouter };
