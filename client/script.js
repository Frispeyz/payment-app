document.getElementById("checkout-button").addEventListener("click", async () => {
  try {
    const response = await fetch("http://localhost:4242/create-checkout-session", {
      method: "POST",
    });

    const data = await response.json();

    // Redirect to Stripe Checkout
    window.location.href = data.url;

  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong.");
  }
});