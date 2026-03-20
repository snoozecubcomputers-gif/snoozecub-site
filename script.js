/* ==========================
   SALES CAROUSEL
   ========================== */
const salesImages = [
    "images/sales/sale1.jpeg",
    "images/sales/sale2.jpeg",
    "images/sales/sale3.jpeg",
    "images/sales/sale4.jpeg",
    "images/sales/sale5.jpeg",
    "images/sales/sale6.jpeg",
    "images/sales/sale7.jpeg"
];

let currentSale = 0;

function showSale() {
    const img = document.getElementById("sale-image");
    if (!img) return;

    img.src = salesImages[currentSale];

    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    if (prevBtn && nextBtn) {
        prevBtn.disabled = currentSale === 0;
        nextBtn.disabled = currentSale === salesImages.length - 1;
    }
}

function nextSale() {
    if (currentSale < salesImages.length - 1) {
        currentSale++;
        showSale();
    }
}

function prevSale() {
    if (currentSale > 0) {
        currentSale--;
        showSale();
    }
}

/* ==========================
   PRODUCT IMAGE CAROUSEL
   ========================== */
const productContainer = document.querySelector(".product-images");

if (productContainer) {
    const images = productContainer.dataset.images.split(",");
    let currentIndex = 0;

    const imgElement = productContainer.querySelector("#product-image");
    const prevBtn = productContainer.querySelector(".prev");
    const nextBtn = productContainer.querySelector(".next");

    function updateImage() {
        imgElement.src = images[currentIndex].trim();

        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === images.length - 1;
    }

    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateImage();
        }
    });

    nextBtn.addEventListener("click", () => {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            updateImage();
        }
    });

    updateImage();
}

/* ==========================
   INIT
   ========================== */
window.onload = function () {
    showSale();
};