import { Router } from "express";
import stripe from "stripe";

import keys from "../config/keys.js";
import requireLogin from "../middlewares/requireLogin.js";

const stripeConfig = stripe(keys.stripeSecretKey);
const billingRoute = Router();
billingRoute.post("/api/stripe", requireLogin, async (req, res) => {
    await stripeConfig.charges.create({
        amount: 500,
        currency: "inr",
        description: "$5 for 5 credits",
        source: req.body.id,
    });
    req.user.credits += 5;
    const user = await req.user.save();
    res.send(user);
});

export default billingRoute;
