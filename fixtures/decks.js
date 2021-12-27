import {
  upperCaseLetters,
  lowerCaseLetters,
  upperAndLowerCaseLetters,
  upperCaseLettersToFocus,
  lowerCaseLettersToFocus,
  upperAndLowerCaseLettersToFocus
} from "./letters";
import { unCamelCase } from "../helpers/helpers";

export const decks = {
  [unCamelCase('upperCaseLetters')]: upperCaseLetters,
  [unCamelCase('lowerCaseLetters')]: lowerCaseLetters,
  [unCamelCase('upperAndLowerCaseLetters')]: upperAndLowerCaseLetters,
  [unCamelCase('lowerCaseLettersToFocus')]: lowerCaseLettersToFocus,
  [unCamelCase('upperCaseLettersToFocus')]: upperCaseLettersToFocus,
  [unCamelCase('upperAndLowerCaseLettersToFocus')]: upperAndLowerCaseLettersToFocus,
};

