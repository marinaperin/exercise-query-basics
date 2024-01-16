import mongoose, { Schema, SchemaTypes, model } from "mongoose";

const bookSchema = new Schema({
  title: String,
  author: {
    type: SchemaTypes.ObjectID,
    ref: "Author",
    required: true,
  },
  year: Number,
});

const bookModel = model("Book", bookSchema);

export default bookModel;
