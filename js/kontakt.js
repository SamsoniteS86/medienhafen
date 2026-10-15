// Kontaktformular ohne Server: öffnet das E-Mail-Programm des Besuchers mit der fertigen Nachricht.
// Für den Live-Betrieb später durch einen Formular-Dienst des Hosters ersetzen.
(function () {
  var form = document.getElementById('kontaktformular');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.getElementById('f-name').value.trim();
    var mail = document.getElementById('f-mail').value.trim();
    var wer = document.getElementById('f-wer').value;
    var msg = document.getElementById('f-msg').value.trim();
    var betreff = 'Anfrage über die Website (' + wer + ')';
    var text = msg + '\n\n' + name + (mail ? '\n' + mail : '');
    window.location.href = 'mailto:hallo@mein-medienhafen.de?subject=' +
      encodeURIComponent(betreff) + '&body=' + encodeURIComponent(text);
  });
})();
