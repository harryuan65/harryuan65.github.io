window.addEventListener('scroll', (e)=>{
  console.log(window.scrollY)
})

function scrollToAnchor(event){
   event.preventDefault();
   var anchor = event.target.getAttribute('href');
   var scrollTarget = document.getElementById(anchor.split('#')[1]);
   let y =scrollTarget.offsetTop;
   window.scrollTo({'behavior': 'smooth','top': y});
}
function toggleNav(){
  var nav = document.getElementById("nav"),
  toggler = document.getElementById("nav-entry");
  if(parseInt(nav.style.width.split('px')[0]) > 0){
    nav.style.width = '0';
    toggler.style.color = 'rgba(54,54,54,.8)';
  }else{
    nav.style.width = '25%';
    toggler.style.color = '#d8d8d8';
  }
}