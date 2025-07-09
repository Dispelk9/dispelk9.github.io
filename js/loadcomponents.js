document.addEventListener("DOMContentLoaded", function () {
    // Load Head
    fetch("head.html").then(response => response.text()).then(html => {
            document.head.innerHTML += html;
    });

    fetch("navbar.html").then(res => res.text()).then(html => {
        document.getElementById("navbar-container").innerHTML = html;

        // Re-initialize dropdowns (Bootstrap 5 does this automatically only on load)
        var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
        dropdownElementList.map(function (dropdownToggleEl) {
            new bootstrap.Dropdown(dropdownToggleEl);
        });
    });
});
