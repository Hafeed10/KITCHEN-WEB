import React, { useState } from 'react';
import './gallery.css';

function Gallery() {
  // State to store the clicked image and whether the popup is visible
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
    <div className='gallery'>
      <div className="gallery_section">
        <h2>Our Gallery</h2>
        <div className='gallery_grid'>
          <img
            src='https://i.imgur.com/z6SQtCI.png'
            alt='Gallery image 1'
            onClick={() => openImage('https://i.imgur.com/z6SQtCI.png')}
          />
          <img
            src='https://i.imgur.com/NOlYes6.png'
            alt='Gallery image 2'
            onClick={() => openImage('https://i.imgur.com/NOlYes6.png')}
          />
          <img
            src='https://i.imgur.com/wfR2hs8.png'
            alt='Gallery image 3'
            onClick={() => openImage('https://i.imgur.com/wfR2hs8.png')}
          />
          <img
            src='https://i.imgur.com/yP79MAU.png'
            alt='Gallery image 4'
            onClick={() => openImage('https://i.imgur.com/yP79MAU.png')}
          />
          <img
            src='https://i.imgur.com/yP79MAU.png'
            alt='Gallery image 4'
            onClick={() => openImage('https://i.imgur.com/yP79MAU.png')}
          />
        </div>
        <h4>Coming Soon ...</h4>
      </div>

      {/* Popup for displaying selected image */}
      {selectedImage && (
        <div className="popup" onClick={closePopup}>
          <span className="close" onClick={closePopup}>&times;</span>
          <img src={selectedImage} alt="Popup" className="popup_img" />
        </div>
      )}
    </div>
  );
}

export default Gallery;
