import { User } from "../Models/user.js";
import { Op } from "sequelize";

const getAllUsersFromDB = async (req, res) => {
  try {
 
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getUserFromDBByMail = async (req, res) => 
{
  try 
  {
    const user = await Experience.findByPk(req.params.adresaMail); 
    if (user) 
    {
      return res.status(200).json(user);
    } 
    else 
    {
      return res
        .status(404)
        .json({ error: `Utilizatorul cu adresa de mail ${req.params.adresaMail} nu a fost gasit` });
    }
  } 
  catch (err) 
  {
    res.status(500).json(err);
  }
};

const insertUserIntoDB = async (req, res) => 
{
  try 
  {
    const newUser = await User.create(req.body);
    return res.status(200).json(newUser);
  } 
  catch (err) 
  {
    return res.status(500).json(err);
  }
};

const updateUserByMail = async (req, res) => 
{
  try 
  {
    const user = await User.findByPk(req.params.adresaMail);
    if (user) 
    {
      const updatedUser = await user.update(req.body);
      return res.status(200).json(updatedUser);
    } 
    else 
    {
      return res
        .status(404)
        .json({ error: `Utilizatorul cu adresa de mail ${req.params.adresaMail} nu a fost gasit` });
    }
  } 
  catch (err) 
  {
    res.status(500).json(err);
  }
};

const deleteUser = async (req, res) => 
{
  try 
  {
    const user = await User.findByPk(req.params.adresaMail); 
    if (user) 
    {
      await user.destroy();
      return res.status(200).json("Stergere reusita!");
    } else 
    {
      return res
        .status(404)
        .json({ error: `Utilizatorul cu adresa de mail ${req.params.adresaMail} nu a fost gasit.` });
    }
  } 
  catch (err) 
  {
    res.status(500).json(err);
  }
};

export 
{
  getAllUsersFromDB,
  getUserFromDBByMail,
  insertUserIntoDB,
  updateUserByMail,
  deleteUser
};
