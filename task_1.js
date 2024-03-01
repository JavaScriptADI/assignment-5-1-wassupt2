const PRODUCT_COUNT = 50;

const products = [];

// Generate Products

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomString(length) {
    let text = '';
    for (let i = 0; i < length; i++) {
        if (getRandomInt(0, 100) > 10)
            text += String.fromCharCode(getRandomInt(97, 122));
        else
            text += ' ';
    }
    return text;
}

for (let i = 0; i < PRODUCT_COUNT; i++)
    products.push({
        title: getRandomString(getRandomInt(30, 60)),
        price: getRandomInt(500, 5000),
        description: getRandomString(getRandomInt(300, 1000))
    })

// average price
let totalPrice = 0;

for (let i = 0; i < products.length; i++) {
    totalPrice += products[i].price;
}

const averagePrice = totalPrice / products.length;

console.log(averagePrice);
// count average words per description
let totalWords = 0;

for (let i = 0; i < products.length; i++) {
    const wordCount = products[i].description.split(' ').filter(Boolean).length;
    totalWords += wordCount;
}

const averageWordsPerDescription = totalWords / products.length;

console.log(averageWordsPerDescription);

// average character

let totalCharacters = 0;

for (let i = 0; i < products.length; i++) {
    totalCharacters += products[i].description.length;
}

const averageCharactersPerDescription = totalCharacters / products.length;

console.log(averageCharactersPerDescription);

// max words
let maxWords = 0;

for (let i = 0; i < products.length; i++) {

    const wordCount = products[i].description.split(' ').filter(Boolean).length;
    if (wordCount > maxWords) {
        maxWords = wordCount; 
        console.log(wordCount);
    }
}


// minimum words
let minPrice = products[0].price; 

for (let i = 1; i < products.length; i++) {
    if (products[i].price < minPrice) {
        minPrice = products[i].price; 
        console.log(minPrice);
    }
}


