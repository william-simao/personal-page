var language = {};

$(document).ready(function () {
    if (getLanguage() === "PT")
        loadPTLanguage();
    else
        loadENLanguage();
});

function loadENLanguage() {
    changeLanguage("EN");
    $.getJSON('internalization/en.json', function (data) {
        language = data;
        setTitle();
        setIdentity();
        setPages();        
        loadContent(language.page.network);
    });
}

function loadPTLanguage() {
    changeLanguage("PT");
    $.getJSON('internalization/pt.json', function (data) {
        language = data;
        setTitle();
        setIdentity();
        setPages();
        loadContent(language.page.network);
    });
}

function setTitle() {
    set("title", language.pages.network);
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
    loadPersonal(content.personal);
    loadProfessional(content.professional);
}

function loadPersonal(itens) {
    $(`#personal`).empty();
    for (var i = 0; i < itens.length; i++) {
        $("#personal").append(`<div class="row">${configIcon(itens[i].icon)} ${configUrl(itens[i].url)}</div>`);
        feather.replace();
    }
}

function configIcon(icon) {
    return `<i data-feather="${icon}" style="margin-right: 10px;"></i>`;
}

function configUrl(url) {
    return `<a style="color: #000" target="_blank" href="${url}">${url}</a>`;
}

function loadProfessional(itens) {
    $(`#professional`).empty();
    for (var i = 0; i < itens.length; i++) {
        $("#professional").append(`<div class="row">${configIcon(itens[i].icon)} ${configUrl(itens[i].url)}</div>`);
        feather.replace();
    }
}