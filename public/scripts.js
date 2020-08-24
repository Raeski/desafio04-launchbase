const currentPage = location.pathname
const menuItems = document.querySelectorAll("header .links a")
console.log(currentPage)

for(item of menuItems) {
    if(currentPage.includes(item.getAttribute("href"))) {
        item.classList.add("active")
    }
}

// Paginação
//totalPages = 20
// selectedPage = 15
// [1, ..., 13, 14, 15, 16, 17, ....,20]