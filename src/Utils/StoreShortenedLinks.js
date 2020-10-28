const StoreShortenedLinks = (originalLink, shortenedLink) => {
    localStorage.setItem(originalLink, shortenedLink)
}

export default StoreShortenedLinks