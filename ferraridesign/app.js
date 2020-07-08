//Colors to display
let red = document.querySelector(".red");
let blue = document.querySelector(".blue");
let yellow = document.querySelector(".yellow");

red.style.opacity = 0;
blue.style.opacity = 0;
yellow.style.opacity = 0;
red.style.pointerEvents = "none";
blue.style.pointerEvents = "none";
yellow.style.pointerEvents = "none";

//This is just to toggle between on and off
let invisible = true;

//This is to toggle between the different layouts
let red_style = true;
let blue_style = false;
let yellow_style = false;

let color_button = document.querySelector(".colors");

color_button.addEventListener("click", () => {
  if (invisible) {
    color_button.style.transform= "translateY(-30px)"
    red.style.opacity = 1;
    blue.style.opacity = 1;
    yellow.style.opacity = 1;
    red.style.pointerEvents = "auto";
    blue.style.pointerEvents = "auto";
    yellow.style.pointerEvents = "auto";
    invisible = false;
  } else {
    color_button.style.transform= "translateY(30px)"
    red.style.opacity = 0;
    blue.style.opacity = 0;
    yellow.style.opacity = 0;
    red.style.pointerEvents = "none";
    blue.style.pointerEvents = "none";
    yellow.style.pointerEvents = "none";
    invisible = true;
  }
});

console.log(invisible);
