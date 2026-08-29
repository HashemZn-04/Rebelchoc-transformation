document.addEventListener('DOMContentLoaded', function () {

  /* ══════════════════════════════════════
     Size Selector — Tactile State Toggle
     ══════════════════════════════════════ */
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

  /* ══════════════════════════════════════
     Footer Copyright Year
     ══════════════════════════════════════ */
  var yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ══════════════════════════════════════
     Mobile Drawer
     ══════════════════════════════════════ */
  var sidebar   = document.getElementById('sidebar');
  var overlay   = document.getElementById('drawer-overlay');
  var hamburger = document.getElementById('hamburger');
  var closeBtn  = document.getElementById('drawer-close');
  var isMobile  = function () { return window.innerWidth <= 767; };

  function openDrawer() {
    sidebar.classList.add('open');
    overlay.classList.add('visible');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    sidebar.classList.remove('open');
    overlay.classList.remove('visible');
    document.body.style.overflow = '';
  }

  if (hamburger) hamburger.addEventListener('click', openDrawer);
  if (closeBtn)  closeBtn.addEventListener('click', closeDrawer);
  if (overlay)   overlay.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && sidebar && sidebar.classList.contains('open')) closeDrawer();
  });

  /* Close drawer on sidebar link click (mobile) */
  var sidebarLinks = document.querySelectorAll('.sidebar-link');
  sidebarLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (isMobile()) closeDrawer();
    });
  });

  /* ══════════════════════════════════════
     Sidebar Active Link Tracking
     ══════════════════════════════════════ */
  var trackedSections = [];
  sidebarLinks.forEach(function (link) {
    var href = link.getAttribute('href');
    if (href && href.charAt(0) === '#') {
      var section = document.getElementById(href.substring(1));
      if (section) trackedSections.push({ el: section, link: link });
    }
  });

  if (trackedSections.length > 0 && 'IntersectionObserver' in window) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          sidebarLinks.forEach(function (l) { l.classList.remove('active'); });
          for (var i = 0; i < trackedSections.length; i++) {
            if (trackedSections[i].el === entry.target) {
              trackedSections[i].link.classList.add('active');
              break;
            }
          }
        }
      });
    }, { threshold: 0.15, rootMargin: '-5% 0px -65% 0px' });

    trackedSections.forEach(function (s) { sectionObserver.observe(s.el); });
  }

  /* ══════════════════════════════════════
     Sidebar Scroll Progress Bar
     ══════════════════════════════════════ */
  var progressBar = document.getElementById('sidebar-progress');

  function updateProgress() {
    if (!progressBar || isMobile()) return;
    var scrollTop  = window.scrollY;
    var docHeight  = document.documentElement.scrollHeight - window.innerHeight;
    var pct = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;
    progressBar.style.height = pct + '%';
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  /* ══════════════════════════════════════
     Back to Top Button
     ══════════════════════════════════════ */
  var backToTop = document.getElementById('back-to-top');
  var backToTopThreshold = 600;

  function handleBackToTop() {
    if (!backToTop) return;
    if (window.scrollY > backToTopThreshold) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', handleBackToTop, { passive: true });

  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ══════════════════════════════════════
     Scroll-Triggered Reveal Animations
     ══════════════════════════════════════ */
  var revealElements = document.querySelectorAll('.reveal, .reveal-stagger');

  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealElements.forEach(function (el) { el.classList.add('revealed'); });
  }

  /* ══════════════════════════════════════
     Stagger Delay Calculation
     ══════════════════════════════════════ */
  var staggerContainers = document.querySelectorAll('.reveal-stagger');
  var delayClasses = ['delay-1','delay-2','delay-3','delay-4','delay-5','delay-6'];

  staggerContainers.forEach(function (container) {
    var children = container.children;
    for (var i = 0; i < children.length; i++) {
      var hasDelay = false;
      for (var d = 0; d < delayClasses.length; d++) {
        if (children[i].classList.contains(delayClasses[d])) { hasDelay = true; break; }
      }
      if (!hasDelay) children[i].style.transitionDelay = (i * 0.04) + 's';
    }
  });

  /* Recalculate progress on resize (sidebar appears/disappears) */
  window.addEventListener('resize', updateProgress, { passive: true });

});