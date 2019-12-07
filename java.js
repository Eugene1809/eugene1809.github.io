var m = 0;

function down(){
    window.scrollBy(0,900);
}

function menu(){
    m += 1;
    if (m % 2 == 1){
        document.querySelectorAll(".main").forEach(elem => elem.style.display = "none");
        document.querySelectorAll(".mainflex").forEach(elem => elem.style.display = "none");
        document.querySelector('.menu-phone').style.display = "flex";
    }
    else{
        document.querySelector('.menu-phone').style.display = "none";
        document.querySelectorAll(".main").forEach(elem => elem.style.display = "block");
        document.querySelectorAll(".mainflex").forEach(elem => elem.style.display = "flex");
    }
}