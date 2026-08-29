/* Booking enquiry form → WhatsApp.
   Progressive enhancement: the form's own action is a mailto: fallback, so
   with JavaScript off it still submits. We only take over once we are running. */
(function () {
  'use strict';

  var WHATSAPP_NUMBER = '26774537995';

  // Order the message the way Chef Kams reads it, not the way the DOM happens
  // to be ordered. Each entry is [field name, label].
  var FIELDS = [
    ['eventtype', 'Event type'],
    ['date',      'Date'],
    ['guests',    'Guests'],
    ['location',  'Location'],
    ['power',     'Power & water on site'],
    ['dietary',   'Dietary requirements']
  ];

  function compose(form) {
    var get = function (n) {
      var el = form.elements[n];
      return el && el.value ? String(el.value).trim() : '';
    };

    var name = get('name');
    var lines = ['Hi Chef Kams,', ''];
    lines.push(name ? "I'd like to enquire about catering. My name is " + name + '.'
                    : "I'd like to enquire about catering.");
    lines.push('');

    FIELDS.forEach(function (f) {
      var value = get(f[0]);
      if (value) lines.push(f[1] + ': ' + value);
    });

    lines.push('', 'Thank you.');
    return lines.join('\n');
  }

  var forms = document.querySelectorAll('[data-booking-form]');
  if (!forms.length) return;

  Array.prototype.forEach.call(forms, function (form) {
    // Swap the no-JS hint for the WhatsApp-aware one now that we can deliver.
    var hint = form.querySelector('[data-booking-hint]');
    if (hint && hint.getAttribute('data-booking-hint')) {
      hint.textContent = hint.getAttribute('data-booking-hint');
    }

    form.addEventListener('submit', function (event) {
      // Show invalid styling only once a submit has actually been attempted.
      form.classList.add('was-validated');

      // Let native validation reject an incomplete form first.
      if (form.checkValidity && !form.checkValidity()) return;

      event.preventDefault();
      var url = 'https://wa.me/' + WHATSAPP_NUMBER +
                '?text=' + encodeURIComponent(compose(form));
      window.open(url, '_blank', 'noopener');
    });
  });
})();
