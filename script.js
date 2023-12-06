const cursor = document.createElement("div");
const home = document.querySelector("body");
const page4Video = document.querySelector(".page4-video1");
const page4Video2 = document.querySelector(".page4-video2");
const page4Video3 = document.querySelector(".page4-video3");
const page4Video4 = document.querySelector(".page4-video4");
const page4Video5 = document.querySelector(".page4-video5");
const page4Video6 = document.querySelector(".page4-video6");
const page4Video7 = document.querySelector(".page4-video7");
const page4Video8 = document.querySelector(".page4-video8");
const page4Video9 = document.querySelector(".page4-video9");

// //mouse
// function ok() {
//   cursor.className = "cursor";
//   home.appendChild(cursor);
// }
// ok();

// home.addEventListener("mouseover", function (details) {
//   cursor.style.left = details.clientX + "px";
//   cursor.style.top = details.clientY + "px";
// });

// mouse over play video

// video 1
page4Video.addEventListener("mouseover", function () {
  page4Video.play();
});
page4Video.addEventListener("mouseout", function () {
  page4Video.pause();
});
// video 2
page4Video2.addEventListener("mouseover", function () {
  page4Video2.play();
});
page4Video2.addEventListener("mouseout", function () {
  page4Video2.pause();
});

//video 3

page4Video3.addEventListener("mouseover", function () {
  page4Video3.play();
});
page4Video3.addEventListener("mouseout", function () {
  page4Video3.pause();
});

//video 4

page4Video4.addEventListener("mouseover", function () {
  page4Video4.play();
});
page4Video4.addEventListener("mouseout", function () {
  page4Video4.pause();
});
//video 5

page4Video5.addEventListener("mouseover", function () {
  page4Video5.play();
});
page4Video5.addEventListener("mouseout", function () {
  page4Video5.pause();
});

//video 6

page4Video6.addEventListener("mouseover", function () {
  page4Video6.play();
});
page4Video6.addEventListener("mouseout", function () {
  page4Video6.pause();
});

// video 7

page4Video7.addEventListener("mouseover", function () {
  page4Video7.play();
});
page4Video7.addEventListener("mouseout", function () {
  page4Video7.pause();
});

//video 8

page4Video8.addEventListener("mouseover", function () {
  page4Video8.play();
});
page4Video8.addEventListener("mouseout", function () {
  page4Video8.pause();
});

// video 9

page4Video9.addEventListener("mouseover", function () {
  page4Video9.play();
});
page4Video9.addEventListener("mouseout", function () {
  page4Video9.pause();
});
gsap.from("#page1 , #page2 , #page3 ", {
  y: 100,
  opacity: 0,
  delay: 0.2,
  duration: 2,
  stagger: 0.5,
});
