const menu = document.querySelector('.main-menu');
const menuItems = menu.querySelectorAll('.menu-item');
const dropMenu = menu.querySelectorAll('.dropdown-menu');

function handler(event) {
  let target = event.target;
  
  if (!target.className =='menu-item') {
    return;
  } else {
    target.nextElementSibling.classList.add('dropped');
  }
}

function toCloseMenu() {
  dropMenu.forEach(el => {
    if (el.classList.contains('dropped')) {
      el.classList.remove('dropped');
    }
  })
}

menu.addEventListener('click', handler);
menuItems.forEach(el => {
  el.addEventListener('mouseleave', toCloseMenu)
})

// console.log(menu);