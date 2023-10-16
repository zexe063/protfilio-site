




import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./swiper.css";

const CardCarousel = () => {
  const cardsData = [
    { id: 1, title: "Card 1", description: "This is card number 1" },
    { id: 2, title: "Card 2", description: "This is card number 2" },
    { id: 3, title: "Card 3", description: "This is card number 3" },
    // ... add more card data if needed
  ];

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
    >
      {cardsData.map(card => (
        <SwiperSlide key={card.id}>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.description}</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CardCarousel;
