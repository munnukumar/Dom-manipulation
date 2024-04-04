Task_12
// Deliverables:

// 1. In the html file create a form with 3 input fields: one for collecting username, second for collecting email, and third for collecting phone number.
// 2. Make sure you use label tag for each of these input fields.
// 3. The form should have a button of submit type.
// 4. On form submission collect the user details mentioned above and then store them in the browser's local storage.
        
// Note:

// Input elements should be given “name” attribute with values: 
// “username” for Username input
// “email” for Email input, and
// “phone” for Phone input
// While storing data in the local storage the key for storing:
// Username Input should be "Username"
// Email Input should be "Email"
// Phone Input should be "Phone"
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
        

// task_13 (store obj in local storage)
// Deliverable:

// The form inside the index.html file is already provided by us. Your task is to store all the user details as an object inside the local storage, instead of storing them as individual fields. 
// For this you can take help of this video: https://www.youtube.com/watch?v=AUOzvFzdIk4

// NOTE: Make sure that when you are storing data in the local storage the key that you use is "User Details". The key has to be "User Details" only then the test cases will
        
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

//task 14 
// 1. Make sure that you are able to store the details of multiple users in the local storage.
// 2. Add an unordered list in the html file after the form.
// 3. Use DOM manipulation to display on screen the users you add as a list item of this unordered list.
// Write your code below:
function handleFormSubmit(event){
  event.preventDefault();
  let myObj = {
    username : event.target.username.value,
    email : event.target.email.value,
    phone : event.target.phone.value
  }
    let myObj_serialised = JSON.stringify(myObj);
   const ul = document.querySelector("ul");
    const li = document.createElement("li");
    li.textContent = event.target.username.value + "-" + event.target.email.value + "-" + event.target.phone.value;
    ul.appendChild(li);
    localStorage.setItem(event.target.email.value, myObj_serialised);
}
module.exports = handleFormSubmit;
