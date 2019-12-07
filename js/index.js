// Your code goes here


//mouse start 
const imgUp = document.querySelectorAll(".img").forEach(element => {
    element.addEventListener("mouseenter", () => {
      element.style.transform = "scale(2.5)";
      element.style.transition = "transform 0.3s";
    });
  });
  // mouse end 
  const imgDown = document.querySelectorAll(".img").forEach(element => {
    element.addEventListener("mouseleave", () => {
      element.style.transform = "scale(1.0)";
      element.style.transition = "transform 0.3s";
    });
  });
  
  //keyDown
  
  const dissapear = document.querySelectorAll(".img").forEach(element => {
    element.addEventListener("keydown", () => {
      element.style.display = "none";
    });
  });
  
  //keyup
  
  const keyStroke = document.querySelector("body");
  
  keyStroke.addEventListener("keyup", () => {
    keyStroke.style.backgroundColor = "white";
  });
  
  //keydown
  
  const keyTap = document.querySelector("body");
  
  keyStroke.addEventListener("keydown", () => {
    keyStroke.style.backgroundColor = "black";
  });
  
  //Start click
  const navColor = document.querySelector(".main-navigation");
  navColor.addEventListener("click", e => {
    navColor.style.backgroundColor = "seagreen";
    navColor.style.transition = "1.7s";
    e.stopPropagation();
  });
  const bodyColor = document.querySelector("body");
  bodyColor.addEventListener("click", e => {
    bodyColor.style.backgroundColor = "teal";
    bodyColor.style.transition = "1.7s";
    e.stopPropagation();
  });
  // doub click
  const navColorReturn = document.querySelector(".main-navigation");
  navColorReturn.addEventListener("dblclick", e => {
    navColorReturn.style.backgroundColor = "white";
    e.stopPropagation();
  });
  const bodyColorReturn = document.querySelector("body");
  bodyColorReturn.addEventListener("dblclick", () => {
    bodyColorReturn.style.backgroundColor = "white";
  });

  const wheel = document.querySelector("body");
wheel.addEventListener("wheel", () => {
  wheel.style.color = "silver";
});

//Resize Image 
const losMap = document.querySelector(".img");
console.log(losMap);
window.addEventListener("resize", () => {
  losMap.src =
    "https://images.unsplash.com/photo-1509066380918-7487b4bb1fb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1965&q=80";
});

//auxclick

document.querySelectorAll(".nav").forEach(element =>  {  
  element.addEventListener("auxclick", () => {
    element.style.color = "seagreen";
    element.style.backgroundColor = "dodgerblue";
    element.style.borderRadius = "2rem";
  });
});

//mouseclick mousedown

document.querySelectorAll("p").forEach(element => {
  element.addEventListener("mousedown", () => {
    element.style.color = "white";
    element.style.backgroundColor = "black";
    element.style.borderRadius = "1rem";
  });
});

//prevent Default
const stopLink = document.querySelector(".nav");

stopLink.addEventListener("click", event => {
  console.log("you get on out of here");
  event.preventDefault();
});
  
  