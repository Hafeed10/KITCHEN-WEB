import React from 'react';
import './main.css';
import { Link } from 'react-router-dom';

function Main() {
  return (
    // The Main Section Start
    <main className="main">
      {/* // The main__splash Section Start*/}
      <section className="main__splash">
        <article className="article">
          <div className="article__content">
            <h4>Design and order your new kitchen online today</h4>
            <h1>Bespoke & made to measure handmade kitchen design</h1>
            <button className="button1">Order now</button>
          </div>
        </article>
      </section>
      {/* // The main__splash Section End */}

      {/* // The main__blurb Section Start */}
      <section className="main__blurb">
        <article className="article">
          <picture className="article__picture">
            <img src="https://i.imgur.com/TLkkTWR.png" alt="Example kitchen" />
          </picture>
          <div className="article__content">
            <h4 className="text-gold">Quality Craftmanship from build to delivery</h4>
            <h2>Discover the beauty of a handmade kitchen</h2>
            <h6>
              A kitchen is a room or part of a room where food is prepared, cooked, and washed. Kitchens can be found
              in homes, restaurants, hospitals, schools, and other commercial establishments. A modern kitchen typically
              has: A stove, A sink with hot and cold water, A refrigerator, Worktops, and Cabinets.
            </h6>
            <div className='button_logic'>
            <Link to='/about' className="button-max">About Us</Link>
            </div>
          </div>
        </article>
      </section>
      {/* // The main__blurb Section End */}

      {/* // The main__testimonials Section Start */}
      <section className="main__testimonials">
        <article className="article">
          <div className="article__content">
            <h4 className="text-gold">What Our Customers Say</h4>
            <h3 className="section-max">Over 10 years experience designing</h3>
            <h5>
              Since my first contact I have received a very high level of customer service and advice with my kitchen
              plans.
            </h5>
            <h6 className="section-maxe">Muhammed Hafeex , Palakkad</h6>
            <button className="button-max">Frequently Asked Questions</button>
          </div>
        </article>
      </section>
      {/* // The main__testimonials Section End */}

      {/* // The main__gallery Section Start */}
      <section className="main__gallery">
        <h3>Customer Gallery</h3>
        <article className="article">
          <picture className="article__picture">
            <img src="https://i.imgur.com/z6SQtCI.png" alt="Gallery image 1" />
          </picture>
          <picture className="article__picture">
            <img src="https://i.imgur.com/NOlYes6.png" alt="Gallery image 2" />
          </picture>
          <picture className="article__picture">
            <img src="https://i.imgur.com/wfR2hs8.png" alt="Gallery image 3" />
          </picture>
          <picture className="article__picture">
            <img src="https://i.imgur.com/yP79MAU.png" alt="Gallery image 4" />
          </picture>
        </article>
        <Link to='/gallery' className="button1">View more</Link>
      </section>
      {/* // The main__gallery Section End */}
    </main>
    // {/* // The Main Section End */}
  );
}

export default Main;
