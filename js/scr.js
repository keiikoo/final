const burger = document.querySelector('.menu');
document.addEventListener("click", menu);
function menu(event) {
    if (event.target.closest(".menu_button")) {
        burger.classList.toggle('_active')
    }
    if (!event.target.closest(".menu")) {
        burger.classList.remove('_active')
    }
}

window.addEventListener("DOMContentLoaded", function() {
    'use strict';
    
    let tab = document.querySelectorAll('.buttons_in_header');
    let info = document.querySelector('.buttonss');
    let tabContent = document.querySelectorAll('.cards_in_second_block')
    console.log(tab)

    
    function hideContent(a){
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove("show");
            tabContent[i].classList.add("hide");
        }
    }
    hideContent(1);

    function showContent(b){
        if (tabContent[b].classList.contains("hide")){
            tabContent[b].classList.remove("hide");
            tabContent[b].classList.add("show")
        }
    }

    
    info.addEventListener("click", function (event){
        
        let target = event.target;

        if (target && target.classList.contains('buttons_in_header') || target && target.classList.contains('txt_in_buttons')) {
            console.log(target)
            console.log(target.classList)
            for(let i = 0; i < tab.length; i++){
                if (target == tab[i]){
                    hideContent(0);
                    tab.forEach(item => {
                    item.classList.remove('act');
                    });
                    target.classList.add('act');
                    showContent(i);
                    console.log(tab.length)
                    break
                }
            }
        }
    });

    let slideIndex = 1,
        slides = document.querySelectorAll('.big_card'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsContainer = document.querySelector('.dots'),
        dots = document.querySelectorAll('.dot');
        
        showSlides(slideIndex);

    function showSlides (n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        dots.forEach((item) => item.classList.remove('act_dot'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('act_dot');
        
    }
    function plusSlides(n) {
        showSlides(slideIndex += n); 
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function() {
        plusSlides(-1);
    });

    next.addEventListener('click', function() {
        plusSlides(1);
    });
    dotsContainer.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    });
    const modal = document.getElementById("modal");
	const button = document.getElementById("modal_button");
	const closeButton = document.querySelector(".modal_close_button");

	button.addEventListener("click", function () {
		modal.classList.add("modal_active");

		closeButton.addEventListener("click", closeModal);

		function closeModal() {
			modal.classList.remove("modal_active");

			closeButton.removeEventListener("click", closeModal);

			modal.removeEventListener("click", hideModal);
		}

		modal.addEventListener("click", hideModal);

		function hideModal(event) {
			if (event.target === closeButton) {
				closeModal();
			}
		}
	});



    const accordion = () => {
        const accord_contents = document.querySelectorAll(".common_card_in_fifth_block");
		accord_contents.forEach((accord_content) => {
			accord_content.classList.add("animate__animated","animate__backInLeft");
		});

		const accords = document.querySelectorAll(".accord_header");
		accords.forEach((accord) => {
			accord.addEventListener("click", function () {
				if (!this.classList.contains("active_accord")) {
					accords.forEach((accord) => {
						accord.classList.remove("active_accord", "active_accord_style");
					});
					this.classList.add("active_accord", "active_accord_style");
				} else
                    accords.forEach((accord) => {
						accord.classList.remove("active_accord", "active_accord_style");
					});
			});
		});
	};
	accordion();

});






let tab = function(){
    let tabNav = document.querySelectorAll(".header_in_basement_nav_extended");
    let tabContent = document.querySelectorAll(".tab");
    let tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove("active_tab");
        });
        this.classList.add("active_tab");

        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }
    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('active_tab') : item.classList.remove('active_tab')
        })
    }
};
tab();




