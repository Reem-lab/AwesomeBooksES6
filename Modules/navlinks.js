/* eslint-disable semi */
// eslint-disable-next-line import/prefer-default-export
export const addNavLinks = () => {
  const [list, addNew, contact] = document.querySelectorAll('.link')
  const contactSection = document.querySelector('.contact-section')
  const sec = document.querySelector('.sec')
  const sec1 = document.querySelector('.sec1')

  list.addEventListener('click', () => {
    contactSection.classList.add('hidden')
    sec1.classList.add('hidden')
    sec.classList.remove('hidden')
  })

  addNew.addEventListener('click', () => {
    contactSection.classList.add('hidden')
    sec1.classList.remove('hidden')
    sec.classList.add('hidden')
  })

  contact.addEventListener('click', () => {
    contactSection.classList.remove('hidden')
    sec1.classList.add('hidden')
    sec.classList.add('hidden')
  })
}
