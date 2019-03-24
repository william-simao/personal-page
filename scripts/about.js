var language = {};

$(document).ready(function () {
    loadENLanguage();
});

function loadENLanguage() {
    $.getJSON('internalization/en.json', function (data) {
        language = data;
        setTitle();
        setIdentity();
        setPages();        
        loadContent(language.page.about);
    });
}

function loadPTLanguage() {
    $.getJSON('internalization/pt.json', function (data) {
        language = data;
        setTitle();
        setIdentity();
        setPages();        
        loadContent(language.page.about);
    });
}

function setTitle() {
    set("title", language.index.title);
}

function setIdentity() {
    set("welcome", language.index.welcome);
    set("name", language.index.name);
    set("occupation", language.index.occupation);
    set("description", language.index.description);
}

function set(id, value) {
    $(`#${id}`).empty();
    $(`#${id}`).append(value);
}

function setPages() {
    set("home", language.pages.home);
    set("about", language.pages.about);
    set("career", language.pages.career);
    set("projects", language.pages.projects);
    set("social-network", language.pages.socialNetwork);
}

function loadContent(content) {
    set("title-page", content.title);
    set("description-page", content.description);
}