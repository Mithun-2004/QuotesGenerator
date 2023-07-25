var blockquote = document.querySelector('blockquote');
var newQuoteBtn = document.querySelector('#newQuoteBtn');
var tweetBtn = document.querySelector('#tweetBtn');
var author = document.querySelector('.quoteBox span')

const url = "https://api.quotable.io/quotes/random";

function generateQuote(){
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        blockquote.innerText = data[0].content;
        author.innerText = data[0].author;
    
    }).catch("Some error happened while fetching quotes.")
}

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + blockquote.innerText + "---- by" + author.innerText, "Tweet Window", "width=600, height=300");
}

newQuoteBtn.addEventListener('click', generateQuote);
tweetBtn.addEventListener('click', tweet);

generateQuote();