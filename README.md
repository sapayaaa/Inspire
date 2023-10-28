# Quote Generator

Quote Generator is a web application that fetches random inspirational quotes and allows users to like them. It is designed to provide users with daily inspiration and positivity. This README will provide an overview of the code and how to use it.

## Project Structure
it consists of-

index.html- This HTML file defines the structure of the web page and includes the main content, such as the quote display and buttons for liking and fetching the next quote.

css/style.css- The CSS file is linked to the HTML to style the page

js/script.js- This JavaScript file contains the code responsible for fetching quotes, handling user interactions, and updating the quote display.

## How to Use

To use the Quote Generator, simply open the `index.html` file in a web browser. You will see an "Inspiring Quotes" header, a quote image, and buttons for liking the quote and fetching the next one. Clicking the "Next" or you reload the page button will load a new quote.

Additionally, there is a category button labeled "Inspirational." It just works as a bottom heading.

## Features

- Fetches random quotes from the ZenQuotes API.
- Allows users to like quotes (Like feature not yet implemented).
- Provides a "Next" button to fetch a new random quote.
- Displays quotes on the webpage.

## Code Structure

The project's JavaScript code is structured as follows:

- `fetchQuote()`: This function fetches a random quote from the ZenQuotes API using a proxy to handle CORS issues.

- `displayQuote(quote)`: This function updates the HTML to display the fetched quote on the webpage.

- `likeQuote()`: A placeholder function for liking quotes, which is not yet implemented.

- Event listeners: The "Next" button is connected to fetch a new quote, and a "Like" button is added, although the functionality is yet to be implemented.

## Attribution

- Quote images are fetched from the ZenQuotes API (https://zenquotes.io/api/image).

## License

This project is available under the MIT License. Please refer to the `LICENSE.md` file for details.