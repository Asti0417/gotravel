//show1
let btn1=document.querySelector("#show1");
let infoModal01=document.querySelector("#infoModal01");
let close1=document.querySelector("#close1");
btn1.addEventListener("click", function(){
    infoModal01.showModal();
})
close1.addEventListener("click", function(){
    infoModal01.close();
})