import React, { useState } from 'react';
import './plan.css';

// Import local images
import plan1 from '../../assets/plan-1.jpg';
import plan2 from '../../assets/plan-2.jpg';
import plan3 from '../../assets/plan-3.webp';
import plan4 from '../../assets/plan4.jpg';
import plan5 from '../../assets/plan-5.jpg';

function Plan() {
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
    <div className='plan'>
      <div className="plan_section">
        <h1>Our Plans</h1>
        <p>
          Shape and Configuration: The kitchen layout defines the overall structure, 
          which could be U-shaped, L-shaped, Galley, One-wall, or Island kitchen. This 
          depends on the available space and usage requirements.
        </p>
      </div>
      
      <div className='plan_grid'>
        {/* Use local images */}
        <img
          src={plan1}
          alt='Gallery image 1'
          onClick={() => openImage(plan1)}
        />
        <img
          src={plan2}
          alt='Gallery image 2'
          onClick={() => openImage(plan2)}
        />
        <img
          src={plan3}
          alt='Gallery image 3'
          onClick={() => openImage(plan3)}
        />
        <img
          src={plan4}
          alt='Gallery image 4'
          onClick={() => openImage(plan4)}
        />
         <img
          src={plan4}
          alt='Gallery image 4'
          onClick={() => openImage(plan5)}
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
  );
}

export default Plan;
