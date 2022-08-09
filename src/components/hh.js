let btn = document.querySelector(".btn");
let vid = document.querySelector("video");

btn.addEventListener("click", () => {
  vid
    .play()
    .then(() => {
      console.log("video playing");
    })
    .catch((err) => {
      console.log(err);
    });
});

vid.addEventListener("click", () => {
  vid.pause();
});
