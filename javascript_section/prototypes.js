// String.prototype.yell = function(){
//     console.log(this.toUpperCase()+'!');
// }

// 'hello'.yell();
// function makeColor(r, g, b){
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function(){
//         const{r, g, b} = this;
//         return `rgb(${r}, ${g}, ${b})`;
//     }
//     color.hex = function(){
//         const{r, g, b} = this;
//         return '#' + ((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1);
//     }
//     return color;
// }

// const firstColor = makeColor(34, 234, 3);
// console.log(firstColor.rgb());
// console.log(firstColor.hex());
//--------------------------------------------------
function Color(r, g, b){     //caps at beginning of func name is stylistic of construct to be used with new keyword
    this.r = r;
    this.g = g;
    this.b = b;
}

const newColor = new Color(1, 1, 1);

Color.prototype.hex = function(){
    const {r, g, b} = this;
    return '#' + ((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1);
}

console.log(newColor.hex())