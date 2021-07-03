var tween = gsap.to(".search-up", {
  duration: .5,
  display: "block",
  opacity: "1",
  ease: "none",
  paused: true
});

document.querySelector("#header-search__link").onclick = () => tween.play();
document.querySelector("#close").onclick = () => tween.reverse();
