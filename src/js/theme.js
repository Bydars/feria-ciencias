const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("Day");

    themeToggle.textContent = document.body.classList.contains("Day") ?"🌙" : "🌞";
});
