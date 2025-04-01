/* script.js */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

document.getElementById('menu-icon').addEventListener('click', function() {
    this.classList.toggle('open');
    document.getElementById('nav-content').classList.toggle('open');
});

document.querySelectorAll('#nav-content a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
            document.getElementById('menu-icon').classList.remove('open');
            document.getElementById('nav-content').classList.remove('open');
        }
    });
});

document.getElementById('contactButton').addEventListener('click', function() {
    document.getElementById('contacts').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('aboutButton').addEventListener('click', function() {
    document.getElementById('about').scrollIntoView({
        behavior: 'smooth'
    });
});
