document.addEventListener(`DOMContentLoaded`, () => {
  // Fetch a random quote from the API
  async function fetchQuote() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const response = await fetch(' https://zenquotes.io/api/image',{
    proxy: proxyUrl,
    });
   // Check if the response was successful
  if (!response.ok) {
    throw new Error('Failed to fetch quote');
  }
  //parse the response as json
    const data = await response.json();
    //Return  the quote
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

  // Fetch a new quote when the "Next" button is clicked
  const nextButton = document.querySelector('.next-button');
  nextButton.addEventListener('click', async () => {
    const quote = await fetchQuote();
    displayQuote(quote);
  });

  // Add a like button
  const likeButton = document.createElement('button');
  likeButton.id = 'like-button';
  likeButton.textContent = 'Like';
  document.body.appendChild(likeButton);

  // Add an event listener to the like button
  document.getElementById('like-button').addEventListener('click', likeQuote);

  // Fetch the initial quote
  fetchQuote().then(displayQuote);
});
