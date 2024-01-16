function totalVolume(...args) {
    let total = 0;
    for (let arg of args) {
        total += arg[0] * arg[1] * arg[2];
    }
    return total;
}
console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1])); 
console.log(totalVolume([2, 2, 2], [2, 1, 1])); 
console.log(totalVolume([1, 1, 1])); 