document.addEventListener('DOMContentLoaded', () => {
  let checkboxes = document.querySelectorAll('.contacts-form__checkbox');
  if (checkboxes){
    checkboxes.forEach(el => {
      el.addEventListener('change', () => {
        if (el.checked){
          el.parentElement.classList.add('contacts-form__label--active')
        } else {
          el.parentElement.classList.remove('contacts-form__label--active')
        }
      })
    })
  }
})

