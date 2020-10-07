document.addEventListener('DOMContentLoaded', (e)=>{
  document.getElementById('input-search-bar').onfocus = (e)=>{
    e.target.parentNode.parentNode.classList.add('focused');
    e.target.parentNode.classList.add('expand');
    document.getElementById('wrap-search-history').classList.add('show');
  }
  document.getElementById('input-search-bar').onblur = (e)=>{
    e.target.parentNode.parentNode.classList.remove('focused');
    e.target.parentNode.classList.remove('expand');
    setTimeout(()=>{
      document.getElementById('wrap-search-history').classList.remove('show');
    }, 500)
  }
  console.log('%c This is one of Harry\'s portfolio, not spam', 'background: #222; color: #bada55');
})