// handle nav bar
class Nav {
 static global() {
  // select side nav icon
  Nav.sidNavIcon = document.getElementById('sideNavIcon');
  // select menu close icon
  Nav.menuIcon = document.getElementById('menuIcon');
  // select search icon
  Nav.searchIcon = document.getElementById('navSearch');
  Nav.NavToggle = true;
  Nav.searchToggle = true;
  // last scroll top
  Nav.lastScoll = window.pageYOffset;
 }

 // toggle side nav
 static toggleNav(e) {
  const menu = document.getElementById('sideNav');
  if (e.target.classList.contains('clickSideNavIcon')) {

   if (Nav.NavToggle) {
    menu.classList.add('activeSideNav');
    // die
    Nav.NavToggle = false;
   } else {
    menu.classList.remove('activeSideNav');
    // loop
    Nav.NavToggle = true;
   }
  }
 }

 // close menu
 static closeMenu(e) {
  if (e.target.classList.contains('closeMenu')) {
   const btn = document.querySelector('.clickSideNavIcon');
   btn.click();
  }
 }

 // toggle search bar
 static toggleSearch(e) {
  const input = document.querySelector('#navSearch input');
  if (e.target.classList.contains('clickSearch')) {

   if (Nav.searchToggle) {
    input.classList.add('activeSearch');
    // die
    Nav.searchToggle = false;
   } else {
    input.classList.remove('activeSearch');
    // loop
    Nav.searchToggle = true;
   }
  }
 }

 // show scroll icon
 static showScrollTop(e) {
  // select container
  const container = document.getElementById('scrollTop');
  // current scroll top
  const current = window.pageYOffset;

  if (current > Nav.lastScoll) { // scroll down
   container.classList.add('activeScroll');
  } else { // scroll up
   container.classList.remove('activeScroll');
  }
  // update 
  Nav.lastScoll = (current <= 0) ? 0 : current;
 }

}

// handle form
class Form {
 static global() {
  Form.myForm = document.getElementById("myForm");
 }

 // form submitssion
 static SubmitForm(e) {
  // prevent reloading
  e.preventDefault();

  // select form fields
  const form = document.getElementById('myForm');
  const selector = (id) => document.getElementById(id).value.trim();

  // get form data for the backend
  const data = {
   name: selector('nameInput'),
   mail: selector('mailInput'),
   msg: selector('msgInput')
  };
  console.log(data);

  //! reset
  form.reset();

 }

}

// init 
Nav.global();
Form.global();

//! EVENTS
//* NAV
// show scroll top
window.addEventListener("scroll", Nav.showScrollTop);
// handle side nav (show/hide)
Nav.sidNavIcon.addEventListener('click', Nav.toggleNav);
// close menu
Nav.menuIcon.addEventListener('click', Nav.closeMenu);
window.addEventListener('resize', () => {
 const btn = document.querySelector('.clickSideNavIcon');
 const menu = document.getElementById('sideNav');
 if ((window.matchMedia("(min-width: 768px)").matches) && (menu.classList.contains("activeSideNav"))) btn.click();
});
// handle search bar (show/hide)
Nav.searchIcon.addEventListener('click', Nav.toggleSearch);

//* FORM
// handle form submission
Form.myForm.addEventListener('submit', Form.SubmitForm);