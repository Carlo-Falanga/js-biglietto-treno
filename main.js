/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

TIP:
per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:

100km, 10 anni => prezzo corretto:  €16.80
100km, 70 anni => prezzo corretto: €12.60
*/

/* Data colletion */
// - chiedere all'utente il numero di chilometri
const numberKilometers = Number(
  prompt("Inserisci il numero di chilometri da percorrere"),
);
// - chiedere all'utente l'eta' del passeggero
const numberAge = Number(prompt("Inserisci l'eta' del passeggero"));
// - prezzo in base ai km
const priceKm = 0.21;

// console.log(numberKilometers, numberAge, priceKm, basePrice, priceMessage);

// calcolo per il costo senza sconto ie. 100(numero km) * 0.21(prezzo al km)
const basePrice = numberKilometers * priceKm;

// messaggi per l'alert
const priceMessage = "Il costo del biglietto e' di €";
const minorPriceMessage = "Il costo del biglietto scontato del 20% e' di"
const overPriceMessage = "Il costo del biglietto scontato del 20% e' di"

/* Elaborazione richiesta */
if (numberAge < 18) {
  const minorDiscount = basePrice * 0.2;
  const minorDiscountTotal = basePrice - minorDiscount;
  alert(`${minorPriceMessage}  ${minorDiscountTotal.toFixed(2)}`);
  console.log(minorDiscountTotal.toFixed(2));

} else if (numberAge > 65) {
  const overDiscount = basePrice * 0.4;
  const overDiscountTotal = basePrice - overDiscount;
  alert(`${overPriceMessage} ${overDiscountTotal.toFixed(2)}`);
  console.log(overDiscountTotal.toFixed(2));

} else {
  alert(`${priceMessage} ${basePrice.toFixed(2)}`);
  console.log(basePrice.toFixed(2));
}
