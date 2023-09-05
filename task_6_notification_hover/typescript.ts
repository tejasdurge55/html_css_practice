document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form") as HTMLFormElement;

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Get the username and password input values
        const usernameInput = document.getElementById("username") as HTMLInputElement;
        const passwordInput = document.getElementById("password") as HTMLInputElement;

        const username = usernameInput.value;
        const password = passwordInput.value;

        // Check if the username and password are correct (for demonstration purposes, use a hardcoded check)
        if (username === "a" && password === "a") {
            window.location.href = "dashboard.html"; // Redirect to the dashboard page
        } else {
            alert("Invalid credentials. Please try again.");
        }
    });
});
