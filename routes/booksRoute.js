import express from "express";
import bookModel from "../models/bookModel.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const books = await bookModel.find().populate("author", "name");
    res.send(books);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookModel
      .findById(id)
      .populate("author", ["name", "age", "sex", "nationality"]);
    res.send(book);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const book = await bookModel.create(req.body);
    res.send(book);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await bookModel.findByIdAndUpdate(id, req.body);
    const book = await bookModel.findById(id);
    res.send(book);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await bookModel.findByIdAndDelete(id);
    res.send(`Book with id: ${id} has been successfully deleted`);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

export default router;
