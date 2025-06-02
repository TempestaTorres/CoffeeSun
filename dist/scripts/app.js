window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const header = document.querySelector('.header');
    const form = document.querySelector('#form');
    const thanks = document.querySelector('.thanks-text');

    function headerObserver(e) {

        if (window.scrollY > 0) {
            header.classList.add('bg-header', 'backdrop-blur-md', 'shadow-sm');
            header.classList.remove('bg-transparent');
        }
        else if (window.scrollY === 0) {
            header.classList.remove('bg-gray-900', 'backdrop-blur-md', 'shadow-sm');
            header.classList.add('bg-transparent');
        }
    }

    function scrollObserver(e) {

        headerObserver(e);
        setObserver('.slide-right', 'slide-right-active');
        setObserver('.fade-in', 'fade-in-visible');
    }


    // Entry point
    addScrollingListener(scrollObserver);
    tabsInit(form, '#choice', thanks);
    validateForm(form, thanks);

});