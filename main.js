'use strict';

{
  function inViewCallback(entries,obs) {
  	entries.forEach(function(entry){
  		if(!entry.isIntersecting) {
  			return;
  		}
  		entry.target.classList.add('appear');
   	})
   	obs.unobserve(entry.target);
  }

  function onScrolledCallback(entries) {
  	entries.forEach(function(entry){
  		if(!entry.isIntersecting) {
  			header.classList.add('scrolled');
  			toTop.classList.add('scrolled');
  		} else {
  			header.classList.remove('scrolled');
  			toTop.classList.remove('scrolled');
  		}
  	})
  }

  const header = document.querySelector('header');
  const toTop = document.querySelector('.to_top');

  const inViewObserver = new IntersectionObserver(inViewCallback,{threshold:0.2});

  document.querySelectorAll('.animate').forEach(function(el){
  	inViewObserver.observe(el);
  })

  toTop.addEventListener('click',function(e){
  	e.preventDefault();

  	window.scrollTo({
  		top:0,
  		behavior:'smooth'
  	})
  })


  const onScrolledObserver = new IntersectionObserver(onScrolledCallback);

  onScrolledObserver.observe(document.querySelector('.target'));  
}
