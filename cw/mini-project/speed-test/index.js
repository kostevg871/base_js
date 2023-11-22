let startTime, endTime;
let imageSize = "";
let image = new Image();
let kbSpeed = document.getElementById("kbs");
let mbSpeed = document.getElementById("mbs");
let info = document.getElementById("info");

let totalMbsSpeed = 0;
let totalKbsSpeed = 0;
let numTest = 5;
let testComplited = 0;

let imageApi = "https://source.unsplash.com/random?topic=nature";

image.onload = async function () {
  endTime = new Date().getTime();

  await fetch(imageApi).then((res) => {
    imageSize = res.headers.get("content-length");
    calculateSpeed();
  });
};

function calculateSpeed() {
  let timeDuration = (endTime - startTime) / 1000;

  let loadedBits = imageSize * 8;
  let speedInBts = loadedBits / timeDuration;
  let speedInKBts = speedInBts / 1024;
  let speedInMBts = speedInKBts / 1024;

  totalMbsSpeed += speedInMBts;
  totalKbsSpeed += speedInKBts;

  num.innerHTML = parseInt(Number(speedInMBts).toFixed(2));
  console.log(speedInMBts);
  document.querySelector(".arrow").style.transform = `rotate(${
    (180 * speedInMBts) / 20 - 90
  }deg`;
  testComplited++;

  if (testComplited === numTest) {
    let averageSpeedinKbs = (totalKbsSpeed / numTest).toFixed(2);
    let averageSpeedinMbs = (totalMbsSpeed / numTest).toFixed(2);

    kbSpeed.innerHTML += `${averageSpeedinKbs}`;
    mbSpeed.innerHTML += `${averageSpeedinMbs}`;

    info.innerHTML = "Test Complited";
  } else {
    startTime = new Date().getTime();
    image.src = imageApi;
  }
}

const init = async () => {
  info.innerHTML = "Testing...";
  startTime = new Date().getTime();
  image.src = imageApi;
};

window.onload = () => {
  for (let i = 0; i < numTest; i++) {
    init();
  }
};

//20 mb = 360 deg
//2 mb =

//180 * input / 20
