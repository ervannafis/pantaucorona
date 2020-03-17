document.addEventListener('DOMContentLoaded', function () {
    var show = false;
    var burgerMenu = document.querySelector('button.burger');
    burgerMenu.addEventListener('click', function () {
        var menu = document.querySelector('.w-full');
        if (show) {
            menu.style.display = 'none';
            show = false;
        }
        else {
            menu.style.display = 'block';
            show = true;
        }
        console.log(show);
    });
});
//# sourceMappingURL=main.js.map