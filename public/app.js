var Quote = function(quote, author){
  this.quote = quote;
  this.author = author;
};

var q1 = new Quote("Visual Basic is the way forward, I don't know why we are doing Javascript.", "Jay Chetty");
var q2 = new Quote("The only CSS you need to know is background-color: tomato.", "Rick");
var q3 = new Quote("No Blockers *smug tone*", "Keith");
var q4 = new Quote("Scaffold is nothing but a fiery hell.", "Valerie");
var q5 = new Quote("That is quite obviously a frog.", "Jay Chetty");

var quotes = [q1, q2, q3, q4, q5];

var loadQuotes = function(){
  for (var i = 0; i < quotes.length; i++) {
    addQuote(quotes[i]);
  }
};

var addQuote = function(quote){
  var quotesSection = document.querySelector('#quotes');

  var article = document.createElement('article');

  var blockquote = document.createElement('blockquote');
  blockquote.innerText = quote.quote + ' ';

  var cite = document.createElement('cite');
  cite.innerText = quote.author;

  blockquote.appendChild(cite);
  article.appendChild(blockquote);

  article.classList.add('quote');

  var remove = document.createElement('button');
  remove.id = 'quote-delete';
  remove.innerText = 'Delete Quote';
  remove.onclick = deleteQuote;

  article.appendChild(remove);

  quotesSection.appendChild(article);
};

var deleteQuote = function(){
  var parent = this.parentNode;
  parent.parentNode.removeChild(parent);
}


window.onload = function(){
  loadQuotes();

  var handleClick = function(){
    var quote = document.getElementById('quote-quote-input').value;
    var author = document.getElementById('quote-author-input').value;

    console.log(quote, author);

    var newQuote = new Quote(quote, author);
    addQuote(newQuote);
  }

  var submitButton = document.getElementById('quote-button');
  submitButton.onclick = handleClick;

  var form = document.getElementById('quote-form');
  form.onsubmit = function(event){
    event.preventDefault();
    handleClick();
  }
};