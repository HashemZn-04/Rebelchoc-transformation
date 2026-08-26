## CSS Code
```css
/* ============================================================
   REBEL CHOC — WORLD LIBERATION DAY TEE
   Stylesheet
   ============================================================ */

*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --gold:     #ffbf00;
  --gold-dim: #cc9900;
  --cream:    #f5ede0;
  --muted:    #c8ae90;
  --bg:       #5c2e0a;
  --bg-mid:   #6e3810;
  --bg-card:  #4a2206;
  --border:   rgba(255, 191, 0, 0.25);
}

html { scroll-behavior: smooth; }

body {
  font-family: 'Roboto', sans-serif;
  background: var(--bg);
  color: var(--cream);
  min-height: 100vh;
  overflow-x: hidden;
}

/* ─── IMAGE PLACEHOLDERS ───
   Generic placeholder box. Swap the <div class="img-placeholder ..."> for a real
   <img> tag once artwork is ready — each spot in index.html has a comment
   telling you exactly what image goes there and a suggested filename. */
.img-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 191, 0, 0.04);
  border: 2px dashed var(--border);
  border-radius: 8px;
  color: var(--muted);
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-align: center;
  padding: 20px;
}

.nav-logo-placeholder { width: 160px; height: 56px; flex-shrink: 0; }

.hero-statue-placeholder {
  width: clamp(280px, 92vw, 1280px);
  max-width: 100%;
  aspect-ratio: 4 / 3;
  margin: 0 auto 32px;
  border-radius: 12px;
}

.tradition-img-placeholder { width: 100%; aspect-ratio: 4 / 5; }

.year-bg-placeholder { width: 100%; min-height: 640px; border-radius: 0; }

.order-img-placeholder { width: 100%; aspect-ratio: 4 / 5; margin-bottom: 24px; }

.footer-logo-placeholder { width: 160px; height: 50px; margin: 0 auto 12px; }

/* ─── NAV ─── */
nav {
  position: sticky; top: 0; z-index: 100;
  background: rgba(60, 25, 5, 0.97);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
  padding: 14px 28px;
  display: flex; align-items: center; justify-content: space-between;
}
.nav-cta {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  background: var(--gold);
  color: var(--bg);
  padding: 9px 22px;
  border-radius: 3px;
  text-decoration: none;
  transition: background 0.2s;
}
.nav-cta:hover { background: #ffd040; }

/* ─── HERO ─── */
.hero {
  min-height: 100vh;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  text-align: center;
  padding: 80px 24px 60px;
  position: relative;
  overflow: hidden;
}
.hero::before {
  content: '';
  position: absolute; inset: 0;
  background: radial-gradient(ellipse 90% 70% at 50% 40%, rgba(255, 191, 0, 0.06) 0%, transparent 70%);
  pointer-events: none;
}
.hero-label {
  font-family: 'Roboto', sans-serif;
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.5em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 24px;
}
.hero-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: clamp(3.2rem, 11vw, 8.5rem);
  line-height: 0.9;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  color: var(--gold);
}
.hero-liberation {
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: clamp(3.2rem, 11vw, 8.5rem);
  line-height: 0.9;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  color: var(--gold);
  margin-bottom: 48px;
}

/* Tagline trio */
.taglines {
  display: flex;
  gap: 0;
  margin-top: 0;
  margin-bottom: 60px;
  border: 1px solid var(--border);
  border-radius: 4px;
  overflow: hidden;
  width: clamp(520px, 90vw, 1200px);
  margin-left: auto;
  margin-right: auto;
}
.tagline-item {
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: clamp(1.6rem, 5vw, 3rem);
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--gold);
  padding: 12px 24px;
  border-right: 1px solid var(--border);
  flex: 1;
  text-align: center;
  white-space: nowrap;
}
.tagline-item:last-child { border-right: none; }

/* ─── SECTION GENERIC ─── */
section { padding: 80px 24px; }
.section-inner { max-width: 760px; margin: 0 auto; }
.section-label {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 0.7rem;
  letter-spacing: 0.5em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 16px;
}
.section-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 1.05;
  color: var(--cream);
  margin-bottom: 28px;
}
.order-title-center { text-align: center; }
.rule {
  width: 48px; height: 1px;
  background: var(--gold); opacity: 0.5;
  margin: 0 0 32px;
}
.order-rule { margin: 0 auto; }

/* ─── TRADITION ─── */
.tradition {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.95fr);
  column-gap: clamp(24px, 4vw, 56px);
  align-items: center;
  overflow: hidden;
  min-height: 760px;
  background: var(--bg-mid);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 0 clamp(24px, 6vw, 80px) 0 clamp(32px, 8vw, 120px);
}
.tradition-text { flex: 1; padding: 60px 0; z-index: 1; }
.tradition-years {
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  letter-spacing: 0.08em;
  color: var(--gold);
  margin-bottom: 20px;
  line-height: 1;
}
.tradition-title,
.tradition-sub,
.tradition-sub2 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: clamp(3.5rem, 9vw, 7rem);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  line-height: 0.95;
  color: var(--gold);
  margin-bottom: 4px;
}
.tradition-sub2 { margin-top: 4px; white-space: nowrap; }
.tradition-img-wrap {
  min-width: 0;
  width: min(100%, 760px);
  justify-self: end;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0;
}
@media (max-width: 640px) {
  .tradition {
    grid-template-columns: 1fr;
    row-gap: 24px;
    padding: 48px 24px 0;
    min-height: unset;
  }
  .tradition-img-wrap { width: 70%; margin: 0 auto; }
}

/* ─── YEAR SECTIONS ─── */
.year-section { position: relative; overflow: hidden; border-top: 1px solid var(--border); }
.year-section::before {
  content: '';
  position: absolute; inset: 0;
  background: rgba(20, 8, 0, 0.28);
  pointer-events: none;
  z-index: 1;
}
.year-section-inner {
  position: absolute;
  top: 50%;
  left: clamp(32px, 8vw, 120px);
  transform: translateY(-50%);
  z-index: 2;
  max-width: 780px;
}
.year-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: clamp(3.2rem, 11vw, 8.5rem);
  line-height: 0.9;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  color: var(--gold);
  margin-bottom: 40px;
}
.year-body {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: clamp(1rem, 2.5vw, 1.4rem);
  line-height: 1.6;
  color: var(--cream);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.year-body p + p { margin-top: 28px; }
.year-body-highlight { font-size: clamp(1.8rem, 5vw, 3.2rem); color: var(--gold); }
.year-section--1938 .year-title,
.year-section--1938 .year-body { color: #ff5500; }
.year-section--2026 .year-title,
.year-section--2026 .year-body { color: #5c2e0a; }
.year-section--2026 .year-body-highlight { color: #5c2e0a; }
.year-body-nowrap { white-space: nowrap; }

/* ─── RESIST / REJECT / REACT ─── */
.resist-section {
  background: var(--bg);
  padding: 80px clamp(32px, 8vw, 120px);
  border-top: 1px solid var(--border);
  text-align: center;
}
.resist-heading {
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: clamp(1.4rem, 4vw, 2.8rem);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--cream);
  margin-bottom: 16px;
}
.resist-heading:last-of-type { margin-bottom: 40px; }
.resist-text {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  color: var(--cream);
  margin-bottom: 16px;
  line-height: 1.6;
}
.resist-emphasis {
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: clamp(1.2rem, 3vw, 2rem);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--cream);
  margin-bottom: 48px;
}
.resist-quote {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: clamp(1.1rem, 3vw, 1.8rem);
  color: var(--gold);
  line-height: 1.7;
  max-width: 900px;
  margin: 0 auto;
}

/* ─── HOW TO REACT ─── */
.how-section {
  background: var(--cream);
  padding: 80px clamp(32px, 8vw, 120px);
  border-top: 1px solid var(--border);
  text-align: center;
}
.how-inner { max-width: 780px; margin: 0 auto; }
.how-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #2a1200;
  margin-bottom: 12px;
}
.how-rule { width: 60px; height: 3px; background: #2a1200; margin: 0 auto 40px; }
.how-subtitle {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: var(--gold-dim);
  margin-bottom: 36px;
  letter-spacing: 0.05em;
}
.how-item {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: #2a1200;
  margin-bottom: 28px;
  line-height: 1.7;
}
.how-item--demonstrate { color: var(--gold-dim); }
.how-item--generate { color: #c0392b; margin-bottom: 0; }

/* ─── LET'S REACT ─── */
.lets-react-section {
  background: #3a3a0a;
  padding: 80px clamp(32px, 8vw, 120px);
  border-top: 1px solid var(--border);
  text-align: center;
}
.lr-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: clamp(1.8rem, 5vw, 3.5rem);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--cream);
  margin-bottom: 40px;
}
.lr-subtitle {
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: clamp(1.5rem, 4vw, 2.8rem);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--cream);
  margin-bottom: 28px;
}
.lr-lead {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: clamp(1rem, 2vw, 1.3rem);
  color: var(--cream);
  margin-bottom: 20px;
}
.lr-question {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: clamp(1rem, 2vw, 1.3rem);
  color: var(--cream);
  margin-bottom: 16px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}
.lr-question:last-of-type { margin-bottom: 48px; }
.lr-final {
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: clamp(1.1rem, 2.5vw, 1.6rem);
  color: var(--cream);
  font-style: italic;
  letter-spacing: 0.03em;
}

/* ─── NOBEL SECTION ─── */
.nobel { background: var(--bg); }
.nobel-intro {
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--gold);
  margin-bottom: 32px;
  line-height: 1.2;
}
.nobel-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.nobel-item {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 14px 18px;
  font-size: 0.88rem;
  color: #c8b898;
  display: flex; align-items: center; gap: 10px;
  transition: border-color 0.2s;
}
.nobel-item:hover { border-color: rgba(255, 191, 0, 0.4); }
.nobel-item::before { content: '★'; color: var(--gold); font-size: 0.7rem; flex-shrink: 0; }
.solidarity {
  margin-top: 40px;
  padding: 24px 28px;
  background: rgba(255, 191, 0, 0.06);
  border-left: 3px solid var(--gold);
  border-radius: 0 6px 6px 0;
  font-size: 1rem;
  color: var(--cream);
  font-style: italic;
  line-height: 1.7;
}
.solidarity strong { color: var(--cream); }

/* ─── ORDER SECTION ─── */
.order { background: var(--bg-mid); border-top: 1px solid var(--border); }
.order-header { text-align: center; margin-bottom: 40px; }
.order-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 40px;
  max-width: 580px;
  margin: 0 auto;
}
.order-name {
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--gold);
  margin-bottom: 6px;
}
.order-type {
  font-size: 0.8rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 28px;
}
.donate-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 191, 0, 0.1);
  border: 1px solid rgba(255, 191, 0, 0.3);
  border-radius: 20px;
  padding: 7px 16px;
  font-size: 0.82rem;
  color: var(--gold);
  letter-spacing: 0.1em;
  margin-bottom: 28px;
}
.order-includes {
  margin-bottom: 28px;
  padding-bottom: 28px;
  border-bottom: 1px solid rgba(255, 191, 0, 0.1);
}
.includes-label {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 0.7rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 14px;
}
.includes-list { list-style: none; }
.includes-list li {
  font-size: 0.9rem;
  color: #c8b898;
  padding: 7px 0;
  border-bottom: 1px solid rgba(255, 191, 0, 0.07);
  display: flex; align-items: center; gap: 10px;
}
.includes-list li:last-child { border-bottom: none; }
.includes-list li::before { content: ''; width: 5px; height: 5px; border-radius: 50%; background: var(--gold); flex-shrink: 0; }

/* Price */
.price-row {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 24px;
}
.price-main {
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: 3.2rem;
  color: var(--cream);
  line-height: 1;
}
.price-main sup { font-size: 1.4rem; vertical-align: super; color: var(--gold); }
.price-breakdown { text-align: right; }
.price-breakdown p { font-size: 0.78rem; color: var(--muted); line-height: 1.7; }
.price-breakdown .donate-line { color: var(--gold); font-weight: 500; }

/* Size selector (visual preview only — real size selection happens on eBay) */
.size-block { margin-bottom: 24px; }
.qty-label {
  font-size: 0.82rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--muted);
  display: block;
  margin-bottom: 12px;
}
.size-row { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 12px; }
.size-btn {
  flex: 1;
  min-width: 52px;
  text-align: center;
  padding: 12px 8px;
  background: transparent;
  border: 1px solid var(--border);
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  color: var(--cream);
  transition: border-color 0.15s, background 0.15s;
}
.size-btn:hover { border-color: var(--gold); }
.size-btn.active { border-color: var(--gold); background: rgba(255, 191, 0, 0.1); color: var(--gold); }
.size-note { font-size: 0.8rem; color: var(--gold); letter-spacing: 0.1em; }

/* Buy button */
.btn-buy {
  display: block;
  width: 100%;
  background: var(--gold);
  color: var(--bg);
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: 0.95rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding: 18px 24px;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  border: none;
  cursor: pointer;
  transition: background 0.2s, transform 0.1s, box-shadow 0.2s;
  box-shadow: 0 4px 28px rgba(255, 191, 0, 0.2);
  margin-bottom: 16px;
}
.btn-buy:hover { background: #ffd040; transform: translateY(-2px); box-shadow: 0 8px 36px rgba(255, 191, 0, 0.35); }
.btn-buy:active { transform: translateY(0); }
.secure-note { text-align: center; font-size: 0.78rem; color: var(--muted); letter-spacing: 0.1em; }

/* ─── WHY SECTION ─── */
.why { background: var(--bg); }
.why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; text-align: center; }
.why-item { padding: 28px 20px; border: 1px solid var(--border); border-radius: 8px; background: var(--bg-card); }
.why-icon { font-size: 2rem; margin-bottom: 14px; }
.why-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 10px;
}
.why-desc { font-size: 0.88rem; color: #a89878; line-height: 1.65; }

/* ─── FOOTER ─── */
footer { background: var(--bg-card); border-top: 1px solid var(--border); padding: 40px 24px; text-align: center; }
.footer-tagline { font-size: 0.8rem; letter-spacing: 0.25em; text-transform: uppercase; color: var(--muted); margin-bottom: 20px; }
.footer-donate { font-size: 0.85rem; color: #a89878; margin-bottom: 24px; line-height: 1.7; }
.footer-copy { font-size: 0.72rem; letter-spacing: 0.18em; text-transform: uppercase; color: #4a3020; }

/* ─── RESPONSIVE ─── */
@media (max-width: 640px) {
  .nobel-grid { grid-template-columns: 1fr; }
  .why-grid { grid-template-columns: 1fr; }
  .order-card { padding: 28px 20px; }
  .price-row { flex-direction: column; align-items: flex-start; gap: 12px; }
  .price-breakdown { text-align: left; }
  nav { padding: 12px 16px; }
  .taglines { flex-direction: column; }
  .tagline-item { border-right: none; border-bottom: 1px solid var(--border); }
  .tagline-item:last-child { border-bottom: none; }
  .year-bg-placeholder { min-height: 420px; }
  .size-btn { min-width: 44px; padding: 10px 6px; font-size: 0.78rem; }
}
```

## JavaScript 

```js
document.addEventListener('DOMContentLoaded', function () {

  // Size selector — visual only, no cart/checkout logic
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

  // Footer copyright year, kept current automatically
  var yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});
```

## HTML 
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rebel Choc — The World Liberation Day Tee</title>
  <meta name="description" content="Belgium's most daring t-shirt. The Manneken Pis resistance tee — a symbol of defiance. All profits donated to UNICEF & Red Cross.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>

<!-- ══════════════ NAV ══════════════ -->
<nav>
  <!-- IMAGE PLACEHOLDER: site logo / wordmark — suggested filename: logo.png -->
  <div class="img-placeholder nav-logo-placeholder"><span>Logo</span></div>

  <!-- TODO: replace EBAY_LINK_HERE with the real eBay listing URL -->
  <a href="EBAY_LINK_HERE" target="_blank" rel="noopener" class="nav-cta">Order Now</a>
</nav>

<!-- ══════════════ HERO ══════════════ -->
<section class="hero">
  <p class="hero-label">Limited Edition Resistance Wear</p>
  <h1 class="hero-title">The World</h1>
  <div class="hero-liberation">Liberation<br>Day</div>

  <!-- IMAGE PLACEHOLDER: hero t-shirt mockup, front view with Manneken Pis print — suggested filename: hero-shirt.png -->
  <div class="img-placeholder hero-statue-placeholder"><span>Hero T-Shirt Mockup</span></div>

  <div class="taglines">
    <span class="tagline-item">Love Me</span>
    <span class="tagline-item">Hate Me</span>
    <span class="tagline-item">Wear Me</span>
  </div>
</section>

<!-- ══════════════ TRADITION ══════════════ -->
<section class="tradition">
  <div class="tradition-text">
    <p class="tradition-years">1619 — 1938 — 2026</p>
    <h2 class="tradition-title">Tradition</h2>
    <p class="tradition-sub">Lead Us</p>
    <p class="tradition-sub">Back To</p>
    <p class="tradition-sub2">The Future</p>
  </div>
  <div class="tradition-img-wrap">
    <!-- IMAGE PLACEHOLDER: Manneken Pis illustration used as the print design — suggested filename: manneken-pis-print.png -->
    <div class="img-placeholder tradition-img-placeholder"><span>Manneken Pis Design</span></div>
  </div>
</section>

<!-- ══════════════ 1619 ══════════════ -->
<section class="year-section year-section--1619" style="background-color: var(--gold);">
  <!-- IMAGE PLACEHOLDER: 1619 full-bleed background image — suggested filename: 1619-bg.png -->
  <div class="img-placeholder year-bg-placeholder"><span>1619 Background</span></div>
  <div class="year-section-inner">
    <h2 class="year-title">1619</h2>
    <div class="year-body">
      <p class="year-body-highlight">MANNEKEN PIS</p>
      <p>Since 14th century he has been the most renowned art symbol of rebellion, resistance, rejection and satirical humour!!</p>
    </div>
  </div>
</section>

<!-- ══════════════ 1938 ══════════════ -->
<section class="year-section year-section--1938" style="background-color: #7a3a1a;">
  <!-- IMAGE PLACEHOLDER: 1938 full-bleed background image — suggested filename: 1938-bg.png -->
  <div class="img-placeholder year-bg-placeholder"><span>1938 Background</span></div>
  <div class="year-section-inner">
    <h2 class="year-title">1938</h2>
    <div class="year-body">
      <p>The emergence of Nazism and Adolf Hitler, led MANNEKEN PIS to leading RESISTANCE with HUMOUR until total VICTORY</p>
    </div>
  </div>
</section>

<!-- ══════════════ 2026 ══════════════ -->
<section class="year-section year-section--2026" style="background-color: var(--gold);">
  <!-- IMAGE PLACEHOLDER: 2026 full-bleed background image — suggested filename: 2026-bg.png -->
  <div class="img-placeholder year-bg-placeholder"><span>2026 Background</span></div>
  <div class="year-section-inner">
    <h2 class="year-title">2026</h2>
    <div class="year-body">
      <p class="year-body-highlight year-body-nowrap">THE AMERICAN LIBERATION DAY</p>
      <p>THE NO RESPECT OF INTERNATIONAL LAW AND MULTILATERAL WORLD SYSTEM by Donald Trump has triggered the RE-EMERGENCE OF MANNEKEN PIS AS THE SYMBOL OF WORLD RESISTANCE</p>
    </div>
  </div>
</section>

<!-- ══════════════ RESIST · REJECT · REACT ══════════════ -->
<section class="resist-section">
  <h2 class="year-title">2026</h2>
  <p class="resist-heading">JOIN THE REBEL RESISTANCE</p>
  <p class="resist-heading">RESIST, REJECT, REACT</p>
  <p class="resist-text">Against coercion and international unlawful use of military power,</p>
  <p class="resist-emphasis">UNTIL THE WORLD LIBERATION DAY OCCURS</p>
  <p class="resist-quote">With humour we rebel, with humour we resist the lies, we reject the destruction, we react to support international and multilateral organisations that promote peace, solidarity and problem solving through negotiation</p>
</section>

<!-- ══════════════ HOW TO REACT ══════════════ -->
<section class="how-section">
  <div class="how-inner">
    <h2 class="how-title">HOW TO REACT</h2>
    <div class="how-rule"></div>
    <p class="how-subtitle">Let's show our solidarity through:</p>
    <p class="how-item"><strong>SHARE</strong> the rebel humouristic ideals with everyone you know</p>
    <p class="how-item how-item--demonstrate"><strong>DEMONSTRATE</strong> by buying and wearing this t-shirt symbol of resistance. Each purchase generates a €5 donation to international organisations that Daddy D wants to destroy.</p>
    <p class="how-item how-item--generate"><strong>GENERATE</strong> new humouristic ideas this extremism could inspire. Share them with us.</p>
  </div>
</section>

<!-- ══════════════ LET'S REACT ══════════════ -->
<section class="lets-react-section">
  <p class="lr-title">LET'S REACT</p>
  <p class="lr-subtitle">SHARE CREATIVE IDEAS</p>
  <p class="lr-lead">such as</p>
  <p class="lr-question">Which international or/and Nobel Prizes Donald deserves?</p>
  <p class="lr-question">Which advises will you give to Daddy D?</p>
  <p class="lr-final">HUMOUR IS MORE POWERFUL THAN NUCLEAR BOMB</p>
</section>

<!-- ══════════════ NOBEL REBEL PRIZES ══════════════ -->
<section class="nobel">
  <div class="section-inner">
    <p class="section-label">Satirical Awards</p>
    <h2 class="section-title">The Nobel<br>Rebel Prize</h2>
    <div class="rule"></div>
    <p class="nobel-intro">Give Your Noble Rebel Prize<br>to Don Dorleone</p>

    <div class="nobel-grid">
      <div class="nobel-item">Nobel Prize of Chemistry &amp; Medicine</div>
      <div class="nobel-item">Nobel Prize of New Mathematics</div>
      <div class="nobel-item">Nobel Prize of Peace</div>
      <div class="nobel-item">Nobel Prize of Stability</div>
      <div class="nobel-item">Nobel Prize of New Global Cartography</div>
      <div class="nobel-item">King of Truth</div>
      <div class="nobel-item">King of Politeness</div>
      <div class="nobel-item">King of Bankruptcies</div>
      <div class="nobel-item">King of Stupidity</div>
      <div class="nobel-item">King of Cheating</div>
      <div class="nobel-item">King of Legalised Corruption in the Family Game</div>
      <div class="nobel-item">World Hero for Freedom &amp; Democracy</div>
      <div class="nobel-item">World Hero for the Defence of Human Rights</div>
      <div class="nobel-item">World Leader of the Right of Women</div>
      <div class="nobel-item">Main Actor of the J. Epstein Film</div>
      <div class="nobel-item">International Prize for Discrimination</div>
      <div class="nobel-item">International Prize for Incredulity</div>
      <div class="nobel-item">Nobel Prize of Lies</div>
      <div class="nobel-item">Nobel Prize of War</div>
      <div class="nobel-item">Nobel Prize of Destruction</div>
      <div class="nobel-item">Nobel Laureate of Deception</div>
      <div class="nobel-item">Winner of Dancing with the Stars</div>
      <div class="nobel-item">The New American Vito Corleone</div>
      <div class="nobel-item">Candidate for the Nobel Prize of Literature</div>
    </div>

    <blockquote class="solidarity">
      Let's promote solidarity, respect, tolerance, dialogue, peace and security.<br>
      <strong>Who are the Great Americans?</strong> Lincoln, Roosevelt, Eisenhower, Kennedy, Martin Luther King, Harvard University and all American Nobel Prizes — they never begged for their international recognition.
    </blockquote>
  </div>
</section>

<!-- ══════════════ ORDER ══════════════ -->
<section class="order" id="order">
  <div class="section-inner order-header">
    <p class="section-label">Limited Edition</p>
    <h2 class="section-title order-title-center">Order Now</h2>
    <div class="rule order-rule"></div>
  </div>

  <div class="order-card">

    <!-- IMAGE PLACEHOLDER: product photo of the tee, flat lay or on model — suggested filename: product-shirt.png -->
    <div class="img-placeholder order-img-placeholder"><span>Product Photo</span></div>

    <p class="order-name">World Liberation Day Tee</p>
    <p class="order-type">100% Cotton · Screen-Printed in Belgium</p>

    <div class="donate-badge">
      ♥ €5 of each purchase donated to UNICEF &amp; Red Cross
    </div>

    <div class="order-includes">
      <p class="includes-label">Details</p>
      <ul class="includes-list">
        <li>Manneken Pis resistance print</li>
        <li>Heavyweight 100% cotton, unisex fit</li>
        <li>Available in S – XXL</li>
      </ul>
    </div>

    <div class="price-row">
      <div class="price-main"><sup>€</sup><span>25</span></div>
      <div class="price-breakdown">
        <p>€25 per tee</p>
        <p class="donate-line">incl. €5 donation</p>
        <p>Shipping via eBay</p>
      </div>
    </div>

    <div class="size-block">
      <span class="qty-label">Select your size (preview)</span>
      <div class="size-row">
        <button type="button" class="size-btn active" data-size="S">S</button>
        <button type="button" class="size-btn" data-size="M">M</button>
        <button type="button" class="size-btn" data-size="L">L</button>
        <button type="button" class="size-btn" data-size="XL">XL</button>
        <button type="button" class="size-btn" data-size="XXL">XXL</button>
      </div>
      <p class="size-note" id="selected-size">Size: S</p>
    </div>

    <!-- TODO: replace EBAY_LINK_HERE with the real eBay listing URL -->
    <a href="EBAY_LINK_HERE" class="btn-buy" target="_blank" rel="noopener">
      Buy on eBay
    </a>

    <p class="secure-note">Secure checkout via eBay · Ships worldwide</p>
  </div>
</section>

<!-- ══════════════ WHY ══════════════ -->
<section class="why">
  <div class="section-inner">
    <div class="why-grid">
      <div class="why-item">
        <div class="why-icon">👕</div>
        <p class="why-title">Premium Cotton</p>
        <p class="why-desc">Heavyweight, soft-hand cotton tee. Built to last, made to be worn with pride.</p>
      </div>
      <div class="why-item">
        <div class="why-icon">♥</div>
        <p class="why-title">€5 Donated Per Sale</p>
        <p class="why-desc">Every purchase donates €5 to UNICEF &amp; Red Cross — the organisations "Daddy D" wants to eliminate.</p>
      </div>
      <div class="why-item">
        <div class="why-icon">⚡</div>
        <p class="why-title">Limited Edition</p>
        <p class="why-desc">A one-of-a-kind piece. Bold, provocative, unforgettable. Once they're gone, they're gone.</p>
      </div>
    </div>
  </div>
</section>

<!-- ══════════════ FOOTER ══════════════ -->
<footer>
  <!-- IMAGE PLACEHOLDER: footer logo / wordmark, can reuse nav logo — suggested filename: logo-footer.png -->
  <div class="img-placeholder footer-logo-placeholder"><span>Logo</span></div>
  <p class="footer-tagline">Love Me · Hate Me · Wear Me</p>
  <p class="footer-donate">All profits go to UNICEF, UN Refugee Agency &amp; Red Cross.<br>Because some things are worth fighting for — even on a t-shirt.</p>
  <p class="footer-copy">© <span id="current-year">2026</span> Rebel Choc · www.rebelchoc.com · Brussels, Belgium</p>
</footer>

<script src="script.js"></script>
</body>
</html>
```