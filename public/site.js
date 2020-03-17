function Initialize() {
    var button = document.querySelector("#consent");
    if (button) {
        button.addEventListener("click", function (event) {
            document.cookie = button.dataset.cookieString;
            document.querySelector("#consent").style.display = 'none';
        }, false);
    }
}
(function () {
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('#' + burger.dataset.target);
    burger.addEventListener('click', function () {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
})();



function openModal(target) {
    var $target = document.getElementById(target);
    $target.classList.add('is-active');
}

function closeModals(target) {
    var $target = document.getElementById(target);
    $targrt.classList.remove('is-active');

}