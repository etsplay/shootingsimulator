(function(){
const btn=document.querySelector('.menu-toggle');
const nav=document.getElementById('nav-menu');
if(!btn||!nav) return;
btn.addEventListener('click',()=>{
const active=nav.classList.toggle('active');
btn.setAttribute('aria-expanded',active);
});
})();