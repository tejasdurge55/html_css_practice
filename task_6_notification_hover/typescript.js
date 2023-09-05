document.addEventListener("DOMContentLoaded", function () {
    var loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        // Get the username and password input values
        var usernameInput = document.getElementById("username");
        var passwordInput = document.getElementById("password");
        var username = usernameInput.value;
        var password = passwordInput.value;
        // Check if the username and password are correct (for demonstration purposes, use a hardcoded check)
        if (username === "a" && password === "a") {
            window.location.href = "dashboard.html"; // Redirect to the dashboard page
        }
        else {
            alert("Invalid credentials. Please try again.");
        }
    });
});
