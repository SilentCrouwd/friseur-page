# Design – MeinFriseur

## Stil
Neu und weich: cremiger Hintergrund, mattes Lila als Hauptakzent, zartes Rosa als Ergänzung. Viel Weißraum, klare Struktur.

## Farben (Tailwind-`@theme`-Variablen)
| Rolle | Wert | Verwendung |
|---|---|---|
| Hintergrund | Creme `#faf5ec` | Seitenhintergrund |
| Fläche | `#ffffff` | Karten, Formular |
| Text | Anthrazit `#1f2933` | Fließtext, Überschriften |
| Akzent primär | Mattes Lila `#6b4f7a` | Buttons, Links, Icons |
| Akzent primär dunkel | `#563f63` | Hover/Fokus |
| Akzent sekundär | Zartes Rosa `#f3c9d5` | Flächen, Hervorhebungen, Platzhalter |
| Rosa hell | `#fbe6ec` | Abschnittshintergründe |

Regeln:
- Text nie auf Zartrosa in hellem Grau, nur Anthrazit oder Lila-dunkel verwenden.
- Button-Text weiß auf Lila (Kontrast mindestens WCAG AA, wird beim Bauen geprüft).
- Zartrosa nur für Flächen, nicht für Text.

## Typografie
- Systemschriften, keine Webfonts (schnellste Ladezeit).
- Überschriften: `ui-serif, Georgia, serif` für einen eleganten Kontrast.
- Fließtext: `system-ui, sans-serif`.
- Fließtext mindestens 16 px, Zeilenhöhe ca. 1.6.

## Formen
- Leicht gerundete Ecken (Tailwind `rounded-lg`) bei Buttons, Karten und Platzhaltern.
- Box-Shadows gezielt und großzügig einsetzen, wo es Sinn macht: Karten, Buttons, Formular, Platzhalter-Bilder, Navigationsleiste.
- Weiche, geschichtete Schatten in getöntem Lila statt reinem Schwarz, z. B. `0 10px 30px -10px rgb(107 79 122 / 0.35)`.
- Hover: Schatten wächst leicht, Element hebt sich um 2 px (nur `transform` und `box-shadow`, `transition` kurz).
- Schatten als eigene `@theme`-Variablen (`--shadow-soft`, `--shadow-lift`) definieren.
- Performance: keine riesigen Blur-Radien auf vielen Elementen, `prefers-reduced-motion` beachten.
- Keine harten Rahmen.

## Buttons
- Primär: Lila Fläche, weißer Text, Hover dunkleres Lila. Verwendung für „Jetzt anrufen".
- Sekundär: Rosa Fläche, Anthrazit-Text.
- Sichtbarer Fokusring in Lila.

## Platzhalter
- Bild-Platzhalter: Zartrosa Fläche mit feinem Lila-Icon, feste `aspect-ratio`.
- Logo-Platzhalter: Lila Kasten mit Initiale „M", daneben „MeinFriseur".
