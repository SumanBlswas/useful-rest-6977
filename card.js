function index() {
    window.location.href = "index.html";
}

function change() {
    window.location.href = "sign_in.html";
}

document.querySelector("#li>button").addEventListener("click", card);

function card() {
    let x = document.querySelector("#lev");
    let value = x.options[x.selectedIndex].text;
    let y = document.querySelector("#ol input").value;
    
    if(x != "" && y != "" && y.length==10){
        localStorage.setItem("Country_code", value);
        localStorage.setItem("Phone_no", y);

        let f = document.querySelector("#ol input");
        f.style.borderColor="black";
        f.style.backgroundColor="white";
        f.style.color="black";
        f.value="";

        alert("You Will Recieve The Application Link Shortly");
    }else{
        let f = document.querySelector("#ol input");
        f.style.borderColor="red";
        f.style.color="red";

        alert("Please Fill The Mobile Number !")
    }
}

document.querySelector("#ol input").addEventListener("click", reset);

function reset(){
    let f = document.querySelector("#ol input");
    f.style.borderColor="black";
    f.style.backgroundColor="white";
    f.style.color="black";
}