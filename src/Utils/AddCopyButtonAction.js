const AddCopyButtonAction = () => {
    const CopyButtons = document.getElementsByClassName('copy-link-button')

    for (let i = 0; i < CopyButtons.length; i++) {

        CopyButtons.item(i).addEventListener('click', (e) => {
            // Copy to the clipboard
            const shortenedLink = e.target.previousElementSibling.firstChild.innerHTML
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
            e.target.parentNode.classList.add('copied')
            e.target.textContent = 'Copied!'
        })
    }
}

export default AddCopyButtonAction