function colorfulNumbers(count){
    let result = '<ul>\n';
    for (var i = 1; i <= count; i++) {
        let color = (i % 2 === 0) ? 'blue' : 'green';
        result+= `  <li><span style='color:${color}'>${i}</span></li>\n`;
    }
    console.log(result += '</ul>')
}