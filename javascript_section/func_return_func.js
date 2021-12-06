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


//Methods exercise
const square = {
    area(side){
        return side*side;
    },
    perimeter(side){
        return side*4;
    }
}

const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg(){
        this.eggCount ++;
        return 'EGG';
    }
}