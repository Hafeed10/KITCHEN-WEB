import React, { useState } from 'react';

const WithPopupAnim = (WrappedComponent) => {
  return (props) => {
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
      <div>
        {/* Pass openImage, closePopup, and selectedImage as props */}
        <WrappedComponent
          {...props}
          selectedImage={selectedImage}
          openImage={openImage}
          closePopup={closePopup}
        />
        {/* Popup for displaying selected image */}
        {selectedImage && (
          <div className="popup" onClick={closePopup}>
            <div className="popup_inner">
              <span className="close" onClick={closePopup}>&times;</span>
              <img src={selectedImage} alt="Popup" className="popup_img" />
            </div>
          </div>
        )}
      </div>
    );
  };
};

export default WithPopupAnim;
