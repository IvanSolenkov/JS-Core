function solve(input){
    let delimiter = +input.pop();
    for (let i = 0; i < input.length; i+=delimiter) {
        console.log(input[i]);
    }
}