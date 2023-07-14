/**
 * Convertie le texte en emoji
 * @param {*} code Code du pays
 * @returns Emoji
 */
function isoToEmoji(code) {
  return code
    .split("")
    .map((letter) => (letter.charCodeAt(0) % 32) + 0x1f1e5)
    .map((n) => String.fromCodePoint(n))
    .join("");
}

/**
 * Affiche le drapeau
 * @param {*} code Code du pays
 * @param {*} emplacement id de l'élément pour afficher le résultat
 */
function displayFlag(code, emplacement) {
  document.getElementById(emplacement).textContent = isoToEmoji(code);
}
