const categoryEl = document.querySelectorAll(".item");

console.log('Number of categories:', categoryEl.length);

categoryEl.forEach(categoryEl => {
    console.log("Category:", categoryEl.firstElementChild.textContent);
    console.log("Elements:", categoryEl.lastElementChild.children.length);
});