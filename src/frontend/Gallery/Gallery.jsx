import './gallery.css';
import WithPopupAnim from '../HOT/WithPopupAnim';

function Gallery({ openImage }) {
  return (
    <div className="gallery">
      <div className="gallery_section">
        <h2>Our Gallery</h2>
        <div className="gallery_grid">
          <img
            src="https://i.imgur.com/z6SQtCI.png"
            alt="Gallery image 1"
            onClick={() => openImage('https://i.imgur.com/z6SQtCI.png')}
          />
          <img
            src="https://i.imgur.com/NOlYes6.png"
            alt="Gallery image 2"
            onClick={() => openImage('https://i.imgur.com/NOlYes6.png')}
          />
          <img
            src="https://i.imgur.com/wfR2hs8.png"
            alt="Gallery image 3"
            onClick={() => openImage('https://i.imgur.com/wfR2hs8.png')}
          />
          <img
            src="https://i.imgur.com/yP79MAU.png"
            alt="Gallery image 4"
            onClick={() => openImage('https://i.imgur.com/yP79MAU.png')}
          />
          <img
            src="https://i.imgur.com/wfR2hs8.png"
            alt="Gallery image 3"
            onClick={() => openImage('https://i.imgur.com/wfR2hs8.png')}
          />
        </div>
        <h4>Coming Soon ...</h4>
      </div>
    </div>
  );
}

export default Gallery;
export const GalleryWithPopup = WithPopupAnim(Gallery);
