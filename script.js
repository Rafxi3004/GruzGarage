
function smoothScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
function smoothScrollTo(elementId) {
    var element = document.getElementById(elementId);

    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'center', 
            inline: 'nearest' 
        });
    } else {
        console.error("Element o id '" + elementId + "' nie istnieje.");
    }
}

function changeImageSrc(newSrc) {
    var image = document.getElementById('bw');
    image.src = newSrc;
  }
function setTheme(themeName) {
    console.log('Setting theme:', themeName);
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
function toggleTheme() {
    var currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'theme-dark') {
        setTheme('theme-light');
        if (currentTheme !== 'theme-light') {
            changeImageSrc('szkic.png');
        }
    } else {
        setTheme('theme-dark');
        if (currentTheme !== 'theme-dark') {
            changeImageSrc('obrys_bialy.png');
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('theme') === null) {
        setTheme('theme-dark');
        changeImageSrc('obrys_bialy.png');
    } else if (localStorage.getItem('theme') === 'theme-dark') {
        console.log('ciemny');
        setTheme('theme-dark');
        changeImageSrc('obrys_bialy.png');
    } else {
        console.log('jasny');
        setTheme('theme-light');
        changeImageSrc('szkic.png');
    }
});
(function () {
    if (localStorage.getItem('theme') === null) {
        setTheme('theme-dark');
        changeImageSrc('obrys_bialy.png');
    } else if (localStorage.getItem('theme') === 'theme-dark') {
        console.log('ciemny');
        setTheme('theme-dark');
        changeImageSrc('obrys_bialy.png');
    } else {
        console.log('jasny');
        setTheme('theme-light');
        changeImageSrc('szkic.png');
    }
 })()
 function openInNewTab(url) {
    window.open(url, '_blank').focus();
  }