import { CarouselItem, CarouselControl,  CarouselIndicators} from 'reactstrap';
import React, { useState } from 'react';


const items = [1, 2, 3]

const Popular = (props) => {


    const Arrows = (props) => {
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
    return Arrows}



return (


        <div className="planeTitle">
            <Arrows/>
       
      <CarouselIndicators items={slides} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" 
      directionText="" 
      onClickHandler={previous} />
      <CarouselControl direction="next" directionText="" onClickHandler={next} />


            


        </div>
    )
}

export default Popular 

