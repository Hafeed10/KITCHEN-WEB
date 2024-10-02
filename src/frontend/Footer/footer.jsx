import React from 'react'
import './footer.css'

function footer() {
  return (
    <div>
    {/* // The Footer Section Start */}
    <footer>
        <div className="footer-section">
          <div className="imga">
            <img className="max" src="https://i.imgur.com/3zACXLF.png" alt="Logo" />
             <p>
              A kitchen is a room or part of a room where food is prepared, cooked, and washed. Kitchens can be found in
              homes, restaurants, hospitals, schools, and other commercial establishments. A modern kitchen typically
              has: A stove, A sink with hot and cold water, A refrigerator, Worktops, and Cabinets.
            </p>
          </div>
          <ul>
            <li><h4>Plan my kitchen</h4></li>
            <li><h4>About us</h4></li>
            <li><h4>Gallery</h4></li>
            <li><h4>MY ORDER</h4></li>
          </ul>
          <div>
            <h3>Contact Us</h3>
            <h4>Phone: +91 9999999999</h4>
            <h4>Email: hafeex@kitchen.com</h4>
            <h4>Address: 123 Main Street, Anytown, INDIA</h4>
          </div>
        </div>
      </footer>
      {/* // The Footer Section End */}
    </div>
  )
}

export default footer
