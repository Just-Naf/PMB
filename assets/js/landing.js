document.addEventListener("DOMContentLoaded", function () {
	const menuButton = document.getElementById("menu-button");
	const navLinks = document.getElementById("nav-links");
	const content = document.querySelector(".masthead .content");
	const navItems = document.querySelectorAll(".nav-link");

	if (menuButton && navLinks && content) {
		menuButton.addEventListener("click", function () {
			navLinks.classList.toggle("active");

			if (navLinks.classList.contains("active")) {
				content.style.transform = "translateY(300px)";
			} else {
				content.style.transform = "translateY(0)";
			}
		});
	}

	// dropdown
	window.toggleDropdown = function (id) {
		const dropdown = document.getElementById(id);
		if (dropdown) {
			dropdown.classList.toggle("hidden");
		} else {
			console.error(`Dropdown dengan id "${id}" tidak ditemukan.`);
		}
	};

	document.querySelectorAll(".accordion-item").forEach((item) => {
		item.addEventListener("click", () => {
			const content = item.nextElementSibling;
			const icon = item.querySelector(".fa-chevron-down");
			if (content.style.display === "block") {
				content.style.display = "none";
				icon.style.transform = "rotate(0deg)";
			} else {
				content.style.display = "block";
				icon.style.transform = "rotate(180deg)";
			}
		});
	});

	// smooth
	if (navItems.length > 0) {
		navItems.forEach((link) => {
			link.addEventListener("click", function (e) {
				e.preventDefault();

				const targetId = this.getAttribute("href").substring(1);
				const targetElement = document.getElementById(targetId);

				if (targetElement) {
					const offset = 80;
					const targetPosition = targetElement.offsetTop - offset;

					window.scrollTo({
						top: targetPosition,
						behavior: "smooth",
					});

					// Tutup menu mobile setelah klik
					if (window.innerWidth <= 640) {
						navLinks.classList.remove("active");
						content.style.transform = "translateY(0)";
					}
				}
			});
		});
	}
});
