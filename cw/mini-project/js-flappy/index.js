let block = document.getElementById("block");
let hole = document.getElementById("hole");
let character = document.getElementById("character");
let jumping = 0;
let jumpCount = 0;
let counter = 0;
let startGame = false;
let random, characterTop, cTop, blockLeft, holeTop;

hole.addEventListener("animationiteration", () => {
  random = -(Math.random() * 300 + 150);
  hole.style.top = random + "px";
  counter++;
});

setInterval(function () {
  characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  if (jumping == 0) {
    character.style.top = characterTop + 3 + "px";
  }

  blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

  cTop = -(500 - characterTop);
  holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
  if (
    characterTop > 480 ||
    (blockLeft < 20 &&
      blockLeft > -50 &&
      (cTop < holeTop || cTop > holeTop + 130))
  ) {
    alert("Game Over. Score:" + (counter - 1));
    character.style.top = 100 + "px";
    counter = 0;
  }
}, 10);

function jump() {
  jumping = 1;
  jumpCount = 0;

  let jumpInterval = setInterval(function () {
    characterTop = parseInt(
      window.getComputedStyle(character).getPropertyValue("top")
    );
    if (characterTop > 6 && jumpCount < 15) {
      character.style.top = characterTop - 5 + "px";
    }
    if (jumpCount > 20) {
      clearInterval(jumpInterval);
      jumping = 0;
      jumpCount = 0;
    }
    jumpCount++;
  }, 10);
}
