const quotes = [
    {
        quote: "A rose by any other name would smell as sweet.	",
        author: "William Shakespeare"
    },
    {
        quote: "All that glitters is not gold.	",
        author: "William Shakespeare	"
    },
    {
        quote: "All the world’s a stage, and all the men and women merely players.	",
        author: "William Shakespeare	"
    },
    {
        quote: "Ask not what your country can do for you; ask what you can do for your country.	",
        author: "John Kennedy	"
    },
    {
        quote: "Ask, and it shall be given you; seek, and you shall find.	",
        author: "the Bible	"
    },
    {
        quote: "Eighty percent of success is showing up.	",
        author: "Woody Allen	"
    },
    {
        quote: "Elementary, my dear Watson.	",
        author: "Sherlock Holmes (character)	"
    },
    {
        quote: "For those to whom much is given, much is required.	",
        author: "the Bible	"
    },
    {
        quote: "Frankly, my dear, I don't give a damn.	",
        author: "Rhett Butler (character)	"
    },
    {
        quote: "Genius is one percent inspiration and ninety-nine percent perspiration.	",
        author: "Thomas Edison	"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;