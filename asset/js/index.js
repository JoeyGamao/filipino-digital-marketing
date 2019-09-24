const logo = document.querySelector("#logo");
const up = document.querySelector(".up");
const down = document.querySelector(".down");
const transition = document.querySelector("#transition");
const navBar = document.querySelector("#navBar");

const tl = new TimelineMax();

tl.fromTo(
  up,
  1.2,
  { opacity: 0, y: "-40%" },
  { opacity: 1, y: "10%", ease: Power2.easeInOut }
)
  .fromTo(
    down,
    0.9,
    { opacity: 0, y: "20%" },
    { opacity: 1, y: "0%", ease: Power2.easeInOut }
  )

  // !Navbar
  .fromTo(
    navBar,
    1,
    { opacity: 0, y: "-100%" },
    { opacity: 1, y: "0%", ease: Power2.easeInOut },
    "-=0.9"
  )
  .fromTo(
    logo,
    0.8,
    { opacity: 0, x: "-20%" },
    { opacity: 1, x: "0%", ease: Power2.easeInOut }
  )
  .fromTo(
    transition,
    0.8,
    { opacity: 0, x: "20%" },
    { opacity: 1, x: "0%", ease: Power2.easeInOut },
    "-=.8"
  );
// !Navbar
