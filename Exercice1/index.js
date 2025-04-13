//votre code ici
function pairNumbers(start, end) {
    let arrayOfPair = [];
    let smaller, bigger;

    if (typeof start === 'number' && typeof end === 'number') {
        if (start > end || start === end) {
            return '';
        } else {
            smaller = Math.floor(start);
            bigger = Math.floor(end);
        }
    } else if (typeof start === 'string' && typeof parseInt(start) === 'number') {
        if (typeof end === 'number') {
            if (parseInt(start) > end) {
                return '';
            } else {
                smaller = Math.floor(parseInt(start));
                bigger = Math.floor(end);
            }
        } else if (typeof end === 'string' && typeof parseInt(end) === 'number') {
            if (parseInt(start) > parseInt(end)) {
                return '';
            } else {
                smaller = Math.floor(parseInt(start));
                bigger = Math.floor(parseInt(end));
            }
        }
    }
    
    for (let i = smaller; i <= bigger; i++) {
        if (i % 2 === 0) {
            arrayOfPair.push(i);
        }
    }

    return arrayOfPair.toString();
}

export default pairNumbers
