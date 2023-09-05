document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get the username and password input values
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Check if the username and password are correct (for demonstration purposes, use a hardcoded check)
        if (username === "a" && password === "a") {
            window.location.href = "dashboard.html"; // Redirect to the dashboard page
        } else {
            alert("Invalid credentials. Please try again.");
        }
    });
});
