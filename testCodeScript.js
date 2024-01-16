import dotenv from "dotenv";
import mongoose from "mongoose";
import authorModel from "./models/authorModel.js";
import bookModel from "./models/bookModel.js";

dotenv.config();
const { MONGO_URI } = process.env;

const testCode = async () => {
  await mongoose.connect(MONGO_URI);

  const author = new authorModel({
    name: "Anna Bello",
    age: 40,
    sex: "Female",
    nationality: "Hungary",
    address: {
      street: "Bratislav street",
      number: 10,
      city: "Budapest",
      country: "Hungary",
    },
  });

  await author.save();

  console.log(author);
};

testCode();
