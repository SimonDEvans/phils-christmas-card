// Quote list
const data = {
  1: {
    author: "Stephanie Fletcher - GOSH",
    saying:
      "Every year, Torchbox exceeds expectations and targets. This year, they have gone above and beyond to support GOSH Charity, and most importantly myself and the digital team. When all of our campaigns were turned upside down, and as a digital team our resources stretched, Torchbox were there. We chucked a lot at you guys, as we changed strategies to raise as much money as possible, and with external factors making things difficult, the team smiled and supported us every step of the way. No words will ever be enough to say how thankful I am. To be able to know search was in safe hands, was a weight off my shoulders. But I have to end on a high! To date, our Christmas campaign is producing results we could have only dreamed of! THANK YOU",
  },
  2: {
    author: "Josie Tree - Chatham House",
    saying:
      "A very happy Xmas to our lovely CH TBX team. Thanks for all your hard work and support this year it’s been a pleasure working with all of you. And kudos to Ros for parachuting in as an honorary part-time member of our internal team over the last few months and helping us achieve so much. Look forward to continuing all the great work in 2021",
  },
  3: {
    author: "Carina Edwards - Samaritans",
    saying:
      "I wanted to say a huge thank you to Ali for all the hard work she has put into the Samaritans account over the last few years. She’s been an invaluable part of the team and has work closely with us to get some amazing results. Apart from the work side of things, it’s been a total pleasure to work with her. She’s a lovely person and her warmth really shines through. Wishing her all the best for the Christmas season and I look forward to working together again in the New Year.",
  },
  4: {
    author: "Nicky Stephens - Shelterbox",
    saying:
      "Happy Christmas Iona and Kat! You're an absolute dream to work with. Despite the crazy year we've all had it's been a pleasure to work together. With your support, we've provided emergency shelter for nearly 200,000 people this year - that's 200,000 people who now have a place to call home and stay safe from the threat of coronavirus. Thank you both! Hope you enjoy and peaceful and relaxing Christmas - from Nicky and the team at ShelterBox",
  },
  5: {
    author: "Lucy Day - MSC",
    saying:
      "Thank you so much for your support and refreshing positivity during this challenging year. It’s fantastic to see the improvements that we’ve managed to make together and it’s an absolute pleasure working with you all. We hope you all have a relaxing winter break and look forward to working together again in the new year (and hopefully meeting in person at some point!).Best wishes, Team MSC",
  },
  6: {
    author: "Stromi Lof - NHS",
    saying:
      "Jenny and Nick have delivered some precious SEO expertise to the NHS website at a time where demand for trustworthy health content is at all-time high. Massive thanks for your fantastic work this year!",
  },
  7: {
    author: "Adnan Hafiz - Islamic Relief UK",
    saying:
      "Despite the many challenges in 2020, Islamic Relief UK was able to grow and raise significantly more funds than 2019. The primary reason for this was the strength of our digital presence, which was primarily driven by the great work delivered by the Torchbox team, particularly Amina and Nick. As well as this work being recognised through the recent award, we have also decided to expand our relationship and entrust Amina with an additional area that we aspire to grow in and which we strongly believe in her capabilities to deliver. Not only has the technical capability been great, it has been a pleasure to work with Amina, Nick and the wider Torchbox team. Thank you for all of your support this year!",
  },
};

let quoteIndex = 1;
const quoteContainer = document.getElementById("quote");
const quotes = Object.keys(data).reduce(
  (quoteArray, key) => [...quoteArray, data[key]],
  []
);

function nextElement() {
  quoteContainer.innerHTML = `
    <div>${quotes[quoteIndex].author}</div>
    ${quotes[quoteIndex].saying}
  `;
  quoteIndex = (quoteIndex + 1) % quotes.length;
}

// Get first quote on load
document.addEventListener("DOMContentLoaded", () => {
  quoteContainer.innerHTML = `
    <div>${quotes[0].author}</div>
    ${quotes[0].saying}
  `;
});

// Get quotes on spacebar
document.addEventListener("keyup", (event) => {
  if (event.code === "Space") {
    nextElement();
  }
});
