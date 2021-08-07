import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
//   CarouselCaption
} from 'reactstrap';

const items = [
  {
    src : ["/assets/agra.jpg", "/assets/cairo.jpg", "/assets/bali.jpg", "/assets/cappadocia.jpg",],
    altText: 'Agra',
    caption: ["Agra", "Cairo", "Bali", "Cappadocia"]
  },
  {
    src: ["/assets/machu_picchu.jpg", "/assets/london.jpg", "/assets/moscow.jpg", "/assets/new_york.jpg",],
    altText: 'Bali',
    caption: ["Machu Picchu", "London", "Moscow", "New York"]
  },
  {
    src: ["/assets/paris.jpg", "/assets/sidney.jpg", "/assets/rome.jpg", "/assets/vatnajokull.jpg"],
    altText: 'Cairo',
    caption: ["Paris", "Sidney", "Rome", "Vatnajokull"]
  }
];

const Carousell = (props) => {
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
  

    const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <div className="photoContainer"
        // style= {{
        //     backgroundImage: `url("./assets/avion.jpg")`
        // }}
        >
            <div className="photos"> 
                {item.src.map((picture) => (
                    <div className="photo"
                        style={{
                        backgroundImage: `url("${picture}")`,
                        }}>
                    </div>
                ))}
                
            </div>
            <div className="cityNames">
                {item.caption.map((city) => (
                    <h3 className="city">{city}</h3>
                ))}
            </div>
        </div>
          
        {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption} /> */}
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}


export default Carousell;