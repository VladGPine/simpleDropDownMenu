var elems = document.querySelectorAll('.menu-item');

elems.forEach(elem => {
  var dropMenuItems = elem.querySelector('.dropdown-menu');

  function dropMenu() {
    dropMenuItems.classList.toggle('dropped');

  }

  function closeMenu() {
    if (dropMenuItems.classList.contains('dropped')) {
      dropMenuItems.classList.remove('dropped');
    }
  }

  elem.addEventListener('mouseover', dropMenu);
  elem.addEventListener('mouseout', closeMenu);
})
