import BurgerMenuAction from "./Utils/BurgerMenuAction.js";
import CopyButtonAction from "./Utils/CopyButtonAction.js";
import GetShortenedLink from "./Utils/GetShortenedLink.js";

BurgerMenuAction()
// CopyButtonAction()

const shortenButton = document.getElementById("shorten-button")
const shortenInput = document.getElementById('shorten-input')

shortenButton.onclick = async () => {
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


