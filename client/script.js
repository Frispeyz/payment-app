const BACKEND_URL = "https://payment-app-1-g5ja.onrender.com";

document.getElementById("checkout-button").addEventListener("click", async () => {
  try {
    const response = await fetch(`${BACKEND_URL}/create-checkout-session`, {
      method: "POST",
    });

    const data = await response.json();

    // Redirect to Stripe Checkout
    window.location.href = data.url;

  } catch (error) {
    console.error("Error:", error);
    alert("Payment failed. Try again.");
  }
});