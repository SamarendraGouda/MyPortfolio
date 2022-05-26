const main2 = document.getElementsByClassName("main-2");
const main0 = document.getElementsByClassName("main-0");
const hello = document.getElementsByClassName("hello");
var html = document.getElementById("html");

anime({
    targets: hello,
    backgroundColor: '#000',
    direction: 'alternate' ,
    easing: 'easeInOutExpo',
    delay: 1000,

})

anime({
    targets: hello,
    color: '#000',
    easing: 'linear',
    delay: 2000,
})

html.addEventListener("mouseover",function(e){
    e.backgroundColor= '#fff';
    e.innerHTML = 'HTML';


})