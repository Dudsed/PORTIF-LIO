
const linksMenu = document.querySelectorAll("nav a");

linksMenu.forEach(function(link) {
    link.addEventListener("click", function() {
        linksMenu.forEach(function(item) {
            item.classList.remove("selecionado");
        });

        link.classList.add("selecionado");
    });
});
