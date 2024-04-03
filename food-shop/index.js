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



