module.exports = function towelSort (matrix) {
  let matrixTowelSorted = [];
  if (typeof matrix === 'undefined') {
    console.log(matrixTowelSorted);
    return matrixTowelSorted;
  }
  else if (matrix.length === 0) {
    console.log(matrixTowelSorted);
    return matrixTowelSorted;
  } 
  else if (matrix.length != 0) {
    for (i = 0; i < matrix.length; i++) {
      if (i % 2 != 0) {
        matrix[i].reverse();
      }
    }
    matrixTowelSorted = matrix.flat();
    console.log(matrixTowelSorted);
    return matrixTowelSorted;
  }
}
