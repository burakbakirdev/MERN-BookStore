import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      requred: true,
    },
    author: {
      type: String,
      requred: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
  },
  {
    timestaps: true,
  }
);

export const Book = mongoose.model("Books", bookSchema);
