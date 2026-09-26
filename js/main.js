/**
 * Centre for Research and Development (CRD)
 * Army Institute of Business Administration (AIBA), Sylhet
 * Interactive UI & Dynamic Components Controller
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Smooth Scrolling for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || !targetId) return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const headerOffset = 90;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
                this.classList.add('active');

                // Close mobile menu if open
                const nav = document.querySelector('.nav');
                const mobileToggle = document.querySelector('.mobile-nav-toggle');
                if (nav && nav.classList.contains('mobile-open')) {
                    nav.classList.remove('mobile-open');
                    if (mobileToggle) mobileToggle.classList.remove('active');
                    document.body.classList.remove('nav-open');
                }
            }
        });
    });

    // Mobile Navigation Drawer Toggle Handler
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    const navMenu = document.querySelector('.nav');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = navMenu.classList.toggle('mobile-open');
            mobileToggle.classList.toggle('active', isOpen);
            document.body.classList.toggle('nav-open', isOpen);
        });

        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
                navMenu.classList.remove('mobile-open');
                mobileToggle.classList.remove('active');
                document.body.classList.remove('nav-open');
            }
        });
    }

    // 3. Scrollspy active link detection
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= (sectionTop - 120)) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // 4. Publication Filter Tabs
    const filterButtons = document.querySelectorAll('.pub-filter-btn');
    const publicationCards = document.querySelectorAll('.crd-pub-card');

    if (filterButtons.length > 0 && publicationCards.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');

                publicationCards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    if (filter === 'all' || category === filter) {
                        card.style.display = 'block';
                        card.classList.add('fade-in');
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // 5. Manuscript Call Modal / Alert Handler
    window.openSubmissionGuide = function() {
        alert("Centre for Research and Development (CRD) - Call for Papers\n\nManuscripts for 'Jalalabad Papers' (Vol. 4, Issue 1, 2026) and 'CRD Working Paper Series' may be submitted to: crd@aibasylhet.edu.bd\n\nPlease ensure your manuscript follows APA 7th Edition guidelines.");
    };
});
