import { Router } from "express";
import { requireCredits, requireLogin } from "../middlewares";
import surveyModel from "../models/Survey.js";
import Mailer from "../services/Mailer.js";
import surveyTemplate from "../services/templates/surveyTemplate.js";
const surveyRoutes = Router();

surveyRoutes.get("/api/survey/thanks", (req, res) => {
    res.send("Thanks for Voting!");
});

surveyRoutes.post(
    "/api/survey",
    requireLogin,
    requireCredits,
    async (req, res) => {
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
        try {
            const mailer = new Mailer(survey, surveyTemplate(survey));
            await mailer.send();
            await survey.save();
            req.user.credits -= 1;
            const user = await req.user.save();
            res.send(user);
        } catch (error) {
            res.status(422).send(error);
        }
    }
);

export default surveyRoutes;
