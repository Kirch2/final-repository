const h2 = document.getElementById("click");
const expand = document.getElementById("expand");
h2.addEventListener("click", function () {
    if (expand.style.display === "none") {
        expand.style.display = "block"
    } else {
        expand.style.display = "none"
    }
})
