import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        googleId: String,
        userName: String,
        credits: { type: Number, default: 0 },
        email: String,
        profileImage: String,
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("users", UserSchema);
