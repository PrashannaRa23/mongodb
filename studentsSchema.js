//import mongoose from 'mongoose';
const mongoose = require("mongoose") 
const { Schema } = mongoose;

  const studentsSchema = new Schema({
    sname: String,
    regno: Number,
    marks:  Number
  });
  module.exports = mongoose.model("std", studentsSchema, "SL-students-list")