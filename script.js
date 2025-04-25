document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const dashboard = document.getElementById("dashboard");
    const showRegister = document.getElementById("showRegister");
    const showLogin = document.getElementById("showLogin");
    const logout = document.getElementById("logout");

    showRegister.addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    });

    showLogin.addEventListener("click", (e) => {
        e.preventDefault();
        registerForm.style.display = "none";
        loginForm.style.display = "block";
    });

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Simple authentication (for demo purposes)
        if (username === "user" && password === "password") {
            loginForm.style.display = "none";
            dashboard.style.display = "block";
        } else {
            alert("Invalid login credentials!");
        }
    });

    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Registration successful! Please login.");
        registerForm.style.display = "none";
        loginForm.style.display = "block";
    });

    logout.addEventListener("click", () => {
        dashboard.style.display = "none";
        loginForm.style.display = "block";
    });
});
