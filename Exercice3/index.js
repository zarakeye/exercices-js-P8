// Créez votre fonction ici
function calculateAverage(numbers) { 
    let sum = 0;

    if (typeof numbers !== 'object') {
        return "No numbers to calculate average";
    } else if (typeof numbers === 'object') {
        if (numbers.length === 0) {
            return "No numbers to calculate average";
        } else {
            for (let i = 0; i < numbers.length; i++) {
                sum += numbers[i];
            }
        }
    }
  
    return sum / numbers.length;
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

export default calculateAverage
