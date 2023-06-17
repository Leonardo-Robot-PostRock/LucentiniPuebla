function hasClass(element, classNameElement) {
    return !!element.className.match(new RegExp('(\\s|^)' + classNameElement + '(\\s|$)'));
}

function addClass(element, classNameElement) {
    if (!hasClass(element, classNameElement)) element.className += " " + classNameElement;
}

function removeClass(element, classNameElement) {
    if (hasClass(element, classNameElement)) {
        var reg = new RegExp('(\\s|^)' + classNameElement + '(\\s|$)');
        element.className = element.className.replace(reg, ' ');
    }
}

// Agregar eventos desde JavaScript para mantener el marcado limpio
function init() {
    document.getElementById("open-menu").addEventListener("click", toggleMenu);
    document.getElementById("body-overlay").addEventListener("click", toggleMenu);
}

// La función real
function toggleMenu() {
    var element = document.getElementsByTagName('body')[0];
    if (!hasClass(element, "menu-open")) {
        addClass(element, "menu-open");
    } else {
        removeClass(element, "menu-open");
    }
}

// Prevenir que la función se ejecute antes de que el documento esté cargado
document.addEventListener('readystatechange', function () {
    if (document.readyState === "complete") {
        init();
    }
});
