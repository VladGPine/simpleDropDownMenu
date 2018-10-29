var elems = document.querySelectorAll('.menu-item');

elems.forEach(elem => {
  var dropMenu = elem.querySelector('.dropdown-menu');
  var dropMenuItems = dropMenu.querySelectorAll('li');

  function toDropMenu(event) {
    console.log(event.target);
    dropMenu.classList.toggle('dropped');
  }

  function toCloseMenu() {
    if (dropMenu.classList.contains('dropped')) dropMenu.classList.remove('dropped');
  }

  elem.addEventListener('click', toDropMenu);
  dropMenuItems.forEach(a => {
    a.addEventListener('mouseout', toCloseMenu);
  })
})
