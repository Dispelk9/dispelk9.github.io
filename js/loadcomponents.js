document.addEventListener("DOMContentLoaded", function () {
    // Load Head
    fetch("head.html")
        .then(response => response.text())
        .then(html => {
            document.head.innerHTML += html;
        });

    // Load Navbar
    fetch("navbar.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("navbar-container").innerHTML = html;
        });
});
