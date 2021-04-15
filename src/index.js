const primivitve = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
};

const compositeValues = {
    2: 'twen',
    3: 'thir',
    4: 'for',
    5: 'fif',
    6: 'six',
    7: 'seven',
    8: 'eigh',
    9: 'nine',
};

const getNumberUpToHundred = (number) => {
    if (number >= 0 && number < 20) {
        return primivitve[number];
    }
    if (number % 10 === 0 && number < 100) {
        const simpleNumber = number / 10;
        return `${compositeValues[simpleNumber]}ty`
    }
    if (number % 10 !== 0 && number < 100) {
        const simpleNumber = Math.floor(number / 10);
        const secondNumber = number - simpleNumber * 10;
        return `${compositeValues[simpleNumber]}ty ${primivitve[secondNumber]}`
    }
}

module.exports = function toReadable (number) {
    if (number >= 0 && number < 100) {
        return getNumberUpToHundred(number);
    }
    if (number % 100 === 0) {
        const simpleNumber = number / 100;
        return `${primivitve[simpleNumber]} hundred`
    }

    if (number % 100 !== 0 && number > 100) {
        const simpleNumber = Math.floor(number / 100);
        const secondNumber = getNumberUpToHundred(number - simpleNumber * 100);
        return `${primivitve[simpleNumber]} hundred ${secondNumber}`;
    }
}
