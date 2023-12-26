import React,{useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import TextTransition, { presets } from 'react-text-transition';

const App = () => {
  const quotes = [
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela"
    },
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney"
    },
    {
      quote: "Your time is limited, don't waste it living someone else's life.",
      author: "Steve Jobs"
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon"
    },
    {
      quote: "All our dreams can come true, if we have the courage to pursue them.",
      author: "Walt Disney"
    },
    {
      quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
      author: "Albert Schweitzer"
    },
    {
      quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
      author: "Thomas Edison"
    },
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      quote: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson"
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    }
  ];
  
  let [actualQuote, setQuote] = useState("")
  let [actualAuthor, setAuthor] = useState("")
  
  const showRandomQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    if (randomQuote.quote !== actualQuote) {
      
      setQuote(randomQuote.quote);
      setAuthor(randomQuote.author);
    } else {
      showRandomQuote()
    }
   }

  useEffect(() => {
    showRandomQuote()
    document.body.classList.add('min-vh-100', 'd-flex', 'justify-content-center', 'align-items-center');

    return () => {
      document.body.classList.remove('d-flex', 'justify-content-center', 'align-items-center');
    };
  }, [])

  return (
    <div id="quote-box" className="bg-primary p-5 rounded text-center" style={{height: "200px", width: "1000px"}}>
      <div id="text" className="font-weight-bold text-white">      
        <TextTransition springConfig={presets.molasses} direction='up' inline={true}>
          {actualQuote}
        </TextTransition>
      </div>
      <p id="author" className="text-white">
        <TextTransition springConfig={presets.gentle} direction='down' inline={true}>  
          ~{actualAuthor}
        </TextTransition>
      </p>
      <div className="row justify-content-center align-items-center">
        <button className="btn btn-light col-2" id="new-quote" onClick={showRandomQuote}>New Quote</button>
        <a id="tweet-quote" className="col-2 align-middle text-white" href={"https://twitter.com/intent/tweet?text=" + encodeURIComponent(actualQuote)}>Tweet</a>
      </div>
    </div>
   );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();