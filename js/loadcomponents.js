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

    const includes = {
    "docker-section": "cs-sections/docker.html",
    "git-section": "cs-sections/git.html",
    "vi-section": "cs-sections/vi.html",
    "restic-section": "cs-sections/restic.html",
    "ansible-section": "cs-sections/ansible.html",
    "tf-section": "cs-sections/terraform.html",
    "awscli-section": "cs-sections/awscli.html",
    "virsh-section": "cs-sections/virsh.html", 
    "postfix-section": "cs-sections/postfix.html",
    "openssl-section": "cs-sections/openssl.html",
    "checkmk-section": "cs-sections/checkmk.html",
    "misc-section": "cs-sections/misc.html",
    // Add more sections as needed
    };

    for (const [id, file] of Object.entries(includes)) {
        const target = document.getElementById(id);
        if (target) {
        fetch(file)
            .then(res => res.text())
            .then(html => {
            target.innerHTML = html;
            });
        }
    }
});
