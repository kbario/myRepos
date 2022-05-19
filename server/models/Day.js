const { Schema, model, SchemaTypes } = require("mongoose");

const cardSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  meals: [
    {
      type: SchemaTypes.ObjectId,
      ref: "Recipe",
    },
  ],
});

const daySchema = new Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    cards: [cardSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Day = model("Day", daySchema);

module.exports = Day;
