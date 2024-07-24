const acessKey = "W913BFkc4iAs-KRM_KSTtGZKSHpvznSEeJtJOZlpu8A";

const formE1 = document.querySelector("form");
const inputE1 = document.getElementById("search-input");
const searchResults = document.querySelector(".images");
const showMore = document.getElementById("show-more-button");

let inputData = "";
let page = 1;


async function searchImages() {
    inputData = inputE1.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}
    &client_id=${acessKey}`;

    const response = await fetch(url);
    const data = await response.json();


    const results = data.results;

    if (page === 1) {
        searchResults.innerHTML = "";
    }
    results.map((result) => {
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search-result");
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;
       

        imageWrapper.appendChild(image);
        searchResults.appendChild(imageWrapper);
    });
    page++;
    if (page > 1) {
        showMore.style.display = "block";
    }
};
formE1.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchImages();
})
showMore.addEventListener("click", () => {

    searchImages();
})