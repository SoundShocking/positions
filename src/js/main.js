import 'simplebar'

const contactFormFields = document.querySelectorAll('.contact-form__form .contact-form__input, .contact-form__form .contact-form__textarea')
if (contactFormFields.length) {
  contactFormFields.forEach(el => {
    el.value = '';
    el.addEventListener('input', e => {
      const nextSibling = e.target.nextElementSibling;

      if (e.target.value.length > 0) {
        if (nextSibling) {
          nextSibling.style.display = 'none';
        }
      } else {
        if (nextSibling) {
          nextSibling.style.display = 'block';
        }
      }
    })
  })
}