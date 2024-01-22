/**
* PHP Email Form Validation - v3.6
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/
(function () {


  const buttons = document.querySelectorAll('.php-email-form');

  buttons.forEach(button => {
    button.addEventListener('submit', () => {
      button.querySelector('.sent-message').classList.add('d-block');
    });
  });



})();
