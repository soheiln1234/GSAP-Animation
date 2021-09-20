const navButton = document.querySelector(".nav-button");
const navOpen = document.querySelector(".nav-open");

const timeLine = new TimelineLite({ paused: true, reversed: true });

timeLine
  .to(".cover", 1, {
    width: "60%",
    ease: Power2.easeOut,
  })
  .to(
    "nav",
    1,
    {
      height: "100%",
      ease: Power2.easeOut,
    },
    "-=0.5"
  )
  .fromTo(
    ".nav-open",
    0.5,
    {
      opacity: 0,
      x: 50,
      ease: Power2.easeOut,
    },
    {
      opacity: 1,
      x: 0,
      onComplete: function () {
        navOpen.style.pointerEvents = "auto";
      },
    }
  );

navButton.addEventListener("click", (e) => {
  if (timeLine.isActive()) {
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
  }
  toggleTween(timeLine);
});

const toggleTween = (tween) => {
  tween.reversed() ? tween.play() : tween.reverse();
};
