const stars = document.querySelectorAll(".stars span");   //for all star select
const emoji = document.getElementById("emoji");          
const result = document.getElementById("result");

const emojis = ["😡", "😟", "😐", "😊", "😍"];  //store emoji
let index=[0];

stars.forEach((star, index) => {     
  star.addEventListener("click", () => {    //to handle user action
    // stars color
    stars.forEach((s, i) => {
      s.style.color = i <= index ? "gold" : "lightgray";
    });

    // show rating emoji
    emoji.textContent = emojis[index];
    result.textContent = `You rated: ${index + 1} star - ${messages[index]}`;
  });
});