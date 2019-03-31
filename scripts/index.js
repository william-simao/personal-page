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
        //setPages();
        setAbout(language.cards.about);
        setCarrer(language.cards.carrer);
        setProjects(language.cards.projects);
        setSocialNetwork(language.cards.socialNetwork);
    });
}

function loadPTLanguage() {
    changeLanguage("PT");
    $.getJSON('internalization/pt.json', function (data) {
        language = data;
        setTitle();
        setIdentity();
        //setPages();
        setAbout(language.cards.about);
        setCarrer(language.cards.carrer);
        setProjects(language.cards.projects);
        setSocialNetwork(language.cards.socialNetwork);
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
    set("carrer", language.pages.carrer);
    set("projects", language.pages.projects);
    set("social-network", language.pages.socialNetwork);
}

function setAbout(about) {
    set("about-me", about.me);
    set("about-description", about.description);
    set("about-date", about.date);
}

function setCarrer(carrer) {
    set("my-carrer", carrer.me);
    set("carrer-description", carrer.description);
    set("carrer-date", carrer.date);
}

function setProjects(projects) {
    set("my-projects", projects.me);
    set("projects-description", projects.description);
    set("projects-date", projects.date);
}


function setSocialNetwork(network) {
    set("my-social-network", network.me);
    set("social-network-description", network.description);
    set("social-network-date", network.date);
}