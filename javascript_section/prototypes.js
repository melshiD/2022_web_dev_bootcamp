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
// function Color(r, g, b){     //caps at beginning of func name is stylistic of construct to be used with new keyword
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }

// const newColor = new Color(1, 1, 1);

// Color.prototype.hex = function(){
//     const {r, g, b} = this;//destructuring object for more brief usage below
//     return '#' + ((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1);
// }

// Color.prototype.getFuncHex = function(){
//     return this.prototype.hex;
// }

// Color.prototype.rgba = function(a = 1.0){
//     const {r, g, b} = this;
//     return `rgba(${r}, ${g}, ${b}, ${a})`;
// }
// console.log(newColor.hex());

// Color.prototype.changeHex = function(){
//     const originalHex = this.hex();
//     return originalHex+"it worked!";
// }

// console.log(newColor.changeHex());
// console.log(newColor.rgba(0.5));

//--------------------------------------------------
//New Class syntax 
class Color{
    constructor(r, g, b, name){
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    classify(){
        const {name} = this;
        console.log(`You have given me ${name} for a name`);
    }
    innerRgb(){
        const {r, g, b} = this;
        return `${r}, ${g}, ${b}`;
    }
    rgb(){
        const innerRgb = this.innerRgb();
        return `rgb(${innerRgb})`;
    }
    rgba(a = 1.0){

        return `rgba(${this.innerRgb()}, ${a})`;
    }
    hex(){
        const {r, g, b} = this;
        return '#' + ((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1);
    }
    rgbToHsl() {
        let {r, g, b} = this;
        // Make r, g, and b fractions of 1
        r /= 255;
        g /= 255;
        b /= 255;
      
        // Find greatest and smallest channel values
        let cmin = Math.min(r,g,b),
            cmax = Math.max(r,g,b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;
      
        // Calculate hue
        // No difference
        if (delta == 0)
          h = 0;
        // Red is max
        else if (cmax == r)
          h = ((g - b) / delta) % 6;
        // Green is max
        else if (cmax == g)
          h = (b - r) / delta + 2;
        // Blue is max
        else
          h = (r - g) / delta + 4;
      
        h = Math.round(h * 60);
          
        // Make negative hues positive behind 360°
        if (h < 0)
            h += 360;
      
        // Calculate lightness
        l = (cmax + cmin) / 2;
      
        // Calculate saturation
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
          
        // Multiply l and s by 100
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);

        this.h = h;
        this.s = s;
        this.l = l;
      
        return "hsl(" + h + "," + s + "%," + l + "%)";
      }
      shift(deg = 180){
          const{h, s, l} = this;
          const newHue = (deg + h)%360;
          return "hsl(" + newHue + "," + s + "%," + l + "%)";
      }

}

const c1 = new Color(23, 33, 233, 'pink');
c1.classify();
console.log(c1.rgb());

const IAMAmazing = new Color(23, 32, 144, 'For real, we are so awesome');
IAMAmazing.classify();
console.log(IAMAmazing.hex());
console.log(IAMAmazing.rgba(0.3));
// console.log(IAMAmazing.rgbToHsl());
console.log(IAMAmazing.h);
IAMAmazing.rgbToHsl();
console.log(IAMAmazing.h);