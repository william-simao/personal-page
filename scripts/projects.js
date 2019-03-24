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
        loadContent(language.page.projects);
    });
}

function loadPTLanguage() {
    $.getJSON('internalization/pt.json', function (data) {
        language = data;
        setTitle();
        setIdentity();
        setPages();
        loadContent(language.page.projects);
    });
}

function setTitle() {
    set("title", language.pages.career);
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
    set("my-projects", content.projects.title);
    loadProjects(content.projects.itens);
    set("publications", content.publications.title);
    loadPublications(content.publications.itens);
}

function loadProjects(itens) {
    $(`#projects-itens`).empty();
    for (var i = 0; i < itens.length; i++)
        $("#projects-itens").append(`<p style="text-align: justify;">${configProject(itens[i])}</p>`);
}

function configProject(item) {
    return `${item.year} - <b>${item.title}</b> ${item.summary} <a href="${item.url}" target="_blank">${item.url}</a>`;
}

function loadPublications(itens) {
    $(`#publications-itens`).empty();
    for (var i = 0; i < itens.length; i++)
        $("#publications-itens").append(`<p style="text-align: justify;">${configPublication(itens[i])}</p>`);
}

function configPublication(item) {
    return `${item.year} - ${item.authors}: <b>${item.title}</b>, <i>${item.pubication}</i> <a href="${item.link}" target="_blank">${item.link}</a>`;
}