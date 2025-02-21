import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./HeroCarousel.css"; // Custom Hero section styles
import "./SwiperStyles.css"; // Swiper-specific styles

const slides = [
  {
    image:
      "https://i.pinimg.com/736x/9b/de/ff/9bdeff684a804fe96c95c429fff016b1.jpg",
    title: "Solar Panel Installation: Reduce Your Electricity Bills",
    description:
      "Tap into solar energy and slash your electricity bills with VIBRA's Solar PV Installation. Our expert team, advanced tech, and green ethos ensure a seamless, cost-effective switch to solar power.",
    buttons: ["Get Free Quotes", "Learn More", "Contact Us"],
  },
  {
    image:
      "https://i.pinimg.com/474x/48/2c/55/482c55b2c4825fa458bf1912de92af0c.jpg",
    title: "Wind Energy Solutions for a Sustainable Future",
    description:
      "Harness the power of wind to generate clean energy. Our innovative wind turbines provide efficient and sustainable solutions for homes and businesses.",
    buttons: ["Discover More", "Installation Guide", "Request Consultation"],
  },
  {
    image:
      "https://i.pinimg.com/736x/6a/bc/04/6abc04764a6c365a51a2bc53d36bef3a.jpg",
    title: "Renewable Energy for a Cleaner Tomorrow",
    description:
      "Join the movement towards sustainable energy solutions with advanced solar and wind power technologies for your home or business.",
    buttons: ["Explore Now", "Green Energy Plans", "Talk to an Expert"],
  },
];

const HeroCarousel = () => {
  return (
    <div className="hero-carousel">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        speed={1000} // Adjust the transition speed (1000ms = 1s)
        className="swiper-container"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="carousel-slide">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="slide-image"
              />

              {/* Overlay with Text */}
              <div className="carousel-overlay">
                <div className="carousel-content">
                  <h1>{slide.title}</h1>
                  <p>{slide.description}</p>

                  {/* Buttons */}
                  <div className="carousel-buttons">
                    {slide.buttons.map((btn, i) => (
                      <button key={i} className="carousel-btn">
                        {btn}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
