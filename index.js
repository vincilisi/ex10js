// 1. Rimuovere duplicati da un array usando Set
// Scrivi una funzione removeDuplicates(arr) che prende un array e restituisce un nuovo array senza duplicati

// 2. Somma condizionale con reduce
// Hai un array di numeri: [5, 12, 8, 130, 44].
// Calcola la somma solo dei numeri maggiori di 10 usando filter e reduce.

// 3. Destrutturazione avanzata
// Dall’oggetto:
// const user = {
//   name: 'Mario',
//   age: 30,
//   skills: ['JS', 'React', 'Node'],
//   address: {
//     city: 'Roma',
//     zip: '00100'
//   }
// };
// Estrai in variabili separate: name, il secondo elemento di skills e city, usando la destrutturazione.

// 4. Arrow function con map
// Dato l’array ['ciao', 'come', 'va'], crea un nuovo array con le stesse parole ma in maiuscolo usando map e una arrow function.

// 5. Rovesciare una stringa con spread e reverse
// Scrivi una funzione reverseString(str) che rovescia una stringa utilizzando lo spread operator e i metodi degli array

// 6. Funzione che restituisce solo valori unici da due array
// Unisci due array [1,2,3] e [2,3,4,5], rimuovi i duplicati e restituisci un array ordinato.

// 8. Rest operator e somma dinamica
// Crea una funzione sum(...numbers) che accetta qualsiasi numero di argomenti e restituisce la loro somma.

// 9. Oggetti dinamici con map
// Hai un array di nomi: ['Luca', 'Anna', 'Marco'].
// Trasformalo in un array di oggetti nel formato:
// [
//   { name: 'Luca', id: 1 },
//   { name: 'Anna', id: 2 },
//   { name: 'Marco', id: 3 }
// ]
// Usa map.

// 10. Sort personalizzato con freccia
// Ordina l’array [{age:30},{age:20},{age:40}] in ordine crescente di age usando sort con una arrow function.

// 7. Contare occorrenze di elementi in un array
// Scrivi una funzione countOccurrences(arr) che, dato un array come:

// ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
// restituisca un oggetto del tipo:

// { apple: 3, banana: 2, orange: 1 }
// Devi farlo in modo elegante, usando reduce.


// es1
 const arr = [1,2,3,2,4,1,2];
 const removeDuplicates = [new Set (arr)]
 console.log(removeDuplicates);
//  Per eseguire l'esercizio per prima cosa ho creato un arr e poi sono andato a creare una nuova constante dove sono andato a andoto a dare il new set di arr

// es2
 const NumeriMaggiori = [5, 12, 8, 130, 44].filter(numero=> numero > 10).reduce((a,b)=>a+b , 0);
 console.log(NumeriMaggiori);
//  per questo esercizio ho preso l'arrey e tramite es6 go concatenato piu' funzioni, per prima cosa ho usato il .filter()cosi da ricreare un nuovo array senza modificare il precedente, inquesto caso andando a prendere solo i valori maggiori di 10, e poi ho concatenato il reduce()che mi va a sommare i valori del nuovo array.

//  es3 
const user ={
    name: 'Mario',
    age: 30,
    skills: ['JS', 'React', 'Node'],
    address: {
    city: 'Roma',
    zip: '00100'
          },
}
const {name, skills,address} = user;
console.log(name, skills[1], address.city);
// per fare questo esercizio ho destrutturato i valori richiesti e poi in console ho preso, per skills e addres il valore richiesto.

// es4

const parole = ['ciao', 'come', 'va'];

const Parole = (ind)=>{
    ind.forEach((striga)=>console.log(striga.toUpperCase()));
    
};

Parole(parole)
// Per fare questo esercizio, sono partito dalla costante,  sono andato a creare una funzione tramite Arrow function con forEach, facendo in modo che ristampasse le parole in maiuscolo grazie a .toUpperCase()

// es5

const reverseString = (str) => {
    return [...str].reverse().join("");
}

console.log(reverseString("Js con es6 è bello ma faticoso"));

// per fare questo esercizio sono partito a creare la funmzione dove al return gli ho passato [..str] che serve a trasformare la stringa in un array, ho concatenato .reverse() che mi aiuta ad invertire gli ordini degli elementi ed in fine .join("") che ricompone array in una stringa

// es6

const uarr1 = [1,2,3];
const uarr2 = [2,3,4,5];

const unico =[new Set([...uarr1, ...uarr2])]
console.log(unico);
// per fare l'esercizio ho creato per prima cosa una costante dove gli ho creato un new set() con dentro [...const1, ...const2] cosi che mi uniscano nella mia nuova costante i 2 array e eliminano i duplicati

// es7

const contare = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const countOccurrences = (array) => {
  return array.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
};

console.log(countOccurrences(contare));
// per questo esercizio ho usato il .reduce() che serve per contare gli elementi, acc[item]||0 serve a capire che se il frutto lo ha iniziato a contare allora va a sommare col precedente se no parte da 0.

// es 8

const NummeridaSommare = [2,5,14,17,27];
const sum = (...NummeridaSommare) =>{
    return NummeridaSommare.reduce((a,b)=>a+b,0)
}
console.log(sum(...NummeridaSommare));
// ho creato una costante dove ho passaro il mio array di numeri, nella funzione fo dato come return array.reduce() che serve a sommarli e in console grazie allo spread operetor ho stampato il risultato

// es9

const nomi = ['Luca', 'Anna', 'Marco'];
const nomeOggetto = nomi.map((nome, index)=> ({name:name, id:index+1}));
console.log(nomeOggetto);
// qua dall'arrey ho ricreato un nuovo array che dal principale go dato il .map()cosi da ristampare un nuovo array che ho passatto come valori nome e index, per il nome ho fatto si che combaciava con quello che trova nell array e id ho dato che era uguale all'index+1

// 10

const age =[
    {age:30},
    {age:20},
    {age:40}
].sort((a,b) => a.age-b.age);
console.log(age);
// per questo esercizio ho concatenato all'array la funzione sort che grazie ad a.age-b.age mi ristampa l'array riodinandolo dal piu' piccolo al piu' grande