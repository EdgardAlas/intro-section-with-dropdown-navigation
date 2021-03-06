import 'minireset.css';
import './style.css';
import arrowUp from '../images/icon-arrow-up.svg';
import arrowDown from '../images/icon-arrow-down.svg';

console.log(arrowUp, arrowDown);

const navItemsList = document.querySelector('.navbar__item-list');
const menuButton = document.querySelector<HTMLInputElement>('#menu-button');
const overlay = document.querySelector<HTMLDivElement>('.overlay');
const closeMenuButton = document.querySelector<HTMLButtonElement>(
  '.navbar__close-menu'
);

const dropdownClasses: string[] = ['navbar__item-with-button'];

document.documentElement.addEventListener('click', () => {});

closeMenuButton?.addEventListener('click', toggleHideMenu);

menuButton?.addEventListener('change', toggleHideMenu);

navItemsList?.addEventListener('click', openDropdown);

overlay?.addEventListener('click', toggleHideMenu);

function toggleHideMenu() {
  overlay?.classList.toggle('overlay--show');
}

function openDropdown(e: Event) {
  e.stopPropagation();
  const element = e.target as Element;
  const isButton = dropdownClasses.includes(element.classList[0]);

  if (isButton) {
    const subMenuList = element.nextElementSibling;
    const imageDropdown = element.firstElementChild
      ?.firstElementChild as HTMLImageElement;
    if (imageDropdown.dataset.up === '0') {
      imageDropdown.dataset.up = '1';
      imageDropdown.src = arrowUp;
    } else {
      imageDropdown.dataset.up = '0';
      imageDropdown.src = arrowDown;
    }

    subMenuList?.classList.toggle('navbar__sub-item-list--hide');
  }
}
