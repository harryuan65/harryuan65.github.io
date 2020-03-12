// window.addEventListener('scroll', (e)=>{
//   console.log(window.scrollY)
// })

function scrollToAnchor(event){
   event.preventDefault();
   var anchor = event.target.getAttribute('href');
   if (anchor.className!='sub-anchor'){
     closeSubUls();
     openSubUl(event.target.parentNode.nextElementSibling);
   }
   var scrollTarget = document.getElementById(anchor.split('#')[1]);
   let y =scrollTarget.offsetTop;
   window.scrollTo({'behavior': 'smooth','top': y});
}
function closeSubUls(){
  document.querySelectorAll('ul.secondary').forEach(ul=>{
    ul.style.height = '0';
  });
}
function openSubUl(li){
  var sub_ul = li.firstElementChild;
  if(sub_ul){
    sub_ul.style.height = '120px';
  }
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