document.addEventListener('DOMContentLoaded', function () {

  /* ─── Size Selector ─── */
  var sizeButtons = document.querySelectorAll('.size-btn');
  var selectedSizeLabel = document.getElementById('selected-size');

  sizeButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      sizeButtons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      if (selectedSizeLabel) {
        selectedSizeLabel.textContent = 'Size: ' + btn.dataset.size;
      }
    });
  });

  /* ─── Footer Copyright Year ─── */
  var yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ─── Nav Scroll Shadow ─── */
  var nav = document.querySelector('nav');
  var scrollThreshold = 12;

  function handleNavScroll() {
    if (window.scrollY > scrollThreshold) {
      nav.classList.add('nav-scrolled');
    } else {
      nav.classList.remove('nav-scrolled');
    }
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll(); // run once on load in case page is already scrolled

  /* ─── Scroll-Triggered Reveal Animations ─── */
  var revealElements = document.querySelectorAll('.reveal, .reveal-stagger');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    /* Fallback: show everything immediately if IO not supported */
    revealElements.forEach(function (el) {
      el.classList.add('revealed');
    });
  }

  /* ─── Stagger Delay Calculation ─── */
  /* Sets incremental transition-delay on children of .reveal-stagger containers */
  var staggerContainers = document.querySelectorAll('.reveal-stagger');
  staggerContainers.forEach(function (container) {
    var children = container.children;
    for (var i = 0; i < children.length; i++) {
      /* Skip if child has an explicit delay class (those use !important) */
      if (!children[i].classList.contains('delay-1') &&
          !children[i].classList.contains('delay-2') &&
          !children[i].classList.contains('delay-3') &&
          !children[i].classList.contains('delay-4') &&
          !children[i].classList.contains('delay-5') &&
          !children[i].classList.contains('delay-6') &&
          !children[i].classList.contains('delay-7')) {
        children[i].style.transitionDelay = (i * 0.04) + 's';
      }
    }
  });

});