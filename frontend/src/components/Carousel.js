import React, { useState } from 'react';
import { Carousel,  CarouselItem,  CarouselControl,  CarouselIndicators} from 'reactstrap';

const items = [
  {
    src : [{
        picture:"/assets/agra.jpg",
        city: "Agra"
    },
    {
        picture:"/assets/cairo.jpg",
        city: "Cairo"
    },
    {
        picture:"/assets/bali.jpg",
        city: "Bali"
    },
    {
        picture:"/assets/cappadocia.jpg",
        city: "Cappadocia"
    },]     
  },
  {
    src: [{
        picture:"/assets/machu_picchu.jpg",
        city: "Machu Picchu"
    },
    {
        picture:"/assets/london.jpg",
        city: "London"
    },
    {
        picture:"/assets/moscow.jpg",
        city: "Moscow"
    },
    {
        picture:"/assets/new_york.jpg",
        city: "New York"
    },]
  },
  {
    src: [{
        picture:"/assets/paris.jpg",
        city: "Paris"
    },
    {
        picture:"/assets/sidney.jpg",
        city: "Sidney"
    },
    {
        picture:"/assets/rome.jpg",
        city: "Rome"
    },
    {
        picture:"/assets/vatnajokull.jpg",
        city: "Vatnajokull"
    },]
  }
];

const CarouselComp = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }
  

    const slides = items.map((item, index) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={index}
      >
        <div className="photoContainer">   
            
            <div className="photos"> 
                {item.src.map((image) => (
                    <div className="photo" key={image.city}
                        style={{
                        backgroundImage: `url("${image.picture}")`,
                        }}>
                        <h3>{image.city}</h3>
                    </div>
                ))} 
            </div>
        </div>
    
      </CarouselItem>
    );
  });

  return (
    <Carousel 
      className="carousel-fade"
      interval="3000"
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={slides} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" 
      directionText="" 
      onClickHandler={previous} />
      <CarouselControl direction="next" directionText="" onClickHandler={next} />
    </Carousel>
  );
}

export default CarouselComp;