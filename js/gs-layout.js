/* Gestiona Seguro · comportamiento de la barra superior común */
(function(){
  var nav=document.getElementById('navbar'),btn=document.getElementById('hamburger'),links=document.getElementById('navLinks');
  if(!nav||!btn||!links)return;
  window.addEventListener('scroll',function(){nav.classList.toggle('scrolled',window.scrollY>40);});
  btn.addEventListener('click',function(){var o=links.classList.toggle('open');btn.setAttribute('aria-expanded',String(o));});
  links.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){links.classList.remove('open');btn.setAttribute('aria-expanded','false');});});
})();
