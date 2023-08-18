function changeBg (){
let Navbar = document.getElementById('Items')
let scrollValue = window.scrollY;
console.log(scrollValue)
if ( scrollValue <= 200){
    Navbar.classList.remove('backtransparent');
    

}
else{
   Navbar.classList.add('backtransparent');
}
}
window.addEventListener('scroll', changeBg);