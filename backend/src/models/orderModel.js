const { Int32 } = require("mongodb");
const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  team: {
    type: String,
    required: true,
  },
  numOrder: {
    type: Int32,
    required: true,
    unique: true,
  },
  dat: {
    type: Date,
    required: true,
  },
  estimatedTime: {
    type: Int32,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  activity: {
    type: String,
    required: true,
  },
  suggestions: {
    type: String,
    required: true,
  },
  realTime: {
    type: Int32,
    required: true,
  },
  activityFinished: {
    type: Boolean,
    required: true,
  },
  notes: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('workOrderData', orderSchema);