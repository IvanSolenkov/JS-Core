function triangleArea(a,b,c) {
    let halfSumOfSights = (a + b + c) /2;
    console.log(Math.sqrt(halfSumOfSights * (halfSumOfSights - a)*
        (halfSumOfSights - b) * (halfSumOfSights - c)));
}