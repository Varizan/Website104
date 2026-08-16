document.addEventListener("DOMContentLoaded", function () {

    const menuButton =
        document.getElementById("menuButton");

    const navMenu =
        document.getElementById("navMenu");


    /* ==============================
       MENU MOBILE
    ============================== */

    if (menuButton && navMenu) {

        menuButton.addEventListener(
            "click",
            function () {

                navMenu.classList.toggle("active");

            }
        );


        /* Tutup menu setelah link diklik */

        const navLinks =
            navMenu.querySelectorAll("a");


        navLinks.forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    navMenu.classList.remove(
                        "active"
                    );

                }
            );

        });

    }


    /* ==============================
       ESCAPE UNTUK TUTUP MENU
    ============================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                if (navMenu) {

                    navMenu.classList.remove(
                        "active"
                    );

                }

            }

        }
    );

});