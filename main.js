const showMenuBtn = document.querySelector('#show-menu')
const closeMenuBtn = document.querySelector('#close-menu')

function showSidebar(e) {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function closeSidebar(e) {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

function main() {
    showMenuBtn.addEventListener('click', showSidebar)
    closeMenuBtn.addEventListener('click', closeSidebar)
}

main()
