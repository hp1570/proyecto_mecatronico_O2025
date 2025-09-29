const cards = document.querySelectorAll('.card');
        const modalBackdrop = document.getElementById('modalBackdrop');
        const modalImage = document.getElementById('modalImage');
        const modalCaption = document.getElementById('modalCaption');
        const modalClose = document.getElementById('modalClose');

        cards.forEach(card => {
            card.addEventListener('click', () => {
                modalImage.src = card.dataset.large;
                modalCaption.textContent = card.dataset.caption;
                modalBackdrop.classList.add('open');
            });
        });

        modalClose.addEventListener('click', () => {
            modalBackdrop.classList.remove('open');
            modalImage.src = "";
        });

        modalBackdrop.addEventListener('click', (e) => {
            if (e.target === modalBackdrop) {
                modalBackdrop.classList.remove('open');
                modalImage.src = "";
            }
        }); 
