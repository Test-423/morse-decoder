const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let length = expr.length, str = "";
    console.log(expr.length);
    if (length < 10) return 0;
    let bar = expr.match(/.{9,10}/g);
    let bar_l = bar.length;
    let bar_var = [];
    for (let i = 0; i < bar_l; i++) {
        bar_var[i] = "";
    }
    console.log(bar_l);
    for (let i = 0; i < bar_l; i++) {
        if (bar[i] === "**********") str = str + " ";
        else {
            bar[i] = reverseString(bar[i]);
            let split = bar[i].match(/.{1,2}/g);
            for (let j = 0; j < 5; j++) {
                if (split[j] === '01') bar_var[i] = bar_var[i] + '.';
                if (split[j] === '11') bar_var[i] = bar_var[i] + '-';
            }
        }
        bar_var[i] = reverseString(bar_var[i]);
        for (let key in MORSE_TABLE) {
            if (bar_var[i] === key) str = str + MORSE_TABLE[key];
        }
    }
    return str;
}
function reverseString(str) {
    return str.split("").reverse().join("");
}
module.exports = {
    decode
}