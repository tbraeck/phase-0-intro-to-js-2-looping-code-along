for (let age = 30; age < 40; age++) {
console.log(`I'm ${age} years old. Happy birthday to me!`);

}


const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);

    }
 
   return gifts;
}

wrapGifts(gifts); 


 names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names) {
     let messages = [];
     names.forEach((name,index) => {
messages.push("Thank you, " + name + ", for the wonderful surprise gift!");

     })
     return messages;

}

console.log(writeCards(names));




function countDown() {
    let count = 0;
    while (count < 11) {

        console.log(count);
        count += 1;
       
    }
    return count;
}
    

