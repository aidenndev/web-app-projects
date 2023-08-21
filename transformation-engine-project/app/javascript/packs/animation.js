const menuSlide = () => {
  const sideBtn = document.querySelector('.side-button');
  const sideMenu = document.querySelector('.side-menu');
  const menuItems = document.querySelectorAll('.side-menu li');

  sideBtn.addEventListener('click', () => {
    //Toggle Menu
    sideMenu.classList.toggle('side-menu-active');

    //Animate items
    menuItems.forEach((item, index) => {
      if(item.style.animation) {
        item.style.animation = '';
      }
      else {
        item.style.animation = `menuFadeIn 0.5s ease forwards ${index/7 + 0.1}s`;
      }
    });

    //Side Button Animation
    sideBtn.classList.toggle('toggle');
    console.log("custom js file loaded");
  });
}
menuSlide();