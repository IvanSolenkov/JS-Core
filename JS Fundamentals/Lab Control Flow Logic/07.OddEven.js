function oddOrEven(number) {
    if(number%2 === 0){
        console.log('even');
    }else if(!Number.isInteger(number)){
        console.log('invalid')
    }
    else{
        console.log('odd');
    }
}