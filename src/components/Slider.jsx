import React, { useState } from 'react';
import "../styles/slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// chrevron img
import leftChevron from "../assets/chevron-left.png"
import rightChevron from "../assets/chevron-right.png"

// slider img

import sliderImg1 from "../assets/asMorgane/20.jpg";
import sliderImg2 from "../assets/asMorgane/21.jpg";
import sliderImg3 from "../assets/asMorgane/23.jpg";

const imageData = [
  {
    label: "Image 1",
    alt: "image1",
    url:
      "https://i.ibb.co/YBnf6n1/22.png"
  },
  {
    label: "Image 2",
    alt: "image2",
    url:
      "https://i.ibb.co/Y3mFZwf/19-jpeg.jpg"
  },
  {
    label: "Image 3",
    alt: "image3",
    url: "https://i.ibb.co/7Yq9DgH/25.png"
  }
];

const renderSlides = imageData.map((image) => (
  <div key={image.alt}>
    <img src={image.url} alt={image.alt} />
    <p className="legend">{image.label}</p>
  </div>
));

export default function App() {
  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }
  return (
    <div className="App">
      <Carousel
        showArrows={true}
        // autoPlay={true}  
        infiniteLoop={true}
        onChange={handleChange}
        className="carousel-container"
      >
        {renderSlides}
      </Carousel>
    </div>
  );
}