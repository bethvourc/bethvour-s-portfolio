import React, { useState, useEffect, useRef } from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/bastian.jpg";
import AVTR2 from "../../assets/marie.jpg";
import AVTR3 from "../../assets/ksenia.jpg";
import AVTR4 from "../../assets/iselin.jpg";
import AVTR5 from "../../assets/balraj.jpg";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Dean",
    review:
      "Bethvour comes up with ideas easily, and his ability to question the status quo is impressive. In our daily work, he drives our team not only with constant contribution but also with his visionary mind.",
  },
  {
    avatar: AVTR2,
    name: "Sarah",
    review:
      "We worked closely in a team over a period of four months, and I couldn't have asked for a better partner! Bethvour is extremely dedicated, and always askes the right questions in order to be on the right track.",
  },
  {
    avatar: AVTR3,
    name: "Elizabeth",
    review:
      "I had the pleasure of working with Bethvour on an extensive project and Bethvour is very tidy, structured and keen to find good solutions for problems. For me, he has been a good partner and I have benefited a lot from discussing with him.",
  },
  {
    avatar: AVTR4,
    name: "Emily",
    review:
      "I worked with Bethvour on a challenging trend analysis project. I would describe him as solution-oriented and adaptable. Last but not least, he is creative, good at design, and a great collaborator!",
  },
  {
    avatar: AVTR5,
    name: "Zaheed",
    review:
      "I had the pleasure of working with Bethvour on a very challenging project! He is good at finding simple and creative solutions to complex challenges. He is also very helpful, motivated and has great work capacity.",
  },
];

const Testimonials = () => {
  const [showMessage, setShowMessage] = useState(false);
  const testimonialRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setShowMessage(true);
          // Hide message after 3 seconds
          setTimeout(() => {
            setShowMessage(false);
          }, 3000);
        }
      },
      { threshold: 0.5 }
    );

    if (testimonialRef.current) {
      observer.observe(testimonialRef.current);
    }

    // Cleanup observer on unmount
    return () => {
      if (testimonialRef.current) {
        observer.unobserve(testimonialRef.current);
      }
    };
  }, []);

  return (
    <section id="testimonials" ref={testimonialRef}>
      <h5>Reviews</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => (
          <SwiperSlide key={index} className="testimonial">
            <div className="coworker-avatar">
              <img src={avatar} alt="Coworker" />
            </div>
            <h5 className="coworker__name">{name}</h5>
            <small className="coworker__review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Conditionally render the message */}
      {showMessage && <div className="fade-message">Swipe to view others</div>}
    </section>
  );
};

export default Testimonials;
