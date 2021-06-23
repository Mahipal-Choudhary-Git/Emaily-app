import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        googleId: String,
        userName: String,
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("users", userSchema);
