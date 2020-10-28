import ShortenedLinkItem from "../Templates/ShortenedLinkItem.js";
import CopyButtonAction from "./CopyButtonAction.js";
import StoreShortenedLinks from "./StoreShortenedLinks.js";

const GetShortenedLink = () => {
    let link = document.getElementById('shorten-input').value.trim()

    //Call to Brandly API
    $.ajax({
        url: "https://api.rebrandly.com/v1/links/new?apikey=87fe9c81a51b401e83f25b5cf32a853c&destination="+link+"&domain[fullName]=rebrand.ly",
        success: function(rawData) {
            let rawString = JSON.stringify(rawData);
            let data = JSON.parse(rawString);
            let linksContainer = document.getElementById('shortened-links-list-container')
            linksContainer.innerHTML = linksContainer.innerHTML + ShortenedLinkItem(link, data.shortUrl)
            CopyButtonAction()
            StoreShortenedLinks(link, data.shortUrl)
        }
    })
    document.getElementById('shorten-input').value = ''
}

export default GetShortenedLink