import { Experience } from "../Models/experience.js";
import { Op } from "sequelize";


const getAllExperiencesFromDB = async (req, res) => 
{
  try 
  {
    const experiences = await Experience.findAll();
    return res.status(200).json(experiences);
  } 
  catch (err) 
  {
    res.status(500).json(err);
  }
};

const getExperienceFromDBById = async (req, res) => 
{
  try 
  {
    const experience = await Experience.findByPk(req.params.idExperienta); 
    if (experience) 
    {
      return res.status(200).json(experience);
    } 
    else 
    {
      return res
        .status(404)
        .json({ error: `Experienta cu id-ul ${req.params.idExperienta} nu a fost gasita` });
    }
  } 
  catch (err) 
  {
    res.status(500).json(err);
  }
};

const insertExperienceIntoDB = async (req, res) => 
{
  try 
  {
    const newExperience = await Experience.create(req.body);
    return res.status(200).json(newExperience);
  } 
  catch (err) 
  {
    return res.status(500).json(err);
  }
};

const updateExperienceById = async (req, res) => 
{
  try 
  {
    const experience = await Experience.findByPk(req.params.idExperienta);
    if (experience) 
    {
      const updatedExperience = await experience.update(req.body); 
      return res.status(200).json(updatedExperience);
    } 
    else 
    {
      return res
        .status(404)
        .json({ error: `Experienta cu id-ul ${req.params.idExperienta} nu a fost gasita` });
    }
  } 
  catch 
  (err) 
  {
    res.status(500).json(err);
  }
};

const deleteExperience = async (req, res) => 
{
  try {
    const experience = await Experience.findByPk(req.params.idExperienta);
    if (experience) 
    {
      await experience.destroy();
      return res.status(200).json("Stergere reusita!");
    } 
    else 
    {
      return res
        .status(404)
        .json({ error: `Experienta cu id-ul ${req.params.idExperienta} nu a fost gasita` });
    }
  } 
  catch (err) 
  {
    res.status(500).json(err);
  }
};

export 
{
  getAllExperiencesFromDB,
  getExperienceFromDBById,
  insertExperienceIntoDB,
  updateExperienceById,
  deleteExperience
};
