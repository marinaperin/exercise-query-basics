import mongoose, { Schema, SchemaTypes, model } from "mongoose";

const addressSchema = new Schema({
  street: String,
  number: Number,
  city: String,
  country: String,
});

const authorSchema = new Schema({
  name: String,
  age: Number,
  sex: String,
  nationality: String,
  address: addressSchema,
});

const authorModel = model("Author", authorSchema);

export default authorModel;
