const imgEl = document.createElement("img");
const imgContainer = document.getElementById("imageContainer");
imgContainer.appendChild(imgEl);

fetch("https://xkcd.now.sh/?comic=latest")
  .then((response) => response.json())
  .then((data) => (imgEl.src = data.img))
  .catch((err) => console.log(err));
