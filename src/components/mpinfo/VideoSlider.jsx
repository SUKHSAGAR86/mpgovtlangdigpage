
import React, { useEffect, useState } from "react";
import "../../App.css";

const videos = [
  "https://www.youtube.com/embed/Zkx0ogMzyEM?si",
  "https://www.youtube.com/embed/wKQ3_u6gqNA?si",
  "https://www.youtube.com/embed/iArXLO_XTvo?si",
  "https://www.youtube.com/embed/P6kHBzkWhoo?si",
];


const captions = [
  {
    title: "19 May 2025 Madhya Pradesh News: मध्यप्रदेश समाचार | Bhopal Samachar | Clean News MP | भोपाल समाचार",
    date: "5/20/2025 10:18:00 AM",
    thumbnailText: "19 May 2025 Madhya Pradesh News: मध्यप्रदेश समाचार | Bhopal Samachar | Clean News MP | भोपाल समाचार",
  },
  {
    title: "Clean News MP मध्यप्रदेश के सभी जिलों की बड़ी खबरें | Madhya Pradesh News। Bhopal Samachar Mohan Yadav ",
    date: "5/20/2025 10:20:00 AM",
    thumbnailText: "Clean News MP मध्यप्रदेश के सभी जिलों की बड़ी खबरें | Madhya Pradesh News। Bhopal Samachar Mohan Yadav ",
  },
  {
    title: "मध्यप्रदेश और छत्तीसगढ़ की तमाम बड़ी खबरों के लिए जुड़ें रहें बंसल न्यूज़ वेबसाइट के साथ..",
    date: "5/20/2025 10:30:00 AM",
    thumbnailText: "मध्यप्रदेश और छत्तीसगढ़ की तमाम बड़ी खबरों के लिए जुड़ें रहें बंसल न्यूज़ वेबसाइट के साथ..",
  },
  {
    title: "IBC24, MP News , मध्यप्रदेश की आज दिनभर की बड़ी खबरें, Madhya Pradesh @24 Minut.",
    date: "5/20/2025 10:45:00 AM",
    thumbnailText: "IBC24, MP News , मध्यप्रदेश की आज दिनभर की बड़ी खबरें, Madhya Pradesh @24 Minut",
  },
];

const VideoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 8000);
    return () => clearInterval(interval);
  }, []);

  const selectVideo = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="container">
      <div className="row mt-5">
        {/* Main Video Section */}
        <div className="col-8">
          <div className="slider-container position-relative">
            <div className="ratio ratio-16x9">
              <iframe
                src={videos[currentIndex]}
                title={`YouTube video ${currentIndex}`}
                allowFullScreen
              ></iframe>
            </div>

            {/* Overlay Text */}
            <div className="slider-overlay text-start text-white p-3">
              <h5 className="mb-1">{captions[currentIndex].title}</h5>
              <small>{captions[currentIndex].date}</small>
            </div>

            {/* Navigation Buttons */}
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
        </div>

        {/* Thumbnails Section */}
         <div className="col-4 mt-3" style={{backgroundColor:"black", padding:"5px"}}>
        {videos.map((video, index) => {
  const videoId = new URL(video).pathname.split("/").pop();
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;

  return (
    <div 
      key={index}
      className="d-flex align-items-center p-3"
      style={{ cursor: "pointer" }}
      onClick={() => selectVideo(index)}
    >
      <img
        src={thumbnailUrl}
        alt={`Thumbnail ${index + 1}`}
        className={`img-thumbnail me-2 ${index === currentIndex ? "border border-primary" : ""}`}
        style={{ width: "120px", height: "80px", objectFit: "cover" }}
      />
      <div className="text-start  text-white p-2 rounded w-100">
        <small className="fw-bold">
          {captions[index].thumbnailText}
        </small>
      </div>
    </div>
  );
})}

        </div>
        
      </div>      

    </div>
  );
};

export default VideoSlider;
