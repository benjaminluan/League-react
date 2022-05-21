import React from 'react';
import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome";



const SliderBtn = ( { nextSlide, prevSlide } ) => {
    return (
        <div className="slider__btn--container">
            
            <FontAwesomeIcon icon="arrow-left"  onClick = {prevSlide} />
            <FontAwesomeIcon icon="arrow-right" onClick = {nextSlide}/>
           
        </div>
    );
}

export default SliderBtn;
