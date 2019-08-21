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

function removeFromArray(array, item) {
    console.log(array);
    array.remove(item);

    // for(var i = 0; i < array.length; i++) {
    //     if (array[i] === item) {
    //         array.splice(i, 1);
    //     }
    // }

    console.log(array);
}


window.onload = function (event) {
    document.getElementById("secIntro").focus();
}

window.onscroll = function (event) {
    let sections = document.getElementsByTagName("section");
    for (let section of sections) {
        if (isElementInView(section)) {
            section.classList.add("animate-section");
            setTimeout(removeFromArray, 600, section.classList, "animate-section");
        } else {

        }
    }
}
