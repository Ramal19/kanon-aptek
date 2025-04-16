let backBtn = document.getElementById("back")
let nextBtn = document.getElementById("next")
let productsCon = document.querySelector(".products")

backBtn.addEventListener('click', () => {

    productsCon.scrollLeft -= 225;

})

nextBtn.addEventListener('click', () => {
    if (productsCon.scrollLeft + productsCon.clientWidth >= productsCon.scrollWidth) {
        productsCon.scrollLeft = 0;
    } else {
        productsCon.scrollLeft += 225;
    }
})

setInterval(() => {
    if (productsCon.scrollLeft + productsCon.clientWidth >= productsCon.scrollWidth) {
        productsCon.scrollLeft = 0;
    } else {
        productsCon.scrollLeft += 225;
    }
}, 3000);


document.querySelectorAll(".products img").forEach(img => {
    img.addEventListener("click", (event) => {
        let product = event.target.closest(".products");
        let title = product.querySelector("span").innerText;
        let price = product.querySelector("p").innerText;
        let imageUrl = event.target.src;

        window.location.href = `../main/details.html?title=${encodeURIComponent(title)}&price=${encodeURIComponent(price)}&image=${encodeURIComponent(imageUrl)}`;
    });
});