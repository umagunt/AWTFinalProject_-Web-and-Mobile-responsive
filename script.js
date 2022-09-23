function hide(){
    var x = document.getElementById("response");
    x.style.display = "none";
}
function show(){
    var x = document.getElementById("response");
    x.style.display = "block";
    document.getElementById("contact").reset();
}

function cancel() {
    document.getElementById("contact").reset();
}