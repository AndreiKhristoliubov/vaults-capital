/* =========================================================
   Vaults Capital — minimal JavaScript
   Mobile nav toggle and research listing filter
   ========================================================= */

(function () {
  'use strict';

  // ---------- Mobile nav toggle ----------
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('is-open');
    });
  }

  // ---------- Research filter chips ----------
  var filterRow = document.getElementById('filterRow');
  var researchList = document.getElementById('researchList');
  if (filterRow && researchList) {
    var chips = filterRow.querySelectorAll('.filter-chip');
    var cards = researchList.querySelectorAll('.article-card');

    function applyFilter(filter) {
      cards.forEach(function (card) {
        var tag = card.getAttribute('data-tag');
        if (filter === 'all' || tag === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    }

    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        chips.forEach(function (c) { c.classList.remove('is-active'); });
        chip.classList.add('is-active');
        applyFilter(chip.getAttribute('data-filter'));
      });
    });

    // ---------- Honour ?filter= query param ----------
    var params = new URLSearchParams(window.location.search);
    var initial = params.get('filter');
    if (initial) {
      var match = filterRow.querySelector('.filter-chip[data-filter="' + initial + '"]');
      if (match) match.click();
    }
  }
})();
