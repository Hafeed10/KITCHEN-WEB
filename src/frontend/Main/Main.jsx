import React from 'react';

function Main() {
  return (
    <main className="main">
      <section className="main__splash">
        <article className="article">
          <div className="article__content">
            <h4>Design and order your new kitchen online today</h4>
            <h1>
              Bespoke & made to measure handmade kitchen design
            </h1>
            <button className="button">Order now</button>
          </div>
        </article>
      </section>

      <section className="main__blurb">
        <article className="article">
          <picture className="article__picture">
            <img src="https://i.imgur.com/TLkkTWR.png" alt="Example kitchen" />
          </picture>
          <div className="article__content">
            <h4 className="text-gold">Quality Craftmanship from build to delivery</h4>
            <h2>Discover the beauty of a handmade kitchen</h2>
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Morbi eget est sit amet sapien venenatis maximus vel in urna.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Morbi eget est sit amet sapien venenatis maximus vel in urna.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Morbi eget est sit amet sapien venenatis maximus vel in urna.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Morbi eget est sit amet sapien venenatis maximus vel in urna.
            </h6>
            <button className="button">About Us</button>
          </div>
        </article>
      </section>

      {/* <section className="main__testimonials">
        <article className="article">
          <div className="article__content">
            <h4 className="text-gold">What Our Customers Say</h4>
            <h3>Over 35 years experience designing</h3>
            <h5>
              Since my first contact I have received a very high level of customer service and advice with my kitchen plans.
            </h5>
            <h6>Jane, Dundee</h6>
            <button className="button">Frequently Asked Questions</button>
          </div>
        </article>
      </section> */}

      {/* <section className="main__gallery">
        <h3>Customer Gallery</h3>
        <article className="article">
          <picture className="article__picture">
            <img src="https://i.imgur.com/z6SQtCI.png" alt="" />
          </picture>
          <picture className="article__picture">
            <img src="https://i.imgur.com/NOlYes6.png" alt="" />
          </picture>
          <picture className="article__picture">
            <img src="https://i.imgur.com/wfR2hs8.png" alt="" />
          </picture>
          <picture className="article__picture">
            <img src="https://i.imgur.com/yP79MAU.png" alt="" />
          </picture>
        </article>
        <button className="button">View more</button>
      </section> */}
    </main>
  );
}

export default Main;
