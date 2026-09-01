document.addEventListener('DOMContentLoaded', function () {

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
  var pick = { colour: 'Solar Yellow', size: 'L' };

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
