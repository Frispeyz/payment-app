import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

// ✅ Use environment variable for Stripe key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// ✅ Middleware
app.use(cors({
  origin: "*", // allow all (you can restrict later)
}));
app.use(express.json());

// ✅ Create Checkout Session route
app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",

      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "$1 Test Item",
            },
            unit_amount: 100, // $1.00
          },
          quantity: 1,
        },
      ],

      // ✅ Dynamic URLs from environment
      success_url: `${process.env.DOMAIN}/success.html`,
      cancel_url: `${process.env.DOMAIN}/cancel.html`,
    });

    res.json({ url: session.url });

  } catch (error) {
    console.error("Stripe Error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// ✅ REQUIRED for deployment (Render, Railway, etc.)
const PORT = process.env.PORT || 4242;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});