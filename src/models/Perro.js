import mongoose from "mongoose";

const perroSchema = new mongoose.Schema(
  {
    raza: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    caracteristicas: {
      type: String,
    },
    img: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Perro", perroSchema);
