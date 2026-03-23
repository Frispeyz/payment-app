alert("JS LOADED");
document.getElementById("checkout-button").addEventListener("click", async () => {
  try {
    const response = await fetch("https://payment-app.onrender.com/create-checkout-session", {
      method: "POST",
    });

    const data = await response.json();

    window.location.href = data.url;
  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong. Check console.");
  }
});
