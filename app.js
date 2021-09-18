const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const container = document.querySelector('.container')
const heignt = container.clientHeight

document.addEventListener('keydown', event => {
  if (event.key === 'ArrowUp') {
    changeSlide('up')

  } else if (event.key === 'ArrowDown') {
    changeSlide('down')

  }
})

window.addEventListener("wheel", event => {
  if (event.deltaY === 100) {
    changeSlide('up')
  } else if (event.deltaY === -100) {
    changeSlide('down')
  }
});


const slidesCount = mainSlide.querySelectorAll('div').length

let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
  changeSlide('up')
})

downBtn.addEventListener('click', () => {
  changeSlide('down')
})

function changeSlide(direction) {
  if (direction === 'up') {
    activeSlideIndex++
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0
    }
  } else if (direction === 'down') {
    activeSlideIndex--
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1
    }
  }
  
  mainSlide.style.transform = `translateY(-${activeSlideIndex * heignt}px)`
  sidebar.style.transform = `translateY(${activeSlideIndex * heignt}px)`
}
