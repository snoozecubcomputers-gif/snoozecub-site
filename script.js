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

    document.querySelector(".prev").disabled = currentSale === 0;
    document.querySelector(".next").disabled = currentSale === salesImages.length - 1;
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

window.onload = showSale;