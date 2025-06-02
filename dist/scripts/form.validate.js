
function validateForm(form, thanks) {
    'use strict';

    // Regular expression for email validation as per HTML specification
    const emailRegExp = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;
    // The phone number validation expression
    const phoneRegExp = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

    const inputs = form.querySelectorAll('input');

    // Check if the name is valid
    const isValidName = (name) => {
        return name.value.length > 1;
    };

    const handleInputName = (target) => {

         if (isValidName(target)) {
             target.nextElementSibling.textContent = '';
         }
         else {
             target.nextElementSibling.textContent = 'Имя должно иметь не менее 2 букв';
         }
    };
    // Check if the subject is valid
    const isValidSubject = (subject) => {
        return subject.value.length > 2;
    };
    const handleInputSubject = (target) => {

         if (isValidSubject(target)) {
             target.nextElementSibling.textContent = '';
         }
         else {
             target.nextElementSibling.textContent = 'Subject must be at least 3 characters';
         }
    };
    // Check if the subject is valid
    const isValidChoice = (subject) => {
        return subject.value.length > 9;
    };
    const handleInputChoice = (target) => {

         if (isValidChoice(target)) {
             target.nextElementSibling.textContent = '';
         }
         else {
             target.nextElementSibling.textContent = 'Неверное наименование товара';
         }
    };
    // Check if the email is valid
    const isValidEmail = (target) => {
        return target.value.length !== 0 && emailRegExp.test(target.value);
    };
    const handleInputEmail = (target) => {

         if (isValidEmail(target)) {
             target.nextElementSibling.textContent = '';
         }
         else {
             target.nextElementSibling.textContent = 'Please enter a valid email address';
         }
    };
    // Check if the phone is valid
    const isValidPhone = (target) => {
        return target.value.length !== 0 && phoneRegExp.test(target.value);
    };
    const handleInputPhone = (target) => {

         if (isValidPhone(target)) {
             target.nextElementSibling.textContent = '';
         }
         else {
             target.nextElementSibling.textContent = 'Пожалуйста введите верный телефонный номер';
         }
    };

    const handleInput = (event) => {

        switch (event.target.name) {
            case 'phone':
                handleInputPhone(event.target);
                break;
            case 'name':
                handleInputName(event.target);
                break;
            case 'choice':
                handleInputChoice(event.target);
                break;
        }
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        if (form.checkValidity()) {

            form.reset();
            form.classList.add('was-validated');

            setTimeout(() => {

                form.style.display = 'none';
                const p = document.createElement('p');
                p.textContent = 'Спасибо за заказ!';

                thanks.appendChild(p);
                thanks.style.display = 'block';

            }, 600);

        }
    };
    // Form Entry point
    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];

        input.addEventListener("input", handleInput);
    }

    form.addEventListener("submit", handleSubmit);
}