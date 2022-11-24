import { useState } from "react";
import './imageslider.style.scss';

const ImageSlider = ({slides}) => {
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    
    return(
        <div className="slider">
            <div className="arrowLeft" onClick={goToPrevious}>❰</div>
            <div className="arrowRight" onClick={goToNext}>❱</div>
            <div
                className="slides"
                style={{backgroundImage: `url(${slides[currentIndex].url})`}}>{slides[currentIndex].text}</div>
        </div>
    );

};

export default ImageSlider;