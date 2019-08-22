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

    // console.log("VT: " + viewTop + "\nVB:" + viewBot*0.72 + "\nET:" + elemTop + "\nEB:" + elemBot);
    return ((elemTop <= viewBot*0.72) && (elemBot >= viewTop));
}

function isElementOutView(element) {
    let viewTop = window.scrollY;
    let viewBot = viewTop + window.innerHeight;

    let elemTop = element.offsetTop;
    let elemBot = elemTop + element.clientHeight;

    // console.log("VT: " + viewTop + "\nVB:" + viewBot*0.72 + "\nET:" + elemTop + "\nEB:" + elemBot);
    return ((elemTop <= viewBot*0.72) && (elemBot >= viewTop));
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

        if (isElementInView(section)) {
            let elements = document.querySelectorAll("#" + section.id + " [scroll-sensitive]");

            elements.forEach(element => {
                let className = element.getAttribute("scroll-sensitive");
                element.classList.add(className);
            });

            // section.classList.add("animate-section");
            // setTimeout(section.classList.remove, 600, "animate-section");

        } else {

        }
    }
}
