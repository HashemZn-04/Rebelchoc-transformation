document.addEventListener('DOMContentLoaded', function () {

  var body = document.body;
  var desktopQuery = window.matchMedia('(min-width: 1080px)');

  /* ─── Mobile drawer ─── */
  var hamburger = document.getElementById('hamburger');
  var drawerClose = document.getElementById('drawer-close');
  var overlay = document.getElementById('drawer-overlay');

  function openDrawer() {
    body.classList.add('drawer-open');
    hamburger.setAttribute('aria-expanded', 'true');
    drawerClose.focus();
  }
  function closeDrawer() {
    if (!body.classList.contains('drawer-open')) return;
    body.classList.remove('drawer-open');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  hamburger.addEventListener('click', openDrawer);
  drawerClose.addEventListener('click', function () { closeDrawer(); hamburger.focus(); });
  overlay.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeDrawer();
  });

  /* Close the drawer after choosing a destination on mobile */
  document.querySelectorAll('.sidebar a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (!desktopQuery.matches) closeDrawer();
    });
  });

  /* ─── Desktop sidebar collapse (persisted) ─── */
  var collapseToggle = document.getElementById('collapse-toggle');
  var COLLAPSE_KEY = 'rebelchoc-nav-collapsed';

  try {
    if (localStorage.getItem(COLLAPSE_KEY) === '1') {
      body.classList.add('nav-collapsed');
      collapseToggle.setAttribute('aria-expanded', 'false');
      collapseToggle.setAttribute('aria-label', 'Expand navigation');
    }
  } catch (e) { /* storage unavailable — default to expanded */ }

  collapseToggle.addEventListener('click', function () {
    var collapsed = body.classList.toggle('nav-collapsed');
    collapseToggle.setAttribute('aria-expanded', String(!collapsed));
    collapseToggle.setAttribute('aria-label', collapsed ? 'Expand navigation' : 'Collapse navigation');
    try { localStorage.setItem(COLLAPSE_KEY, collapsed ? '1' : '0'); } catch (e) {}
  });

  /* ─── Scrollspy: highlight the section in view ─── */
  var spyLinks = document.querySelectorAll('[data-spy]');
  var spyTargets = [];
  spyLinks.forEach(function (link) {
    var target = document.getElementById(link.dataset.spy);
    if (target) spyTargets.push({ link: link, target: target });
  });

  function setActive(id) {
    spyTargets.forEach(function (item) {
      item.link.classList.toggle('is-active', item.link.dataset.spy === id);
    });
    // A chapter in view also lights up its parent "The Story" entry
    var chapterIds = ['chapter-1621', 'chapter-1938', 'chapter-2026', 'manifesto'];
    if (chapterIds.indexOf(id) !== -1) {
      var storyLink = document.querySelector('[data-spy="story"]');
      if (storyLink) storyLink.classList.add('is-active');
    }
  }

  var spyObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, { rootMargin: '-35% 0px -55% 0px' });

  spyTargets.forEach(function (item) { spyObserver.observe(item.target); });

  /* ─── Reveal on scroll ─── */
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .reveal-stagger').forEach(function (el) {
    revealObserver.observe(el);
  });

  /* ─── Scroll progress + back to top ─── */
  var progress = document.getElementById('scroll-progress');
  var backToTop = document.getElementById('back-to-top');
  var ticking = false;

  function onScroll() {
    var doc = document.documentElement;
    var max = doc.scrollHeight - window.innerHeight;
    var pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    progress.style.width = pct + '%';
    backToTop.classList.toggle('is-shown', window.scrollY > 700);
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { window.requestAnimationFrame(onScroll); ticking = true; }
  }, { passive: true });
  onScroll();

  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ─── Colour & size preview (real selection happens on eBay) ─── */
  var shirtCards = document.querySelectorAll('.shirt-card');
  var sizeButtons = document.querySelectorAll('.size-btn');
  var pickNote = document.getElementById('pick-note');
  var pick = { colour: 'Solar Yellow', size: 'M' };

  function updatePick() {
    if (pickNote) pickNote.textContent = pick.colour + ' · Size ' + pick.size;
  }

  shirtCards.forEach(function (card) {
    card.addEventListener('click', function () {
      shirtCards.forEach(function (c) {
        c.classList.remove('is-selected');
        c.setAttribute('aria-pressed', 'false');
      });
      card.classList.add('is-selected');
      card.setAttribute('aria-pressed', 'true');
      pick.colour = card.dataset.colour;
      updatePick();
    });
  });

  sizeButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      sizeButtons.forEach(function (b) {
        b.classList.remove('is-selected');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('is-selected');
      btn.setAttribute('aria-pressed', 'true');
      pick.size = btn.dataset.size;
      updatePick();
    });
  });

  /* ─── Footer year ─── */
  var yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
