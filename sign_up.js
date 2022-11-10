document.querySelector("span").addEventListener("click", wake);
let state = false;

function wake() {
    if (state) {
        document.querySelector(".i4").setAttribute("type", "password");
        state = false;
    } else {
        document.querySelector(".i4").setAttribute("type", "text");
        state = true;
    }
}
document.querySelector("button").addEventListener("click", work);
function work() {
    let x = document.querySelector(".i1").value;
    let y = document.querySelector(".i2").value;
    let z = document.querySelector(".i3").value;
    let p = document.querySelector(".i4").value;

    if (x != "" && y != "" && z != "" && p != "") {
        localStorage.setItem('email', x);
        localStorage.setItem('first_name', y);
        localStorage.setItem('last_name', z);
        localStorage.setItem('password', p);
        window.location.assign("sign_in.html");
    }else{
        alert("Kindly fill all the details correctly!")
    }
}