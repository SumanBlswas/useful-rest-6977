document.querySelector("span").addEventListener("click", wake);
let state = false;

function wake(){
    if(state){
        document.querySelector(".i6").setAttribute("type", "password");
        state = false;
    }else{
        document.querySelector(".i6").setAttribute("type", "text");
        state = true;
    }
}

document.querySelector("button").addEventListener("click", done);
function done() {
    let x = document.querySelector(".i5").value;
    let y = document.querySelector(".i6").value;

    if (x == localStorage.getItem("email") && y == localStorage.getItem("password")) {
        alert("Sign In Successful! Welcome to Travel-Hut Family!");
        window.location.replace("index.html");
    } else {
        alert("Your Input is Wrong. Pls Try Again!");
        document.querySelector(".i5").value = "";
        document.querySelector(".i6").value = "";
    }
}

