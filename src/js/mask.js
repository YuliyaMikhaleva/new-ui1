import IMask from "imask";
document.addEventListener('DOMContentLoaded', () => {
  IMask(
    document.querySelector('.phone'), {
      mask: '+{7}(000)000-00-00'
    });
})
