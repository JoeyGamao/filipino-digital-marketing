const main = document.querySelector(".main");
const paragraph = document.querySelector("#paragraph");
const navBar = document.querySelector("#navBar");

const tl = new TimelineMax();

tl.fromTo(
  main,
  1,
  { opacity: 0, y: "10%" },
  { opacity: 1, y: "0%", ease: Power2.easeInOut }
)
  .fromTo(
    paragraph,
    1,
    { opacity: 0, y: "10%" },
    { opacity: 1, y: "0%", ease: Power2.easeInOut },
    "-=1"
  )
  .fromTo(
    navBar,
    0.8,
    { opacity: 0, y: "-100%" },
    { opacity: 1, y: "0%", ease: Power2.easeInOut },
    "-=0.9"
  );
// .fromTo(
//   logo,
//   0.8,
//   { opacity: 0, x: "-20%" },
//   { opacity: 1, x: "0%", ease: Power2.easeInOut }
// )
// .fromTo(
//   transition,
//   0.8,
//   { opacity: 0, x: "20%" },
//   { opacity: 1, x: "0%", ease: Power2.easeInOut },
//   "-=.8"
// );
