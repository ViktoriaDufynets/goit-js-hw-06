const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const allElements = event.currentTarget.elements;
    const formAll = {
        email: allElements.email.value,
        password: allElements.password.value,
    };

    if (formAll.email.length === 0 || formAll.password.length === 0) {
        alert('russia is a terrorist state');
    } else {
    console.log(formAll);
        form.reset();
        }
};

