// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var message = '';
var viewedQuotes = [];

//Array containing the quote and author
var quotes = [
	{
		quote: "Sometimes life is going to hit you in the head with a brick. Don't lose faith.",
		source: "Steve Jobs",
	},
	{
		quote: "If your head is wax, don't walk in the sun.",
		source: "Ben Franklin",
	},
	{
		quote: "Knowledge is power.",
		source: "Sir Francis Bacon",
	},
	{
		quote: "When we ask for advice, we are usually looking for an accomplice.",
		source: "Marquis de la Grange",
	},
	{
		quote: "You may be disappointed if you fail, but you are doomed if you don't try.",
		source: "Beverly Sills",
	},
];

//Function to allow message to be printed on page
function print(quote) {
	var outputDiv = document.getElementById('quote-box');
	outputDiv.innerHTML = quote;
}

//Function that gets random object from 'quotes' array
function getRandomQuote() {
	var randomQuote = Math.floor(Math.random() * quotes.length);
	
	var splicedQuote = quotes.splice(randomQuote, 1)[0];
	viewedQuotes.push(splicedQuote);
	if ( quotes.length === 0 ) {
		quotes = viewedQuotes;
		viewedQuotes = [];
	}
	return splicedQuote;
}

//Function that prints random object to the page
function printQuote() {
	var quotes = getRandomQuote();
	message ='<p class="quote">' + quotes.quote + '</p>';
	message  += '<p class="source">' + quotes.source + '</p>';
	print(message);
}
