import React from 'react'
import "./Gallery.css"
import img1 from "../../assets/gallery-1.jpeg";
import img2 from "../../assets/gallery-2.jpeg";
import img3 from "../../assets/gallery-3.jpeg";
import img4 from "../../assets/gallery-4.jpeg";
import img5 from "../../assets/gallery-5.jpeg";
import img6 from "../../assets/gallery-6.jpeg";
const Gallary = () => {
  return (
    <section id="gallery">

      <div className="text">
        <h2>Our Work</h2>
        <p>Take a look at some of our stunning transformations and see the quality of our work.</p>
      </div>

      <div class="gallery-container">

        <div class="gallery-item">
          <img src={img1} alt="" />
        </div>

        <div class="gallery-item">
          <img src={img2} alt="" />
        </div>

        <div class="gallery-item">
          <img src={img3} alt="" />
        </div>

        <div class="gallery-item">
          <img src={img4} alt="" />
        </div>

        <div class="gallery-item">
          <img src={img5} alt="" />
        </div>

        <div class="gallery-item">
          <img src={img6} alt="" />

        </div>


      </div>

    </section>

  )
}

export default Gallary
