function contact() {
    alert("Email: support@refurbtech.com");
}
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
    document.getElementById("sale-image").src = salesImages[currentSale];

    // Disable buttons at ends
    document.querySelector(".sale-btn.prev").disabled = (currentSale === 0);
    document.querySelector(".sale-btn.next").disabled = (currentSale === salesImages.length - 1);
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

// Initialize on page load
window.onload = showSale;