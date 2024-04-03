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



const fruit = document.getElementsByClassName("fruit");
fruit[2].style.background = "yellow";

for(let i = 0; i<fruit.length; i++){
  fruit[i].style.fontWeight = "bold"
}
