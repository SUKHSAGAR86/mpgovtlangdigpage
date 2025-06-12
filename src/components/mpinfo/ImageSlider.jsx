import React, { useEffect, useState } from "react";
import "../../App.css";


import photo1 from "../../img/photo1.jpg";
import photo2 from "../../img/photo2.jpg";
import photo3 from "../../img/photo3.jpg";
import photo4 from "../../img/photo4.jpg";

const images = [photo1, photo2, photo3, photo4];


const captions = [
  {
    title: "मुख्यमंत्री डॉ. मोहन यादव ने इंदौर के होल्कर साइंस कॉलेज में विद्यार्थियों से सं...",
    date: "5/20/2025 10:18:00 AM",
  },
  {
    title: "समारोह में अनेक गणमान्य लोगों की उपस्थिति रही...",
    date: "5/20/2025 10:20:00 AM",
  },
  {
    title: "मुख्यमंत्री ने डिजिटल सुविधा का शुभारंभ किया...",
    date: "5/20/2025 10:30:00 AM",
  },
  {
    title: "छात्रों के साथ संवाद और सवाल-जवाब का सत्र...",
    date: "5/20/2025 10:45:00 AM",
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval);
  }, []);

  const selectImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="container text-center">
      <div className="slider-container position-relative">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slider-image img-fluid"
        />

        {/* Overlay Text */}
        <div className="slider-overlay text-start text-white p-3">
          <span className="badge bg-danger mb-2">GALLERY</span>
          <h5 className="mb-1">{captions[currentIndex].title}</h5>
          <small>{captions[currentIndex].date}</small>
        </div>

        <button
          className="slider-btn left"
          style={{ fontSize: "15px", backgroundColor: "#f4431f" }}
          onClick={goToPrevious}
        >
          ❮
        </button>
        <button
          className="slider-btn right"
          style={{ fontSize: "15px", backgroundColor: "#f4431f" }}
          onClick={goToNext}
        >
          ❯
        </button>
      </div>

      {/*  Thumbnails */}
      <div className="row justify-content-center mt-3">
        {images.map((img, index) => (
          <div
            key={index}
            className="col-auto p-1"
            onClick={() => selectImage(index)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={`img-thumbnail ${
                index === currentIndex ? "border border-primary" : ""
              }`}
              style={{ width: "190px", height: "120px", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
