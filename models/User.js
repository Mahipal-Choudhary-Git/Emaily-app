import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    googleId: String,
    userName: String,
});

export default mongoose.model("users", userSchema);
