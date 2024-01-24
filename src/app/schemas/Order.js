import mongoose, { mongo } from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    user: {
      id: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },

    products: {
      id: {
        type: Number,
        required: true,
      },
      name: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Order", OrderSchema);
