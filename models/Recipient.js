import mongoose from "mongoose";

const RecipientSchema = new mongoose.Schema({
    email: String,
    responded: { type: Boolean, default: false },
    response: { type: String, default: "" },
});

export default RecipientSchema;
