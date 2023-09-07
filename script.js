const accessKey = "feNYglbGui_8FP8g8aNCiwbckWLCkjfkZvrRIMXWItg";

let formInput = document.querySelector(".form");
let searchBtn = document.querySelector(".btn");
let imageContainer = document.querySelector(".image_container");
let nextBtn = document.querySelector(".next");

let keyword = "";
let page = 1;
async function searchImage() {
  keyword = formInput.value;
  let url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
  const responce = await fetch(url);
  const data = await responce.json();
  let results = data.results;
  url = true;
  if (page <= 1) {
    imageContainer.innerHTML = "";
  }
  results.map((result) => {
    const image = document.createElement("img");
    const imgSrc = (image.src = result.urls.small);
    const imageLink = document.createElement("a");
    imageLink.href = imgSrc;
    imageLink.appendChild(image);
    imageContainer.appendChild(imageLink);
  });
  nextBtn.style.display = "block";
}
searchBtn.addEventListener("click", () => {
  searchImage();
  page = 1;
});
nextBtn.addEventListener("click", (e) => {
  page++;
  searchImage();
});
