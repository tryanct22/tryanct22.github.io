console.log("this page is connected")

const menuElement = document.querySelector('.menu');

const menuOpenButton = document.getElementById('menu-hamburger');
menuOpenButton.addEventListener('click', openMenu);

function openMenu() {
  menuElement.classList.add('menu-open');
}

const menuCloseButton = document.getElementById('menu-close');
menuCloseButton.addEventListener("click", closeMenu);

function closeMenu() {
  menuElement.classList.remove('menu-open');
}


// form functionality
const submitButton = document.querySelector('#send-it')

submitButton.addEventListener('click', (event) => {
  // event.preventDefault() // prevents the form from reloading the page
  // form fields below
  let email = document.querySelector('#email').value
  let submittersName = document.querySelector('#submitters-name').value
  let playersName = document.querySelector('#players-name').value
  let birthYear = document.querySelector('#birth-year').value

  let subject = `Registration for next season`

  // create a message with the form fields
  let message = `  Hi!%0D%0A
  %0D%0A
  My name is ${submittersName} and I would love to sign ${playersName} up for the upcoming season.%0D%0A
  They were born in ${birthYear}.%0D%0A
  %0D%0A
  My email address is ${email}%0D%0A
  %0D%0A
  Best,%0D%0A
  ${submittersName}
  `
  // open the email client on a person's computer
  window.open(`mailto:ryan.cordeiro845@gmail.com?subject=${subject}&body=${message}`);

  // reset form values to empty
  email = document.querySelector('#email').value
  submittersName = document.querySelector('#submitters-name').value
  playersName = document.querySelector('#players-name').value
  birthYear = document.querySelector('#birth-year').value
})