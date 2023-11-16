

const clock = document.querySelector("#clock")

const a = document.getElementById("local")
setInterval(() => {

    clock.innerHTML = new Date().toLocaleTimeString(); a.innerHTML = new Date().toLocaleDateString();

}, 1000);
