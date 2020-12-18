// Quote list
const data = {
  1: {
    author: "Stephanie Fletcher - GOSH",
    background: 3,
    saying:
      "Every year, Torchbox exceeds expectations and targets. This year, they have gone above and beyond to support GOSH Charity, and most importantly myself and the digital team. When all of our campaigns were turned upside down, and as a digital team our resources stretched, Torchbox were there. We chucked a lot at you guys, as we changed strategies to raise as much money as possible, and with external factors making things difficult, the team smiled and supported us every step of the way. No words will ever be enough to say how thankful I am. To be able to know search was in safe hands, was a weight off my shoulders. But I have to end on a high! To date, our Christmas campaign is producing results we could have only dreamed of! THANK YOU",
  },
  2: {
    author: "Josie Tree - Chatham House",
    background: 4,
    saying:
      "A very happy Xmas to our lovely CH TBX team. Thanks for all your hard work and support this year it’s been a pleasure working with all of you. And kudos to Ros for parachuting in as an honorary part-time member of our internal team over the last few months and helping us achieve so much. Look forward to continuing all the great work in 2021",
  },
  3: {
    author: "Carina Edwards - Samaritans",
    background: 7,
    saying:
      "I wanted to say a huge thank you to Ali for all the hard work she has put into the Samaritans account over the last few years. She’s been an invaluable part of the team and has work closely with us to get some amazing results. Apart from the work side of things, it’s been a total pleasure to work with her. She’s a lovely person and her warmth really shines through. Wishing her all the best for the Christmas season and I look forward to working together again in the New Year.",
  },
  4: {
    author: "Katy Bowen - Action for Children",
    background: 3,
    saying:
      "I’ve worked with Tim since I started at Action for Children – no problem is ever too big for Tim and he takes on every bit of work in a totally cool calm and collected way. His knowledge of analytics and tracking is mind blowing and its so amazing to see the incredible work he delivers. He has played such a huge role in the success of our (many) microsites and hes taught me so much about analytics.",
  },
  5: {
    author: "Katy Bowen - Action for Children",
    background: 4,
    saying:
      "Amina and Ali have been an absolute lifesaver in what seems like a very uncertain time. I cant thank them both enough for the speed at which they jumped on our digital parenting campaign – they should both be proud to be part of helping so many parents in need during such a difficult and scary time!",
  },
  6: {
    author: "Rachael Gilthorpe - Action for Children",
    background: 7,
    saying:
      "Amina and Ali, you've both been a fantastic support with Parent Talk this year. The weekly calls where you break everything down so that a non digital marketer like me can understand it is no small feat! You guys are so reactive which is always appreciated but probably not communicated...Parent Talk isn't the most straightforward or predictable service so knowing that you guys are so dependable makes managing the service much easier. And ultimately, your expertise in digital marketing has meant that we've been able to reach hundreds of thousands of parents this year! So from myself, the Parent Talk team and parents across the UK - thank you and Merry Christmas! Rachael xx",
  },
  7: {
    author: "Samantha Doe - Action for Children",
    background: 3,
    saying:
      "Huge thanks Amina and Ali for all your amazing work on Parent Talk in 2020. It was incredible to see the organisation get behind the scale-up and marketing launch of our digital service, and then to see the brilliant results come in. I was particularly excited to test new things with you like Spotify and responsive display. Thanks for all your expertise, your patience and your energy to turn the campaign into something so exciting with such little time. Here’s to 2021! Samantha x",
  },
  8: {
    author: "Nicky Stephens - Shelterbox",
    background: 4,
    saying:
      "Happy Christmas Iona and Kat! You're an absolute dream to work with. Despite the crazy year we've all had it's been a pleasure to work together. With your support, we've provided emergency shelter for nearly 200,000 people this year - that's 200,000 people who now have a place to call home and stay safe from the threat of coronavirus. Thank you both! Hope you enjoy and peaceful and relaxing Christmas - from Nicky and the team at ShelterBox",
  },
  9: {
    author: "Lucy Day - MSC",
    background: 3,
    saying:
      "Thank you so much for your support and refreshing positivity during this challenging year. It’s fantastic to see the improvements that we’ve managed to make together and it’s an absolute pleasure working with you all. We hope you all have a relaxing winter break and look forward to working together again in the new year (and hopefully meeting in person at some point!).Best wishes, Team MSC",
  },
  10: {
    author: "Stromi Lof - NHS",
    background: 4,
    saying:
      "Jenny and Nick have delivered some precious SEO expertise to the NHS website at a time where demand for trustworthy health content is at all-time high. Massive thanks for your fantastic work this year!",
  },
  11: {
    author: "Adnan Hafiz - Islamic Relief UK",
    background: 7,
    saying:
      "Despite the many challenges in 2020, Islamic Relief UK was able to grow and raise significantly more funds than 2019. The primary reason for this was the strength of our digital presence, which was primarily driven by the great work delivered by the Torchbox team, particularly Amina and Nick. As well as this work being recognised through the recent award, we have also decided to expand our relationship and entrust Amina with an additional area that we aspire to grow in and which we strongly believe in her capabilities to deliver. Not only has the technical capability been great, it has been a pleasure to work with Amina, Nick and the wider Torchbox team. Thank you for all of your support this year!",
  },
};

let quoteIndex = 1;
const quoteContainer = document.getElementById("quote");
const body = document.getElementById("body");
const quotes = Object.keys(data).reduce(
  (quoteArray, key) => [...quoteArray, data[key]],
  []
);

function nextElement() {
  quoteContainer.innerHTML = `
    <div>${quotes[quoteIndex].author}</div>
    ${quotes[quoteIndex].saying}
  `;
  body.className = `background-${quotes[quoteIndex].background}`;
  quoteIndex = (quoteIndex + 1) % quotes.length;
}

// Get first quote on load
document.addEventListener("DOMContentLoaded", () => {
  quoteContainer.innerHTML = `
    <div>${quotes[0].author}</div>
    ${quotes[0].saying}
  `;

  body.className = `background-${quotes[0].background}`;
});

// Get quotes on spacebar
document.addEventListener("keyup", (event) => {
  if (event.code === "Space") {
    nextElement();
  }
});
