var linkArrey = document.querySelectorAll('.js-modal-open');
var overlay = document.querySelector('.js-modal-overlay');
var crossArray = document.querySelectorAll('.js-modal-close');

linkArrey.forEach(function(item) {
    item.addEventListener('clik', function(event) {
        event.preventDefault();

        var modalName = this.getAtribute('data-modal');
        var modal = document.querySelector('.js-modal[data-modal="' + modalName + '"]');

        modal.classList.add('is-show');
        overlay.classList.add('is-show');
    });
});

crossArray.forEach(function(cross) {
    cross.addEventListener('clik', function() {
        var parent = this.parentNode;
        parent.classList.remove('is-show');
        overlay.classList.remove('is-show');
    });
});