const isBetween = function(min, max){
    function formalized(guess){
        let message = '';
        if(guess < min){
            message = "your guess is out of bounds: too low.";
        }
        else if(guess > max){
            message = "your guess is out of bounds: too high.";
        }
        else{
            message = "your guess is in bounds.";
        }
        console.log(message);
    }
    return formalized;
}
