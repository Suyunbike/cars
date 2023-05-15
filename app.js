const items= document.querySelectorAll('.menu-active')
const images = document.querySelectorAll('img')

function clearAllCars() {
    images.forEach(image => image.classList.remove('active'))
    items.forEach(item => item.classList.remove('active'))
    images.forEach(image => image.classList.remove('active'))
}

function setActiveCar(carName) {
    images.forEach(image => {
        if (image.dataset.car === carName) {
            image.classList.add('active')
        }
    }) 

    items.forEach(item => {
        if (item.dataset.car === carName) {
            item.classList.add('active')
        }
    })
}
items.forEach(button => {
    button.addEventListener('click', () => {
        clearAllCars()  
        setActiveCar(button.dataset.car)
    })
})

clearAllCars('')
setActiveCar('Lamborghini')