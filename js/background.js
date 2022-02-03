const images = [
 "bluewave.jpg", "yellowwave.jpg", "blackwave.jpg"
];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
bgImage.src = `imgs/${chosenImage}`;
document.body.appendChild(bgImage);

// appendChild는 body구조의 맨 마지막에 생성
// prependChild는 body구조의 맨 앞에 생성