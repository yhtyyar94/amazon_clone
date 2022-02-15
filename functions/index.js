require("dotenv").config();
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51KTLopFaFY5u4ivSLpZKAeWa2TQC3CQaNYhSLOJlx0cixuAlZvKlF8MOx9vgOMIYxrz0XFod9rqlZkS8lT0bb59N00DFEhw1E6"
);

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
