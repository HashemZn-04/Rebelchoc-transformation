/* ============================================================
   REBEL CHOC — WORLD LIBERATION DAY TEE
   Script

   Note: this page has no backend. All actual ordering, sizing and
   payment happens on eBay via the "Buy on eBay" link/button. The
   size selector below is a visual preview only (it does not need
   to submit anywhere) — it just highlights the size and updates a
   small label so shoppers can see it reflected before clicking
   through to eBay.
   ============================================================ */

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
