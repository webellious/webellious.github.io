const removeChars = ['- ', ',', "'", "!", "&", "?", "/", '"', "(", ")"]
function makeURLFriendly(text) {
    let output = text
    if (output !== undefined) {
        for (let i = 0; i < removeChars.length; i++) {
            output = output.replaceAll(removeChars[i], '')
        }
        output = output.replaceAll(' ', '_')
        output = output.replaceAll('__', '_')

        output = output.toLowerCase()
    } else output = ''
    return output
}

function escapeText(str) {
    str = str.replaceAll('&', '&amp;')
    str = str.replaceAll('<', '&lt;')
    str = str.replaceAll('>', '&gt;')
    return str
}

function code(text, lang = 'html') {
    lang = 'language-' + lang
    return `<code class="${lang}">${escapeText(text)}</code>`
}

function callout(text, type = 'Important') {
    let icon = ''
    switch (type) {
        case 'Important': icon = ' 📌'; break
        case 'Exercise': icon = ' 🧪'; break
    }
    return `<div class='callout ${type.toLowerCase()}'>
    <h4>${type + icon}</h4>
    ${text}
</div>`
}