import './reviewcontainer.style.scss';
import { useState } from 'react';
import { Typography } from '@mui/material';

const ReviewComp = ({reviews}) => {
    
    const[currentIndex, setCurrentIndex] = useState(0)

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? reviews.length - 1 : currentIndex -1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === 0;
        const newIndex = isLastSlide ? reviews.length - 1 : currentIndex -1;
        setCurrentIndex(newIndex);
    };
 
    return(
        <div className="container">
            <div >
                <Typography className="title" variant="h2">What our clients say</Typography>
                <div className="arrowLeft" onClick={goToPrevious}>❰</div>
                <div className="arrowRight" onClick={goToNext}>❱</div>
                <Typography className="text" variant="h4">{reviews[currentIndex].text}</Typography>
                <br/>
                <Typography className="textAuthor" variant="h5">{reviews[currentIndex].author}</Typography>
            </div>
        </div>
    );
}

export default ReviewComp;