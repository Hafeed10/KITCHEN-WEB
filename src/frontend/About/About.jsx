import React from 'react';
import './about.css';
import Lock1 from '../../assets/billionphotos1082174min.png'; // Correct path and import

function About() {
  return (
    <>
      {/* Corrected inline styling syntax */}
      
      <div className='about' id='max'>
        <div className="about_section">
          <h2>Chef's Recipes</h2>
          <h1>Professional Kitchen</h1>
          <div className='max_img'>
            <img src={Lock1} alt="Professional kitchen" className="about-image" />
          </div>
          {/* Corrected the typo in className from 'descption' to 'description' */}
          <div className="description">
            <p>
              Welcome to our state-of-the-art professional kitchen, where culinary creativity meets precision. Designed for chefs who demand the best, our kitchen is
              equipped with cutting-edge appliances, ensuring efficiency and excellence in every dish. From the latest in cooking technology to a seamless workflow, our kitchen fosters an environment where innovation and passion come together to create unforgettable meals.
              Ample space, ergonomic workstations, and a focus on hygiene and safety, our kitchen is optimized for both functionality and comfort. Whether you're
              crafting intricate recipes or preparing large-scale banquets, this kitchen provides the tools and ambiance needed to bring your culinary visions to life.
            </p>
          </div>

          {/* // The main__gallery Section Start */}
          <section className="main__gallerye">
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
              <picture className="article__picture">
                <img src="https://i.imgur.com/yP79MAU.png" alt="Gallery image 4" />
              </picture>
              {/* Removing the duplicate image or you can replace it */}
            </article>
          </section>
          {/* // The main__gallery Section End */}
        </div>
      </div>
    </>
  );
}

export default About;
