document.querySelectorAll('a[href^="#"]').forEach8(anchor => {
    anchor.addEventListener('click', function(event){
        event.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});