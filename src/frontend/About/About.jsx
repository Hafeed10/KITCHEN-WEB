import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import axios from 'axios'; // Import axios for API requests
import './about.css';
import Lock1 from '../../assets/billionphotos1082174min.png'; // Correct path and import

function About() {
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/'); // axios GET request to the API
      setImages(response.data); // Set the API response data
    } catch (err) {
      console.error('Error fetching data:', err.message);
      setError('Failed to fetch data. Please try again later.');
    }
  };

  useEffect(() => {
    fetchItems(); // Fetch the data when the component mounts
  }, []);

  return (
    <>
      <div className='about' id='max'>
        <div className="about_section">
          <h2>Chef's Recipes</h2>
          <h1>Professional Kitchen</h1>
          <div className='max_img'>
            <img src={Lock1} alt="Professional kitchen" className="about-image" />
          </div>
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
              {error ? (
                <p>{error}</p> // Display error message if data fetching fails
              ) : (
                images.slice(1, 5).map((imageData) => ( // Dynamically render up to 5 images
                  <picture key={imageData.id} className="article__picture">
                    <img
                      src={`http://localhost:8000${imageData.image_filde}`} 
                      alt={`Gallery image ${imageData.id}`} 
                    />
                  </picture>
                ))
              )}
            </article>
          </section>
          {/* // The main__gallery Section End */}
        </div>
      </div>
    </>
  );
}

export default About;
