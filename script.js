document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("checkout-button");

  console.log("Button found:", button); // DEBUG

  button.addEventListener("click", async () => {
    console.log("Button clicked"); // DEBUG

    try {
      const response = await fetch("https://payment-app-8gu5.onrender.com/create-checkout-session", {
        method: "POST",
      });

      console.log("Response:", response); // DEBUG

      const data = await response.json();

      console.log("Data:", data); // DEBUG

      window.location.href = data.url;
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Check console.");
    }
  });
});
