function tabsInit(form, choice, thanks){
    'use strict';

    const navTabs = document.querySelector('.nav-tab');
    const catalogs = document.querySelectorAll('.catalog-item');
    const choiceInput = form.querySelector(choice);

    // Hide Catalogs

    for (let i=0; i < navTabs.children.length; i++){

        navTabs.children[i].itemID = i;
        catalogs[i].style.display = 'none';
    }

    navTabs.addEventListener('click', (e) => {

        e.preventDefault();

        if (e.target.nodeName === 'BUTTON') {

            buttonOnClick(e.target);
        }

        e.stopPropagation();
    });
    // Catalog click
    function catalogClick(evt) {

        if (evt.target.nodeName === 'A') {

            const card = evt.currentTarget.children[evt.target.itemID].firstElementChild;
            const cardName = card.querySelector('.coffee-card-name').textContent;

            if (form.style.display === 'none') {

                const child = thanks.firstElementChild;
                thanks.removeChild(child);
                thanks.style.display = 'none';
                form.classList.remove('was-validated');
                form.style.display = 'block';
            }

            choiceInput.value = cardName;
            console.log(cardName);
            evt.stopPropagation();
        }
    }
    // Button Click
    function buttonOnClick(button) {

        setActiveButton(button.itemID);
        setTimeout( () => {

            const prev = document.querySelector('.catalog-item-inactive');
            if (prev) {
                prev.classList.remove('catalog-item-inactive');
                prev.removeEventListener('click', catalogClick);
                prev.style.display = 'none';
            }
            catalogs[button.itemID].style.display = 'grid';
            catalogs[button.itemID].classList.add('catalog-item-active');

            for (let i= 0; i < catalogs[button.itemID].children.length; i++) {
                const card = catalogs[button.itemID].children[i];
                const cardBtn = card.querySelector('.card-btn');
                cardBtn.itemID = i;
            }
            catalogs[button.itemID].addEventListener('click', catalogClick);

        },500);
    }

    function setActiveButton(buttonIndex) {

        for (let i = 0; i < navTabs.children.length; i++) {

            if (navTabs.children[i].classList.contains('btn-active')) {
                navTabs.children[i].classList.remove('btn-active');
            }

            if (catalogs[i].style.display !== 'none') {
                catalogs[i].classList.remove('catalog-item-active');
                catalogs[i].classList.add('catalog-item-inactive');
            }
        }
        navTabs.children[buttonIndex].classList.add('btn-active');
    }

    // Set first active
    navTabs.children[0].click();
}