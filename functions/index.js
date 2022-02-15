require("dotenv").config();
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.stripeSecretKey);

// API

// App config
const app = express();
// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
// Api routes

app.get("/", (req, res) => res.status(200).send("Hello World"));
app.post("/payments/create", async (req, res) => {
  const { total } = req.query;
  console.log("Payment request recieved ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-5cbfd/us-central1/api
