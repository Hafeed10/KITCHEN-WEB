import React from 'react'
import './shop.css'
import { useState } from 'react';


// Import local images
import shop1 from '../../assets/shop1.jpg';
import shop2 from '../../assets/shop2.jpg';
import shop3 from '../../assets/shop3.jpg';
import shop4 from '../../assets/shop5.jpeg';
import shop5 from '../../assets/shop6.webp';
import shop6 from '../../assets/shop7.jpg';
import shop7 from '../../assets/shop8.jpeg';

function shop() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle image click
  const openImage = (src) => {
    setSelectedImage(src);
  };

  // Function to close the image popup
  const closePopup = () => {
    setSelectedImage(null);
  };
  return (
    <div className='shop'>

      <div className="shop_section">
        <h1>Shop</h1>
         {/* // The main__blurb Section Start */}
      <section className="main__blurbe">
        <article className="articlea">
          <div className="article__content">
            <h4 className="text-gold">Quality Craftmanship from build to delivery</h4>
            <h2 style={{fontSize: '45px', fontWeight: '300',}}>Discover the beauty of a shop'kitchen</h2>
            <h6>
            <p>
              Our knowledgeable staff is always on hand to provide expert advice and support, ensuring you find exactly
              what you need. With competitive prices and a commitment to excellent customer service,
              Feel free to customize this with specific details about your shop, such as the types of products or 
              services you offer, your location, or any unique selling points. Let me know if you’d like to refine
              it further!
              </p>
            </h6>
            <div className='button_logic'>
            {/* <li to='/about' className="button-max">About Us</li> */}
            </div>
          </div>
          <picture className="article__picture">
            <img src="https://i.imgur.com/TLkkTWR.png" alt="Example kitchen" />
          </picture>
        </article>
      </section>
      {/* // The main__blurb Section End */}
       
      </div>
      
      <div className='shop_grid'>
        {/* Use local images */}
        <img
          src={shop1}
          alt='Gallery image 1'
          onClick={() => openImage(shop1)}
        />
        <img
          src={shop2}
          alt='Gallery image 2'
          onClick={() => openImage(shop2)}
        />
        <img
          src={shop3}
          alt='Gallery image 3'
          onClick={() => openImage(shop3)}
        />
        <img
          src={shop4}
          alt='Gallery image 4'
          onClick={() => openImage(shop4)}
        />
         <img
          src={shop5}
          alt='Gallery image 4'
          onClick={() => openImage(shop5)}
        />
         <img
          src={shop6}
          alt='Gallery image 4'
          onClick={() => openImage(shop6)}
        />
         <img
          src={shop7}
          alt='Gallery image 4'
          onClick={() => openImage(shop7)}
        />
         <img
          src={shop3}
          alt='Gallery image 3'
          onClick={() => openImage(shop3)}
        />
      </div>
      <h4 style={{textAlign: 'center'}}>Coming Soon ...</h4>

      {selectedImage && (
        <div className="image_popup" onClick={closePopup}>
          <div className="popup_inner">
            <img src={selectedImage} alt="Selected" />
            <span className="close_button" onClick={closePopup}>&times;</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default shop
