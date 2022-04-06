console.log("connected")
let quote = ["Earl Nightingale said, \"We become what we think about\". ", "I am Wolyta, Author Manny Dado", " Manny said, \"life is better with family\".", "Sharing is caring -Gen.Team", " Carmalin said, \"We are bonded for life\"."]
let randomNumber = Math.floor(Math.random() *3);
function newQuote(){
    let randomNumber =Math.floor(Math.random() *(quote.length));
    document.getElementById('qouteDisplay').innerHTML = quote[randomNumber]
} 
