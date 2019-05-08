let hue = 130;
let sat = 60;
let light = 55;

const hslToHex = (h, s, l) => {
    h /= 360;
    s /= 100;
    l /= 100;
    let r, g, b;
    if (s === 0) {
        r = g = b = l; // achromatic
    } else {
        const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    const toHex = x => {
        const hex = Math.round(x * 255).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

const colorChange = () => {
    const swatch = document.querySelector('.swatch');
    swatch.style.backgroundColor = getHSL();
    swatch.value = getHEX();
    console.log(`${getHSL()} hex: ${getHEX()}`);
    document.getElementById('sat').style.backgroundColor = getHSL();
	
	const chao = document.querySelector('.ground');
	 chao.style.backgroundColor = getHSL();
};

const getHEX = () => {
    return hslToHex(hue, sat, light);
};
const getHSL = () => {
    return `hsl(${hue}, ${sat}%, ${light}%)`;
};

const main = () => {
    const hueInput = document.querySelector('input[name=hue]');
    hueInput.addEventListener('input', () => {
        hue = hueInput.value;
        colorChange();
    });

    const satInput = document.querySelector('input[name=sat]');
    satInput.addEventListener('input', () => {
        sat = satInput.value;
        colorChange();
    });

    const lightInput = document.querySelector('input[name=light]');
    lightInput.addEventListener('input', () => {
        light = lightInput.value;
        colorChange();
    });

    colorChange();
};

document.addEventListener('DOMContentLoaded', main);