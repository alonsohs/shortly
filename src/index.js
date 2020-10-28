import BurgerMenuAction from "./Utils/BurgerMenuAction.js";
import GetShortenedLink from "./Utils/GetShortenedLink.js";
import GetStoredShortenedLinks from "./Utils/GetStoredShortenedLinks.js";

BurgerMenuAction()
GetStoredShortenedLinks()

//Add eventListener to shorten link input
const shortenButton = document.getElementById("shorten-button")
const shortenInput = document.getElementById('shorten-input')

shortenButton.onclick = () => {
    if (shortenInput.value.length > 0) {
        GetShortenedLink()
    } else {
        shortenInput.classList.add('invalid')
    }
}

shortenInput.onfocus = () => {
    if (shortenInput.classList.contains('invalid'))
        shortenInput.classList.remove('invalid')
}


