var Quote = function(quote, author){
  this.quote = quote;
  this.author = author;
};

Quote.prototype = {
  toArticleInnerHTML: function(){
    return '<blockquote>' + this.quote + ' <cite>~' + this.author + '</cite></blockquote>';
  },
  toBlockquoteInnerHTML: function(){
    return this.quote + ' <cite>~' + this.author + '</cite>'
  }
};

var q1 = new Quote("Visual Basic is the way forward, I don't know why we are doing Toma'o'.", "Jay Chetty");
var q2 = new Quote("The only CSS you need to know is background-color: toma'o'.", "Rick");
var q3 = new Quote("No Blockers *toma'o' face*", "Keith");
var q4 = new Quote("Scaffold is nothing but a fiery toma'o'.", "Valerie");
var q5 = new Quote("That is quite obviously a toma'o'.", "Jay Chetty");

var quotes = [q1, q2, q3, q4, q5];

var quoteOfTheDay = function(){
  return quotes[Math.floor(Math.random() * quotes.length)];
};

var setQuoteOfTheDay = function(quote){
  var blockquote = document.getElementById('quote-of-the-day');
  blockquote.innerHTML = quote.toBlockquoteInnerHTML();
};

var loadQuotes = function(){
  for (var i = 0; i < quotes.length; i++) {
    addQuote(quotes[i]);
  }
};

var addQuote = function(quote){
  var quotesSection = document.querySelector('#quotes');

  var article = document.createElement('article');

  var blockquote = document.createElement('blockquote');
  blockquote.innerText = quote.quote;

  var cite = document.createElement('cite');
  cite.innerText = ' ~' + quote.author;

  blockquote.appendChild(cite);
  article.appendChild(blockquote);

  article.classList.add('quote');

  var remove = document.createElement('button');
  remove.classList.add = 'quote-delete';
  remove.innerText = 'Delete Quote';
  remove.display = 'inline-block'
  remove.onclick = deleteQuote;


  article.appendChild(remove);

  quotesSection.appendChild(article);
};

var deleteQuote = function(){
  var parent = this.parentNode;
  parent.parentNode.removeChild(parent);
};

var handleBlur = function(){
  var quoteInput = document.getElementById('quote-quote-input');
  var authorInput = document.getElementById('quote-author-input');

  console.log('blurrring');
};

var resetForm = function(){
  var quoteInput = document.getElementById('quote-quote-input');
  var authorInput = document.getElementById('quote-author-input');
  quoteInput.value = '';
  authorInput.value = '';
  createPreview();
};

var handleClick = function(){
  var quote = document.getElementById('quote-quote-input').value;
  if (quote.trim()) {
    var author = document.getElementById('quote-author-input').value;

    console.log(quote, author);

    var newQuote = new Quote(quote, author);
    addQuote(newQuote);
    resetForm();
  }
};

var createPreview = function(){
  var quoteInput = document.getElementById('quote-quote-input');
  var authorInput = document.getElementById('quote-author-input');
  var preview = document.getElementById('quote-preview');
  var author = authorInput.value
               ? ' <cite>~'+ authorInput.value + '</cite>'
               : ''
  preview.innerHTML = '<blockquote>' + quoteInput.value + author + '</blockquote>';
};

var changeBackground = function(){
  document.body.style.backgroundImage = 'url("' + 'http://www.benettonplay.com/toys/flipbookdeluxe/flipbooks_gif/2009/04/29/GUEST_194187321_1240995572.gif' + '")';
  if (!document.getElementById('stopThat')) {
    var a = document.createElement('a');
    var linkText = document.createTextNode('  okay, stop that');
    a.appendChild(linkText);
    a.id = 'stopThat';
    a.href = '#';
    console.log(a);
    var links = document.getElementById('links');
    links.appendChild(a);
  }

  var stopThat = document.getElementById('stopThat');

  var stop = function(){
    document.body.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    var a = document.createElement('a');
    var linkText = document.createTextNode('  okay, stop that');
    a.appendChild(linkText);
    a.id = 'stopThat';
    a.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    a.href = '#';
    console.log(a);
    var links = document.getElementById('links');
    links.appendChild(a);
    a.onclick = stop;

    var array = document.querySelectorAll('#stopThat');
    for (var i = 0; i < Math.floor(array.length / 2); i++) {
      var a = document.createElement('a');
      var linkText = document.createTextNode('  okay, stop that');
      a.appendChild(linkText);
      a.id = 'stopThat';
      a.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
      a.href = '#';
      console.log(a);
      var links = document.getElementById('links');
      links.appendChild(a);
      a.onclick = stop;
    }
  };

  stopThat.onclick = stop;
}

window.onload = function(){
  loadQuotes();
  setQuoteOfTheDay(quoteOfTheDay());

  var submitButton = document.getElementById('quote-button');
  submitButton.onclick = handleClick;

  var form = document.getElementById('quote-form');
  form.onsubmit = function(event){
    event.preventDefault();
    handleClick();
  }

  var quoteInput = document.getElementById('quote-quote-input');
  var authorInput = document.getElementById('quote-author-input');
  form.onkeyup = createPreview;

  var focus = document.getElementById('focus');
  focus.onclick = function(){
    document.getElementById('quote-quote-input').focus();
  };

  var throwTomato = document.getElementById('throw');
  throwTomato.onclick = changeBackground;
};