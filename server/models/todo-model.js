import { model, Schema } from "mongoose";

const todoModel = Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  isCompleted: {
    type: Boolean,
    default: false,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

export default model("Todo", todoModel);
