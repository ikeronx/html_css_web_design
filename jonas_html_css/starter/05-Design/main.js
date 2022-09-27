

// SMOOTH SCROLL TO FIRST SECTION
const btnScrollTo = document.querySelector('.btn--scroll-to')
const sectionBestSellingChairs = document.querySelector('#section--best-selling-chairs');

btnScrollTo.addEventListener('click', (e) => {
    e.preventDefault();
    sectionBestSellingChairs.scrollIntoView({ behavior: 'smooth' })
});

// REVEAL ELEMENTS / SECTIONS ON SCROLL
const allSections = document.querySelectorAll('.section')

const revealSection = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
});

allSections.forEach(function (section) {
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
});