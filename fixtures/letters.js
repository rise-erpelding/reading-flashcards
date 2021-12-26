const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lettersToFocusOn = "ABCDEIJMORSTUX";
export const upperCaseLetters = letters.toUpperCase().split('');
export const lowerCaseLetters = letters.toLowerCase().split('');
export const upperAndLowerCaseLetters = upperCaseLetters.concat(lowerCaseLetters);
export const upperCaseLettersToFocus = lettersToFocusOn.toUpperCase().split('');
export const lowerCaseLettersToFocus = lettersToFocusOn.toLowerCase().split('');
export const upperAndLowerCaseLettersToFocus = upperCaseLettersToFocus.concat(lowerCaseLettersToFocus);

