(function () {
  'use strict';

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- mobile nav ---------- */
  var toggle = document.getElementById('nav-toggle');
  var panel  = document.getElementById('mobile-nav');
  var navOpen = false;
  var bars   = toggle ? toggle.querySelectorAll('[data-bar]') : [];

  function setNav(state) {
    if (!toggle || !panel) return;
    navOpen = state;
    toggle.setAttribute('aria-expanded', String(state));
    toggle.setAttribute('aria-label', state ? 'Close menu' : 'Open menu');
    document.body.classList.toggle('nav-open', state);
    if (state) {
      panel.hidden = false;
      requestAnimationFrame(function () { panel.classList.remove('opacity-0'); });
      bars[0].style.transform = 'translateY(8px) rotate(45deg)';
      bars[1].style.opacity   = '0';
      bars[2].style.transform = 'translateY(-8px) rotate(-45deg)';
    } else {
      panel.classList.add('opacity-0');
      bars[0].style.transform = '';
      bars[1].style.opacity   = '';
      bars[2].style.transform = '';
      window.setTimeout(function () { if (!navOpen) panel.hidden = true; }, 300);
    }
  }
  if (toggle && panel) {
    toggle.addEventListener('click', function () { setNav(!navOpen); });
    panel.querySelectorAll('[data-nav-link]').forEach(function (a) {
      a.addEventListener('click', function () { setNav(false); });
    });
  }
  window.addEventListener('resize', function () {
    if (navOpen && window.innerWidth >= 768) setNav(false);
  });

  /* ---------- lightbox ---------- */
  var lb    = document.getElementById('lightbox');
  var lbImg = document.getElementById('lightbox-img');
  var lbCap = document.getElementById('lightbox-cap');
  var lbX   = document.getElementById('lightbox-close');
  var lastFocused = null;

  function openLb(src, cap, alt) {
    lastFocused = document.activeElement;
    lbImg.src = src;
    lbImg.alt = alt || cap || '';
    lbCap.textContent = cap || '';
    lb.hidden = false;
    document.body.classList.add('nav-open');
    requestAnimationFrame(function () { lb.classList.remove('opacity-0'); });
    lbX.focus();
  }
  function closeLb() {
    lb.classList.add('opacity-0');
    document.body.classList.remove('nav-open');
    window.setTimeout(function () { lb.hidden = true; lbImg.removeAttribute('src'); }, 200);
    if (lastFocused) lastFocused.focus();
  }
  if (lb && lbImg && lbCap && lbX) {
    document.querySelectorAll('[data-gallery-grid] button[data-full]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var img = btn.querySelector('img');
        openLb(btn.dataset.full, btn.dataset.caption, img ? img.alt : '');
      });
    });
    lbX.addEventListener('click', closeLb);
    lb.addEventListener('click', function (e) { if (e.target === lb || e.target.tagName === 'FIGURE') closeLb(); });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (lb && !lb.hidden) closeLb();
    else if (navOpen) setNav(false);
  });

  /* ---------- staggered reveal on scroll ----------
     Content is visible by default (.js gating in CSS): if this never runs,
     nothing is hidden. Each element reveals once and is then unobserved, so
     scrolling back up never re-fires it. */
  var STAGGER_MS = 170;   // offset between siblings
  var STAGGER_MAX = 5;    // cap so a long wave never stalls
  var WAVE_MS = 400;      // siblings arriving within this window share a wave

  var revealItems = document.querySelectorAll('.reveal');
  var motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  function revealAll() {
    revealItems.forEach(function (el) { el.style.transitionDelay = ''; el.classList.add('in'); });
  }

  if (!('IntersectionObserver' in window) || motionQuery.matches) {
    revealAll();
  } else {
    var waves = new WeakMap();
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        var group = el.closest('[data-reveal-group]') || document.documentElement;
        var now = (window.performance && performance.now) ? performance.now() : Date.now();
        var wave = waves.get(group);
        if (!wave || now - wave.last > WAVE_MS) wave = { n: 0, last: now };
        el.style.transitionDelay = (Math.min(wave.n, STAGGER_MAX) * STAGGER_MS) + 'ms';
        wave.n += 1; wave.last = now;
        waves.set(group, wave);
        el.classList.add('in');

        // Clear the delay once it has played so it cannot affect later
        // transitions (hover lifts, the lightbox). transitionend does not fire
        // if the transition never actually runs, so time it out as well.
        var clearDelay = function () {
          el.style.transitionDelay = '';
          el.removeEventListener('transitionend', clearDelay);
          window.clearTimeout(el._revealTimer);
        };
        el.addEventListener('transitionend', clearDelay);
        el._revealTimer = window.setTimeout(clearDelay, (Math.min(wave.n, STAGGER_MAX) * STAGGER_MS) + 1200);

        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    revealItems.forEach(function (el) { io.observe(el); });

    var onMotionChange = function (e) { if (e.matches) { io.disconnect(); revealAll(); } };
    if (motionQuery.addEventListener) motionQuery.addEventListener('change', onMotionChange);
    else if (motionQuery.addListener) motionQuery.addListener(onMotionChange);
  }
})();
