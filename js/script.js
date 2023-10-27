document.addEventListener(`DOMContentLoaded`, () => {})
 
 // Fetch a random quote from the API
async function fetchQuote() {
  const response = await fetch(' https://zenquotes.io/api/image');
  const data = await response.json();
  return data.content;
}

// Display the quote on the page
function displayQuote(quote) {
  const quoteContainer = document.querySelector('#quote-container');
  quoteContainer.innerHTML = quote;
}

// Like the quote
function likeQuote() {
  // TODO: Implement this function to like the quote
}

// Save the quote
function NextQuote() {
  const quote = random.choice(Quotes)
  return {"quote": quote}
}

//Add event listeners to the "Get Quote" and "Next" buttons
document.querySelector('.get-quote-button').addEventListener('click', async () => {
  const quote = await fetchQuote();
  displayQuote(quote);
});

const nextButton = document.querySelector('.next-button');
nextButton.addEventListener('click', async () => {
  const quote = await fetchQuote();
  displayQuote(quote);
});

// document.body.appendChild(addEventListener)

