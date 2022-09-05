let checkboxes = document.querySelectorAll('.contacts-form__checkbox');
if (checkboxes){
  console.log('111111')
  checkboxes.forEach(el => {
    el.addEventListener('change', () => {
      console.log(el)
      if (el.checked){
        console.log(1)
      } else {
        console.log(2)
      }
    })
  })
}
