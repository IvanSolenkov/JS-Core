function cone(radius,height) {
    let slant = Math.sqrt(radius * radius + height * height);
    let volume = Math.PI * radius * radius * height / 3;
    console.log("volume = " + volume);
    let area = Math.PI * radius * (radius + slant);
    console.log("area = " + area)
}