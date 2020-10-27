const CopyButtonAction = (e) => {
    // Copy to the clipboard
    const shortenedLink = e.target.previousElementSibling.innerHTML
    const el = document.createElement('textarea');
    el.value = shortenedLink
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    // Update button
    console.log(e.target.previousElementSibling.innerHTML)
    e.target.parentNode.classList.add('copied')
    e.target.textContent = 'Copied!'
}

export default CopyButtonAction