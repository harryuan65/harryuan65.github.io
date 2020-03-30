// window.onload = ()=>{
//   document.getElementById('current-slide').innerHTML='1';
//   document.getElementById('total-slides').innerHTML= document.querySelectorAll('.pic').length;
//   document.querySelectorAll('.a-slider').forEach(e=>e.addEventListener('click', function(){
//     var id = this.getAttribute('id').split('-')[2];
//     document.getElementById('current-slide').innerHTML = id;
//     document.getElementById('wrap-img').style.left = `${(-(parseInt(id)-1))*600}px`;
//   }))
//   document.getElementById('btn-slider-1').click()
// }