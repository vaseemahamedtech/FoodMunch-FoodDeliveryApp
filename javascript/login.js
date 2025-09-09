document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.querySelector("#username").value.trim();
    const password = document.querySelector("#password").value.trim();

    if (username === "") {
        alert("Please enter your username.");
        return;
    }

    if (password === "") {
        alert("Please enter your password.");
        return;
    }

    alert(`Welcome, ${username}!`);

    document.querySelector("form").reset();
    window.location.href = "index.html";
});