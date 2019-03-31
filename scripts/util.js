function changeLanguage(language) {
    sessionStorage.language = language;
}

function getLanguage() {
    return sessionStorage["language"];
}