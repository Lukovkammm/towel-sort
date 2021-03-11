// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix == undefined) {
        return [];
    };
    if (matrix.length === 0) {
        return [];
    };

    matrix.forEach((item, index) => {
        if (index % 2 != 0) {
            item.reverse();
        }
    })
    // str += matrix[i].join('')
    let str = matrix.toString();
    return str.split(',').map(item => +item);
}

