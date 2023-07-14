/**
 *
 * Source : https://www.youtube.com/watch?v=kiWnG4WowDk
 * @param {*} code
 * @returns
 */
function isoToEmoji(code) {
  return code
    .split("")
    .map((letter) => (letter.charCodeAt(0) % 32) + 0x1f1e5)
    .map((n) => String.fromCodePoint(n))
    .join("");
}

/**
 *
 * @param {*} code
 */
function displayFlag(code) {
  const elem = document.getElementById("drapeau");
  elem.textContent = isoToEmoji(code);
}
