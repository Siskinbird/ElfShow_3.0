let menuLinks = document.querySelectorAll(".nav-list-item");

function mobileNav() {
	var toggleButton = document.querySelector('.toggle-menu');
	var navBar = document.querySelector('.nav-bar');
	toggleButton.addEventListener('click', function () {
		navBar.classList.toggle('toggle');
	});
	menuLinks.forEach((link) =>
  	link.addEventListener("click", () => {
		navBar.classList.toggle('toggle');
  })
);
}

export default mobileNav;