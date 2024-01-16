import express from "express";
import authorModel from "../models/authorModel.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const authors = await authorModel.find();
    res.send(authors);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const author = await authorModel.findById(id);
    res.send(author);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const author = await authorModel.create(req.body);
    res.send(author);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await authorModel.findByIdAndUpdate(id, req.body);
    const author = await authorModel.findById(id);
    res.send(author);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await authorModel.findByIdAndDelete(id);
    res.send(`Author with id: ${id} has been successfully deleted`);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

export default router;
