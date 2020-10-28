import ShortenedLinkItem from "../Templates/ShortenedLinkItem.js";
import CopyButtonAction from "./CopyButtonAction.js";

const GetStoredShortenedLinks = () => {
    let linksContainer = document.getElementById('shortened-links-list-container')

    for (let i = 0; i < localStorage.length; i++) {
        const originalLink = localStorage.key(i)
        const shortenedLink = localStorage.getItem(originalLink)

        linksContainer.innerHTML = linksContainer.innerHTML + ShortenedLinkItem(originalLink, shortenedLink)
        CopyButtonAction()
    }
}

export default GetStoredShortenedLinks