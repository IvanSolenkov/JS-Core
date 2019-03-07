function solve(arr) {
    let rotations = +arr.pop();
    rotations %= arr.length;

    for (let i = 0; i < rotations; i++) {
        arr.unshift(arr.pop());
    }
    console.log(arr.join(' '));
}