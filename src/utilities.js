export { handleName, randomIndices };

function handleName(string) {
  const splitString = string.replace(/[A-Z]/, ' $&').split('');
  splitString[0] = splitString[0].toUpperCase();

  return splitString.join('');
}

function randomIndices() {
  const numSet = new Set();
  while (numSet.size < 12) {
    numSet.add(Math.round(Math.random() * 11));
  }

  return Array.from(numSet);
}
