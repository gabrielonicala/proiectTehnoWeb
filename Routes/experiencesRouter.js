import express from "express";
import * as experiencesController from "../Controllers/experiencesController.js";

const router = express.Router();

router.get("/experiences", experiencesController.getAllExperiencesFromDB);
router.post("/newExperience", experiencesController.insertExperienceIntoDB);
router.get("/experiences/:idExperienta", experiencesController.getExperienceFromDBById);
router.put("/experiences/:idExperienta", experiencesController.updateExperienceById); 
router.delete("/experiences/:idExperienta", experiencesController.deleteExperience); 

export { router as experiencesRouter };
