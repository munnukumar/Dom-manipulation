// Write your code below:

const myForm = document.getElementById('myForm');

    myForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = myForm.elements['username'].value;
        const email = myForm.elements['email'].value;
        const phone = myForm.elements['phone'].value;

        // Storing data in local storage
        localStorage.setItem('Username', username);
        localStorage.setItem('Email', email);
        localStorage.setItem('Phone', phone);


        // store obj in local storage
        // Write your code below:

function handleFormSubmit(event) {
    event.preventDefault();
     let myObj = {
        username: event.target.username.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
    }
    let myObj_serialised = JSON.stringify(myObj);
    localStorage.setItem("User Details", myObj_serialised);
}

module.exports = handleFormSubmi
