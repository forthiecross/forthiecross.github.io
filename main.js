"use strict";
let imgArray = [];
let currentPhoto = 0;

let imageGenerator = (src, title, description) => {
  let imgObject = {
    src: src,
    title: title,
    description: description,
  };
  imgArray.push(imgObject);
};

imageGenerator(
  "img/img1.jpg",
  "Dancing with wolves",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
);
imageGenerator(
  "img/img2.jpg",
  "The ruins",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
);
imageGenerator(
  "img/img3.jpg",
  "The Castle",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
);
imageGenerator(
  "img/img4.jpg",
  "The Lady of the forest",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
);
imageGenerator(
  "img/img5.jpg",
  "Violet Moon",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
);

console.log(imgArray);

let loadPhoto = (number) => {
  let imgPath = document.querySelector("#photo");
  imgPath.setAttribute("src", imgArray[number].src);
  let header = document.querySelector("main div h3");
  header.textContent = imgArray[number].title;
  let descriptionParagraph = document.querySelector("main div p");
  descriptionParagraph.textContent = imgArray[number].description;
};

loadPhoto(currentPhoto);

let leftClick = document.querySelector("#left-arrow");
let rightClick = document.querySelector("#to-rotate");

leftClick.onclick = () => {
  if (currentPhoto === 0) {
    currentPhoto = imgArray.length - 1;
  } else {
    currentPhoto--;
  }
  loadPhoto(currentPhoto);
  activeThmb.forEach((element) => element.classList.remove("active"));
  activeThmb[currentPhoto].classList.add('active')
};
rightClick.onclick = () => {
  if (currentPhoto === imgArray.length - 1) {
    currentPhoto = 0;
  } else {
    currentPhoto++;
  }
  loadPhoto(currentPhoto);
  activeThmb.forEach((element) => element.classList.remove("active"));
  activeThmb[currentPhoto].classList.add('active')
};

window.addEventListener('keydown', function(event) {
  if(event.key == 'ArrowLeft'){
    if (currentPhoto === 0) {
      currentPhoto = imgArray.length - 1;
    } else {
      currentPhoto--;
    }
    loadPhoto(currentPhoto);
    activeThmb.forEach((element) => element.classList.remove("active"));
    activeThmb[currentPhoto].classList.add('active')
  }else if(event.key == 'ArrowRight'){
    if (currentPhoto === imgArray.length - 1) {
      currentPhoto = 0;
    } else {
      currentPhoto++;
    }
    loadPhoto(currentPhoto);
    activeThmb.forEach((element) => element.classList.remove("active"));
    activeThmb[currentPhoto].classList.add('active')
  }
})

let thumbnails = document.querySelector("section.thumbnails");

let loadThumbnails = () => {
  for (let i = 0; i < imgArray.length; i++) {
    let thmbImg = document.createElement("img");
    thmbImg.setAttribute("src", imgArray[i].src);
    thmbImg.setAttribute("class", "box");
    thmbImg.setAttribute("id", i);
    thumbnails.appendChild(thmbImg);
  }
};

loadThumbnails();

let activeThmb = document.querySelectorAll(".box");
activeThmb[0].classList.add('active');

for (let i = 0; i < activeThmb.length; i++) {
  let box = activeThmb[i];
  box.onclick = () => {
    currentPhoto = i;
    loadPhoto(currentPhoto);

    activeThmb.forEach((element) => element.classList.remove("active"));
    box.classList.add("active");
  };
}

console.log(activeThmb);
