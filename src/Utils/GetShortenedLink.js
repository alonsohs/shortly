import ShortenedLinkItem from "../Templates/ShortenedLinkItem.js";
import CopyButtonAction from "./CopyButtonAction.js";
const GetShortenedLink = () => {
    let link = document.getElementById('shorten-input').value
    console.log(link);
    let data = ''

    $.ajax({
        url: "https://api.rebrandly.com/v1/links/new?apikey=87fe9c81a51b401e83f25b5cf32a853c&destination="+link+"&domain[fullName]=rebrand.ly",
        success: function(rawData) {
            let rawString = JSON.stringify(rawData);
            data = JSON.parse(rawString);
            let linksContainer = document.getElementById('shortened-links-list-container')
            linksContainer.innerHTML = linksContainer.innerHTML + ShortenedLinkItem(link, data.shortUrl)
            CopyButtonAction()
        }
    })
    document.getElementById('shorten-input').value = ''

    return data
}

export default GetShortenedLink