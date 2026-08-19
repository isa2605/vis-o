document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn");
  const chart = document.getElementById("snellen-chart");
  const blindOverlay = document.getElementById("blindness-screen");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const visionType = button.getAttribute("data-vision");

      chart.className = "snellen-chart";
      blindOverlay.classList.remove("active");

      if (visionType === "cegueira") {
        blindOverlay.classList.add("active");
      } else {
        chart.classList.add(`vision-${visionType}`);
      }
    });
  });
});
