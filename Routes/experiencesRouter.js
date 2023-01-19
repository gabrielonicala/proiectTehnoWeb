import express from "express";
import * as experiencesController from "../Controllers/experiencesController.js";

const router = express.Router();

router.get("/experiente", experiencesController.getAllExperiencesFromDB);
router.post("/experientaNoua", experiencesController.insertExperienceIntoDB);
router.get("/experiente/:idExperienta", experiencesController.getExperienceFromDBById);
router.put("/experiente/:idExperienta", experiencesController.updateExperienceById); 
router.delete("/experiente/:idExperienta", experiencesController.deleteExperience); 

export { router as experiencesRouter };
