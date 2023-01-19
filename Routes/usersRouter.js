import express from "express";
import * as usersController from "../Controllers/usersController.js";

const router = express.Router();

router.get("/utilizatori", usersController.getAllUsersFromDB);
router.post("/utilizatorNou", usersController.insertUserIntoDB);
router.get("/utilizatori/:adresaMail", usersController.getUserFromDBByMail);
router.put("/utilizatori/:adresaMail", usersController.updateUserByMail); 
router.delete("/utilizatori/:adresaMail", usersController.deleteUser); 

export { router as usersRouter };
