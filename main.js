let num1 = 620;
let num2 = 110;

function wynik(licz1, licz2) {
	if (licz1 === 20) {
		return true;
	} else if (licz2 === 20) {
		return true;
	} else if (licz1 + licz2 <= 20) {
		return true;
	} else {
		return false;
	}
}
console.log(wynik(num1, num2));
