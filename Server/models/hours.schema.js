import mongoose from "mongoose";

// create a hours schema
const hoursSchema = new mongoose.Schema({
  monday: { type: String, required: true },
  tuesday: { type: String, required: true },
  wednesday: { type: String, required: true },
  thursday: { type: String, required: true },
  friday: { type: String, required: true },
  saturday: { type: String, required: true },
  sunday: { type: String, required: true },
  holiday:{ type: String, required: false }
});

// export the model
export const Hours = mongoose.model("Hours", hoursSchema);
