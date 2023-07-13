const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const generateBtn = document.querySelector("#generateBtn");

function generateQuote() {
  const quotes = {
    "Mustafa Kemal Atatürk":
      "To see me does not necessarily mean to see my face. To understand my thoughts is to have seen me.",
    "Oscar Wilde": "Be yourself; everyone else is already taken.",
    "Mark Twain": "If you tell the truth, you don't have to remember anything.",
    "Bill Gates":
      "DNA is like a computer program but far, far more advanced than any software ever created.",
    "Maya Angelou":
      "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    "Elbert Hubbard":
      "A friend is someone who knows all about you and still loves you.",
    "Martin Fowler":
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  };

  // Get an array of author names from the quotes object
  const authors = Object.keys(quotes);
  // Generate a random index within the range of the authors array
  const randomIndex = Math.floor(Math.random() * authors.length);
  // Get a random author name using the random index
  const randomAuthor = authors[randomIndex];
  // Get the quote corresponding to the random author
  const randomQuote = quotes[randomAuthor];

  author.textContent = randomAuthor;
  quote.textContent = randomQuote;
}

generateBtn.addEventListener("click", generateQuote);
