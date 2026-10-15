# Medienhafen – bilden & begleiten

Website für **Medienhafen**, Medienbildung für Familien, Kitas und Schulen (mein-medienhafen.de).

Eine statische Website ohne Build-Schritt: reines HTML, CSS und ein kleines JavaScript.

## Ansehen

- **Einfach:** `index.html` im Browser öffnen.
- **Lokaler Server:** Im Projektordner `python3 -m http.server 8000` ausführen und http://localhost:8000 öffnen.

## Aufbau

| Pfad | Inhalt |
|---|---|
| `index.html` | Startseite mit den Bereichen Eltern, Kitas & Krippen, Schulen, Kinderworkshops, Über mich, Kontakt |
| `impressum.html` | Impressum (Platzhalter) |
| `datenschutz.html` | Datenschutzerklärung (Platzhalter) |
| `css/style.css` | Schriften und Grundeinstellungen |
| `fonts/` | Bricolage Grotesque und Nunito Sans, lokal eingebunden (kein Abruf bei Google) |
| `bilder/` | Bilder (KI-generiert, als Stimmungsbilder) |
| `js/kontakt.js` | Kontaktformular: öffnet das E-Mail-Programm mit der fertigen Nachricht |

## Datenschutz

Die Seite lädt keine Inhalte von fremden Servern, setzt keine Cookies und nutzt kein Tracking. Ein Cookie-Banner ist dadurch nicht nötig.

## Noch offen vor dem Livegang

- [ ] Platzhalter in `[eckigen Klammern]` ersetzen (Nachname, Region, Telefon, Werdegang)
- [ ] Foto von Franziska im Bereich „Über mich“ einsetzen
- [ ] Impressum und Datenschutzerklärung vollständig erstellen
- [ ] Kontaktformular an einen Formular-Dienst des Hosters anbinden
- [ ] Hosting wählen und Domain mein-medienhafen.de verbinden

## Lizenzen

Die Schriften Bricolage Grotesque und Nunito Sans stehen unter der SIL Open Font License 1.1.
