document.getElementById("checkout-button").addEventListener("click", async () => {
  const response = await fetch("https://payment-app-8gu5.onrender.com/create-checkout-session", {
    method: "POST",
  });

  const data = await response.json();

  // Redirect to Stripe Checkout
  window.location.href = data.url;
});
