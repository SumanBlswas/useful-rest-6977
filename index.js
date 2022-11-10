document.querySelector(".rivv>button").addEventListener("click", does);

function does() {
    let x = document.querySelector("#i1").value;
    let y = document.querySelector(".m").value;
    let z = document.querySelector(".n").value;
    let p = document.querySelector("#i3").value;

    if (x != "" && y != "" && z != "" && p != "") {
        localStorage.setItem("Going-to", x);
        localStorage.setItem("Star-Date", y);
        localStorage.setItem("End-Date", z);
        localStorage.setItem("Person-Count", p);
        window.open("sign_in.html");
    } else {
        alert("Pls fill the inputs correctly!");
    }

    document.querySelector("#i1").value = "";
    document.querySelector(".m").value = "";
    document.querySelector(".n").value = "";
    document.querySelector("#i3").value = "";
}