import { Router } from "express";
import { requireCredits, requireLogin } from "../middlewares";
import surveyModel from "../models/Survey";
const surveyRoutes = Router();

surveyRoutes.post("/api/survey", requireLogin, requireCredits, (req, res) => {
    const { title, recipients, body, subject } = req.body;
    const survey = new surveyModel({
        title,
        body,
        subject,
        recipients: recipients
            .split(",")
            .map((email) => ({ email: email.trim() })),
        _user: req.user.id,
    });
});

export default surveyRoutes;
