class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    hex() {
        const { r, g, b } = this;
        return (
            `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
        );
    }
    rgb() {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    }
    destructureHsl(){
        const {h, s, l} = this;
        return `hsl(${h}, ${s}%, ${l}%)`;
    }
    hsl() {
    // Make r, g, and b fractions of 1
        let {r, g, b} = this;
        r /= 255;
        g /= 255;
        b /= 255;

        // Find greatest and smallest channel values
        let cmin = Math.min(r, g, b),
            cmax = Math.max(r, g, b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;

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
        l = (cmax + cmin) / 2;

        // Calculate saturation
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

        // Multiply l and s by 100
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);

        this.h = h;
        this.s = s;
        this.l = l;
        // return "hsl(" + h + "," + s + "%," + l + "%)";
    }
    opposite(){
        const {h, s, l} = this;
        const newHue = (h + 180) % 360;
        return `hsl(${newHue}, ${s}%, ${l}%)`;
    }

}

const tomato = new Color(23, 32, 22, 'tomato');
console.log(tomato.hex());
const pinko = new Color(32, 41, 54, 'pinko');
console.log(pinko.hex());
console.log(tomato.hex === pinko.hex);
console.log(pinko.hsl());