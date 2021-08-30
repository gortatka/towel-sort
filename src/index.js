// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix == null || matrix.length == 0) {
        return [];
    }
    let array = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            array = array.concat(matrix[i]);
        } else {
            array = array.concat(matrix[i].reverse());
        }
    }
    return array;
}