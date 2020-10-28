const ShortenedLinkItem = (originalLink, shortenedLink) => {
    const view =`
        <div class="shortened-link-item">
          <div class="original-link">${originalLink}</div>
          <hr>
          <div class="shortened-link">${shortenedLink}</div>
          <button class="copy-link-button">Copy</button>
        </div>
    `

    return view
}

export default ShortenedLinkItem