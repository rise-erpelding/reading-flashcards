// function to add the number of the index to the element in the number array
// this is needed because when we add spaces the index of the next space will increase by 1
const addIndex = (numArr) => {
  numArr.forEach((num, index) => {
    numArr[index] = num + index;
  });
  return numArr;
}

export const unCamelCase = (str) => {
  const strArr = str.split(''); // string => array
  const upperCaseIndexes = [];
  strArr.forEach((letter, index) => {
    if (letter.toUpperCase() === letter) { // check if letter is uppercase
      upperCaseIndexes.push(index); // keep track of indexes of uppercase letters
    }
  });
  addIndex(upperCaseIndexes); // increment index of each successive index bc of added spaces
  strArr[0] = strArr[0].toUpperCase(); // capitalize first letter
  upperCaseIndexes.forEach((index) => {
    strArr.splice(index, 0, ' ') // add spaces where we need to
  });
  return strArr.join('');
}
