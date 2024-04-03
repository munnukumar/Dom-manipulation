//get Element by Id
const heading = document.getElementById("header");
heading.style.backgroundColor = "green";
heading.style.borderBottom = "3px solid orange";

const mainHeading = document.getElementById("main-heading");
mainHeading.textContent = "Fruit World";
mainHeading.style.color = "orange";

const basketHeading = document.getElementById("basket-heading");
basketHeading.style.color = "green";

const thanks = document.getElementById("thanks");
thanks.innerHTML = "<p>Please visit us again</p>";


//get Elements by class name
const fruit = document.getElementsByClassName("fruit");
fruit[2].style.background = "yellow";

for(let i = 0; i<fruit.length; i++){
  fruit[i].style.fontWeight = "bold"
}

//Get Elements By ID
const tag = document.getElementsByTagName("li");

tag[4].style.color = "blue";
tag[1].style.fontWeight = "italic";

for(let i=0; i<tag.length; i++){
  tag[i].style.fontStyle = "italic";
}

//Get Element By querySelector & querySelectorAll
const mainHeading  = document.querySelector("#main-heading");
mainHeading.style.textAlign = "right";

const basketHeading = document.querySelector("#basket-heading");
basketHeading.style.color = "brown";
basketHeading.style.marginLeft = "30px";

const fruits = document.querySelector(".fruits");
fruits.style.backgroundColor = "grey";
fruits.style.pading = "30px";
fruits.style.margin = "30px";
fruits.style.width = "50%";
fruits.style.borderRadius = "5px";
fruits.style.listStyleType = "none";


const fruit = document.querySelectorAll(".fruit");
for(let i = 0; i<fruit.length; i++){
  fruit[i].style.backgroundColor = "brown";
  fruit[i].style.color = "white";
  fruit[i].style.pading = "10px";
  fruit[i].style.margin = "10px";
  fruit[i].style.borderRadius = "5px";
  
}

const oddFruit = document.querySelectorAll(".fruit:nth-child(odd)");
for(let i = 0; i<oddFruit.length; i++){
  oddFruit[i].style.backgroundColor = "lightgrey"; 
  oddFruit[i].style.color = "black"
}


//Add & Delete Elements
// Add the Edit Button:
const li = document.getElementsByClassName('fruit');
for (let i = 0; i < li.length; i++) {
    const edit = document.createElement("button");
    const editText = document.createTextNode("Edit");
    edit.append(editText);
    edit.className = "edit-btn";
    li[i].appendChild(edit);
}

// Implement the code as in video but with one extra 'Edit' button in 'li'

const form = document.querySelector("form");
const fruits = document.querySelector(".fruits");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const fruitToAdd = document.getElementById("fruit-to-add");
    const newFruit = document.createElement("li");
    newFruit.className = "fruit";
    newFruit.innerHTML = fruitToAdd.value + '<button class="delete-btn">x</button><button class="edit-btn">Edit</button>';
    fruits.appendChild(newFruit);
});

  
  
    // const newLiText = document.createTextNode('fruitToAdd.value');
    // newLi.appendChild(newLiText);
    // newLi.className = 'fruit';

    // const deleteBtn = document.createElement('button')
    // const deleteBtnText = document.createTextNode('edit');
    // deleteBtn.appendChild(deleteBtnText);
    // deleteBtn.className = "delete-btn";

    // newLi.appendChild(deleteBtn);
    // fruits.appendChild(newLi);

// })

fruits.addEventListener('click', function(event){
    if(event.target.classList.contains('delete-btn')){
        const fruitToDelete = event.target.parentElement;
        fruits.removeChild(fruitToDelete);
    }
})


//Fillter funcunality
const desc = document.createElement("input");
const form = document.querySelector("form");
const btn = document.querySelector("button");
desc.id = "description";
desc.type = "text";
form.insertBefore(desc, btn);
// Show the fruit description in italics on the next line
const fruits = document.querySelector(".fruits");
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const li = document.createElement("li");
    const fruitToAdd = document.querySelector("#fruit-to-add");
    li.className = "fruit";
    li.innerHTML = fruitToAdd.value + `<p style='font-style:italic;'>${desc.value}</p><button class='delete-btn'>x</button>`;
    fruits.appendChild(li);
});
// Create a filter that shows only those fruits whose either name or description or both matches the entered text

// const filter = document.getElementById("filter");
// filter.addEventListener('keyup', function(event){
//     const textEntered = event.target.value.toLowerCase();
//     const fruitItem = document.getElementsByClassName("fruit");
//     for(let i=0; i<fruitItem.length; i++){
//         const currentFruitItem = fruitItem[i].firstChild.textContent.toLowerCase();
//         if(currentFruitItem.indexOf(textEntered) === -1){
//             fruitItem[i].style.display = "none";
//         }
//         else{
//             fruitItem[i].style.display = "flex";
//         }
//     }
// })

const filter = document.querySelector("#filter");
filter.addEventListener('keyup', function (event) {
    const fruit = document.querySelectorAll(".fruit");
    const filterText = event.target.value.toLowerCase();
    for (let i = 0; i < fruit.length; i++) {
        const fruitText = fruit[i].firstChild.textContent.toLowerCase();
        const fruitDescription = fruit[i].querySelector("p") ? fruit[i].querySelector("p").textContent.toLowerCase() : "";
        if (fruitText.indexOf(filterText) == -1 && fruitDescription.indexOf(filterText) == -1) {
            fruit[i].style.display = "none";
        }
        else {
            fruit[i].style.display = "flex";
        }
    }
});



