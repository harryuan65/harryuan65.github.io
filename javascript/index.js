// window.addEventListener('scroll', (e)=>{
//   console.log(window.scrollY)
// })
function scrollToAnchor(event){
   event.preventDefault();
   var a = event.target;
   var anchor = a.getAttribute('href');
   if (a.className!='sub-anchor'){
     closeSubUls();
     var sub_ul = a.parentNode.nextElementSibling;
     if (sub_ul){
       openSubUl(sub_ul);
     }
   }
    var target_id = anchor.split('#')[1];
    var scrollTarget = document.getElementById(target_id);
    console.log(scrollTarget)
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
  closeSubUls();
  var nav = document.getElementById("nav"),
  toggler = document.getElementById("nav-entry");
  if(parseInt(nav.style.width.split('px')[0]) > 0){
    nav.style.width = '0';
    toggler.style.color = 'rgba(54,54,54,.8)';
  }else{
    nav.style.width = '400px';
    toggler.style.color = '#d8d8d8';
  }
}

function closeNav(){
  closeSubUls();
  var nav = document.getElementById("nav"),
  toggler = document.getElementById("nav-entry");
  nav.style.width = '0';
  toggler.style.color = 'rgba(54,54,54,.8)';
}