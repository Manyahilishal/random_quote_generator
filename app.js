console.log("connected")
let quote = [" “We become what we think about” – Earl Nightingale", "I am Wolyta, Author Manny Dado", "life is better with family, Manny", "sharing is caring, Steph", "we are bonded for life, Carmalin"]
let randomNumber = Math.floor(Math.random() *3);
function newQuote(){
    let randomNumber =Math.floor(Math.random() *(quote.length));
    document.getElementById('qouteDisplay').innerHTML = quote[randomNumber]
} 