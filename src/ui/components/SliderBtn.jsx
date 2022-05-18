import React from 'react';
import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome";



const SliderBtn = ( { nextSlide, prevSlide } ) => {
    return (
        <div className="slider__btn--container">
            <button className="slider__btn">
            <FontAwesomeIcon icon="arrow-left"  onClick = {prevSlide} />
            <FontAwesomeIcon icon="arrow-right" onClick = {nextSlide}/>
            </button>
        </div>
    );
}

export default SliderBtn;
