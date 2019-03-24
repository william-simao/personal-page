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
        loadContent(language.page.career);
    });
}

function loadPTLanguage() {
    $.getJSON('internalization/pt.json', function (data) {
        language = data;
        setTitle();
        setIdentity();
        setPages();        
        loadContent(language.page.career);
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
    set("highlights", content.highlights.title);
    loadHighlightsItens(content.highlights.itens);
    set("timeline", content.timeline.title);
    loadTimelineItens(content.timeline.itens);
}

function loadHighlightsItens(itens) {
    $(`#highlights-itens`).empty();
    $("#highlights-itens").append("<ul>");
    for (var i = 0; i < itens.length; i++) {
        $("#highlights-itens").append(`<li>${itens[i].item}</li>`)
    }
    $("#highlights-itens").append("</ul>");
}

function loadTimelineItens(itens) {
    $(`#timeline-itens`).empty();
    $("#timeline-itens").append("<ul>");
    for (var i = 0; i < itens.length; i++) {
        $("#timeline-itens").append(`<li>${configTimelineItens(itens[i])}</li>`)
    }
    $("#timeline-itens").append("</ul>");
}

function configTimelineItens(item) {
    return `${item.startYear} - ${item.endYear}: <b>${item.profession}</b>, ${item.company}`;
}