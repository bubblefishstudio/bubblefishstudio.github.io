(function () {
  var hero = document.querySelector(".hero-media");
  if (!hero) return;

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  function sync() {
    if (reduce.matches) {
      hero.pause();
    } else {
      var play = hero.play();
      if (play && play.catch) play.catch(function () {});
    }
  }

  reduce.addEventListener("change", sync);
  sync();
})();
