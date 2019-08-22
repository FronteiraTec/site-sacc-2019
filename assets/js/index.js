var menuMobile = document.querySelector(".menu-mobile");
var toggleButton = document.querySelector(".navbar__toggle-button");

toggleButton.addEventListener('click', function () {
    menuMobile.classList.toggle('menu-mobile--opened')
});


function isElementInView(element) {
    let viewTop = window.scrollY;
    let viewBot = viewTop + window.innerHeight;

    let elemTop = element.offsetTop;
    let elemBot = elemTop + element.clientHeight;

    if (element.id == "secProgramming") {
        console.log("VT: " + viewTop + "\nVB:" + viewBot*0.72 + "\nET:" + elemTop + "\nEB:" + elemBot);
    }
    return ((elemTop <= viewBot) && (elemBot >= viewTop));
}

// Gambiarra?: precisa ser refeito
window.onload = function(event) {
    let elements = document.querySelectorAll("#secIntro [scroll-sensitive]");

    elements.forEach(element => {
        let className = element.getAttribute("scroll-sensitive");
        element.classList.add(className);
    });
}

window.onscroll = function(event) {
    let sections = document.getElementsByTagName("section");
    for (let section of sections) {

        let elements = document.querySelectorAll("#" + section.id + " [scroll-sensitive]");

        if (isElementInView(section)) {
            elements.forEach(element => {
                let className = element.getAttribute("scroll-sensitive");
                element.classList.add(className);
            });

        } else {
            // elements.forEach(element => {
            //     let className = element.getAttribute("scroll-sensitive");
            //     element.classList.remove(className);
            // });
        }
    }
}
