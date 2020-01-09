'use strict';

// DOM loaded
document.addEventListener('DOMContentLoaded', function (){
  // Get all links
  const $links = document.links;

  // Iterate on all to add _blank target
  for (var i = 0, linksLength = $links.length; i < linksLength; i++) {
    if ($links[i].hostname != window.location.hostname) {
      $links[i].target = '_blank';
    } 
  }

  // Get all "navbar-burger" elements
  const $navbarBurgers = document.querySelectorAll('.navbar-burger');

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach(function (el){
      el.addEventListener('click', function (){
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});
