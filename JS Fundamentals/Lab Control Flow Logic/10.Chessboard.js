function chessboard(size){
    let result = '<div class="chessboard">\n';

    for (let i = 0; i < size; i++) {
        result += '  <div>\n';
        let color = (i % 2 === 0 ) ? "black" : 'white';
        for (let j = 0; j < size; j++) {
            result += `    <span class="${color}"></span>\n`;
            color = (color === 'white') ? 'black' : "white";
        }
        result += '  </div>\n'
    }
    console.log(result + '</div>\n');
}