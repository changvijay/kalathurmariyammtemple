import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Custom Next Arrow Component
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-next-arrow`}
      style={{
        ...style,
        display: "block",
        right: "10px",
        zIndex: 2,
        background: "#000",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        lineHeight: "40px",
        textAlign: "center",
        color: "#fff",
      }}
      onClick={onClick}
    >
      ❯
    </div>
  );
}

// Custom Previous Arrow Component
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-prev-arrow`}
      style={{
        ...style,
        display: "block",
        left: "10px",
        zIndex: 2,
        background: "#000",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        lineHeight: "40px",
        textAlign: "center",
        color: "#fff",
      }}
      onClick={onClick}
    >
      ❮
    </div>
  );
}

function GoogleDriveGallery() {
  const images = [
    "https://lh3.googleusercontent.com/d/1GY5HZilXM192jG1FP0WL3ghv-EUhYfc3=w800",
    "https://lh3.googleusercontent.com/d/1WL-4eebFUL_2FnAYbN5X2o_fBoch2FHZ=w800",
    "https://lh3.googleusercontent.com/d/1a_n_fmIUy-XhcO0yd_nMj49KqZWBfUo_=w800"
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    adaptiveHeight: true,
    pauseOnHover: true,
    cssEase: "linear"
  };

  return (
    <div className="w-full mx-auto" style={{ width: "60%"}}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="focus:outline-none">
            <img
              src={img}
              onError={(e) => (e.target.src = "https://via.placeholder.com/800")}
              className="w-full h-full object-cover rounded-lg"
              alt="carousel"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default GoogleDriveGallery;
