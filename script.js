var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });


      function showSidebar(){
            const sidebar = document.querySelector('.sidebar')
            sidebar.style.display = 'flex'
        }
            
        function hideSidebar(){
            const sidebar = document.querySelector('.sidebar')
            sidebar.style.display = 'none'
        }


        const scrollBtn = document.getElementById("scrollTopBtn");

        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
            scrollBtn.classList.add("show");
            } else {
            scrollBtn.classList.remove("show");
            }
        });

        scrollBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });