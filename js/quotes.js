const quotes = [
  {
    quote:"It's okay to struggle. It's not okay to give up.",
    author:"GABE GRUNEWALD"
  },
  {
    quote:"Everything negative, pressure, challenges is all an opportunity for me to rise.",
    author:"KOBE BRYANT"
  },
  {
    quote:"If you train hard, you'll not only be hard, you'll be hard to beat.",
    author:"HERSCHEL WALKER"
  },
  {
    quote:"Just keep going. Everybody gets better if they keep at it",
    author:"TED WILLIAMS"
  },
  {
    quote:"We are what we repeatedly do. Excellence then is not an act but a habit",
    author:"ARISTOTLE"
  },
  {
    quote:"Happiness is different from pleasure. Happiness has something to do with struggling and enduring and accomplishing.",
    author:"GEORGE SHEEHAN"
  },
  {
    quote:"A goal is just an awesome way to force growth on yourself.",
    author:"DEENA KASTOR"
  },
  {
    quote:"Life for participating, not for spectating.",
    author:"KATHRINE SWITZER"
  },
  {
    quote:"I always want to give more than I gave yesterday.",
    author:"ALLYSON FELIX"
  },
  {
    quote:"Some people want it to happen, some wish it would happen, others make it happen.",
    author:"MICHAEL JORDAN"
  },

]

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

// Math.round(1.4) 반올림
// Math.ceil(1.01)  올림
// Math.floor(1.9999) 내림
// Math.random() 0과 1사이 랜덤숫자 생성 
//* array에서는 index번호가 0부터 시작인점 유의