const sidebarOpenButton = document.querySelector('.sidebar__open');
const sidebarCloseButton = document.querySelector('.collapsed-sidebar__close')
const sidebarToToggle = document.querySelector('.collapsed-sidebar');
console.log(sidebarOpenButton)
console.log(sidebarToToggle)
console.log(sidebarCloseButton)

sidebarOpenButton.addEventListener("click", () => {
  sidebarToToggle.classList.add("collapsed-sidebar--active")
})

sidebarCloseButton.addEventListener("click", () => {
  sidebarToToggle.classList.remove("collapsed-sidebar--active")
})
