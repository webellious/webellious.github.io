let $guideLinks = document.getElementById('guide-links')
let $navbar = document.getElementById('navbar')
let $content = document.getElementById('content')
let $pageTitle = document.getElementById('pageTitle')

let $next = document.getElementById('next')
let $previous = document.getElementById('previous')

// $guideLinks.addEventListener('click', (e) => {
//     let $target = e.target.closest('.clickable')
//     if ($target !== null) {
//         window.location.href = "#test";
//     }
// })

$next.addEventListener('click', (e) => {
    loadPage(currentPage+1)
})
$previous.addEventListener('click', (e) => {
    loadPage(currentPage-1)
})

let $selected = document.querySelector('.selected')
$navbar.addEventListener('click', (e) => {
    let $target = e.target
    if ($target !== null) {
        if ($target.classList.contains('navLink')) {
            loadPage($target.dataset.page)
        } else {
            $target = $target.firstChild
            if ($target !== null && $target.classList.contains('navLink')) {
                loadPage($target.dataset.page)
            }
        }
    }
})





for (let i = 0; i < pages.length; i++) {
    let error = ''
    if (pages[i].content == '') error = `<span class='error'>!</span>`
    $navbar.innerHTML += `<li><a id='id-${i}' class='navLink' data-page='${i}'>${pages[i].name + error}</a></li>`
}

let currentPage = 0
loadPageFromURL()

function loadPage(i) {
    let $link = document.getElementById('id-' + i)
    if ($selected !== null) $selected.classList.remove('selected')
    $link.classList.add('selected')
    $selected = $link

    $pageTitle.textContent = pages[i].name
    $content.innerHTML = pages[i].content
    if ($content.innerHTML == '') $content.innerHTML = `
    <img alt='Error' src="/images/errordog.png">
    <p style='text-align: center;'>Oops! Looks like there's no content here yet!</p>`
    Prism.highlightAllUnder($content)

    currentPage = parseInt(i)

    if (currentPage == 0) $previous.style.display = 'none'
    else $previous.style.display = 'block'
    if (currentPage == pages.length-1) $next.style.display = 'none'
    else $next.style.display = 'block'

    window.history.replaceState(null, '', '#'+makeURLFriendly(pages[i].name));
}

function loadPageFromURL() {
    if (window.location.hash) {
        let hash = window.location.hash.replace('#', '')
        for (let i = 0; i < pages.length; i++) {
            if (makeURLFriendly(pages[i].name) == hash) {
                loadPage(i)
                break;
            }
        }
        
    } else {
        loadPage(0)
    }
}