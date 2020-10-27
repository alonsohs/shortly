const BurgerMenuAction = () => {
    console.log('Hola')
    const burgerButton = document.getElementById('menu-button')
    const menu = document.getElementById('menu')
    const lessThanipadResolution = window.matchMedia('screen and (max-width: 767px)')

    console.log(lessThanipadResolution)
    const  hideShowMenu= () => {
        if (menu.classList.contains('active')){
            menu.classList.remove('active')
            burgerButton.classList.remove('active')
        }
        else{
            menu.classList.add('active')
            burgerButton.classList.add('active')
        }
    }

    const validation = (event) => {
        if(event.matches)
            burgerButton.addEventListener('click', hideShowMenu)
        else
            burgerButton.removeEventListener('click', hideShowMenu)
    }

    if (lessThanipadResolution.matches)
        burgerButton.addEventListener('click', hideShowMenu)

    lessThanipadResolution.addEventListener('change', validation)
}

export default BurgerMenuAction

