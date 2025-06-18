document.addEventListener('DOMContentLoaded', () => {
    const mission = document.querySelector('.mission-container');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                mission.classList.add('visible');
                observer.unobserve(mission);
            }
        });
    });

    observer.observe(mission);
});
