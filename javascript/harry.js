window.onload = ()=>{
  window.scrollTo({'behavior': 'smooth','top': 0});
}
function scrollToAnchor(event){
   var a = event.target;
   var anchor = a.getAttribute('href');
   if (a.className!='sub-anchor'){
     closeSubUls();
     var sub_ul = a.parentNode.nextElementSibling;
     if (sub_ul){
       openSubUl(sub_ul);
     }
   }
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
  detectSwitchMeView();
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
  detectSwitchMeView();
  var nav = document.getElementById("nav"),
  toggler = document.getElementById("nav-entry");
  nav.style.width = '0';
  toggler.style.color = 'rgba(54,54,54,.8)';
}

function detectSwitchMeView(){
  //wait for nav animation ends then compute container width
  setTimeout(function(){
    var container = document.getElementById('container'),
    sectionBodyMe = document.getElementById('me-section-body'),
    name = document.getElementById('name');
    containerWidth = parseInt(window.getComputedStyle(container).width.split('px')[0])

    console.log(containerWidth)
    if(containerWidth < 1200){
      if(!sectionBodyMe){return}
      sectionBodyMe.style.flexDirection='column';
      sectionBodyMe.style.justifyContent='center';
      sectionBodyMe.style.alignItems='center';
      name.style.marginTop = '40px'
      name.style.fontSize = '40px'
    }
    else{
      sectionBodyMe.style.flexDirection='row';
      sectionBodyMe.style.alignItems='center';
      name.style.marginTop = '0px'
      name.style.fontSize = '50px'
    }
  },500)
}