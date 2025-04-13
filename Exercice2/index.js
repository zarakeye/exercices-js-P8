// Créez votre fonction ici
function calculate(num1, num2, operator) {
    if (typeof num1 !== 'number' && typeof(parseInt(num1)) !== 'number' || typeof num2 !== 'number' && typeof(parseInt(num2)) !== 'number' || typeof operator !== 'string') {
        return 'Invalid operator';
        
    }

    switch (operator) {
        case '+':
            if (typeof num1 === 'number' && typeof num2 === 'number') {
                return num1 + num2;
            } else if (typeof num1 !== 'number' && typeof parseInt(num1) === 'number') {
                if (typeof num2 === 'number') {
                    return parseInt(num1) + num2;
                } else if (typeof num2 !== 'number' && typeof parseInt(num2) === 'number') {
                    return parseInt(num1) + parseInt(num2);
                }
            }
        case '-':
            if (typeof num1 === 'number' && typeof num2 === 'number') {
                return num1 - num2;
            } else if (typeof num1 !== 'number' && typeof parseInt(num1) === 'number') {
                if (typeof num2 === 'number') {
                    return parseInt(num1) - num2;
                } else if (typeof num2 !== 'number' && typeof parseInt(num2) === 'number') {
                    return parseInt(num1) - parseInt(num2);
                }
            }
        case '*':
            if (typeof num1 === 'number' && typeof num2 === 'number') {
                return num1 * num2;
            } else if (typeof num1 !== 'number' && typeof parseInt(num1) === 'number') {
                if (typeof num2 === 'number') {
                    return parseInt(num1) * num2;
                } else if (typeof num2 !== 'number' && typeof parseInt(num2) === 'number') {
                    return parseInt(num1) * parseInt(num2);
                }
            }
        case '/':
            if ((typeof num2 === 'number' || typeof parseInt(num2) === 'number') && num2 === 0) {
                return 'Division by zero is not allowed';
            }

            if (typeof num1 === 'number' && typeof num2 === 'number') {
                return num1 / num2;
            } else if (typeof num1 !== 'number' && typeof parseInt(num1) === 'number') {
                if (typeof num2 === 'number') {
                    return parseInt(num1) / num2;
                } else if (typeof num2 !== 'number' && typeof parseInt(num2) === 'number') {
                    return parseInt(num1) / parseInt(num2);
                }
            }
        case '%':
            if (typeof num1 === 'number' && typeof num2 === 'number') {
                if (num1 < num2) {
                    return 'Invalid operator';
                } else {
                    return num1 % num2;
                }
            } else if (typeof num1 !== 'number' && typeof parseInt(num1) === 'number') {
                if (typeof num2 === 'number') {
                    return parseInt(num1) % num2;
                } else if (typeof num2 !== 'number' && typeof parseInt(num2) === 'number') {
                    return parseInt(num1) % parseInt(num2);
                }
            }
        default:
            return 'Invalid operator';
    }
}
// Exemples d'utilisation de la fonction
console.log(calculate(5, 3, '+'));   // Affiche 8
console.log(calculate(10, 4, '-'));  // Affiche 6
console.log(calculate(7, 2, '*'));   // Affiche 14
console.log(calculate(12, 3, '/'));  // Affiche 4
console.log(calculate(8, 0, '/'));   // Affiche "Division by zero is not allowed"
console.log(calculate(4, 5, '%'));   // Affiche "Invalid operator"

export default calculate
