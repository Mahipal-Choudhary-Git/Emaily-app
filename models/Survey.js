import mongoose from "mongoose";

import RecipientSchema from "./Recipient.js";

const SurveySchema = new mongoose.Schema(
    {
        title: String,
        body: String,
        subject: String,
        recipients: [RecipientSchema],
        yes: { type: Number, default: 0 },
        no: { type: Number, default: 0 },
        _user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("surveys", SurveySchema);
