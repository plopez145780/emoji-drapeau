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
 */
function displayFlag(code) {
  const elem = document.getElementById("flag");
  elem.textContent = isoToEmoji(code);
}
