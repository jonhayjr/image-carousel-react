import React, {useState} from 'react'

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const totalImages = 10;

  const getPrevious = () => {
    setIndex(prev => {
        if (prev === 0) {
            return totalImages - 1;
        } else {
            return prev - 1;
        }
    })
  }

  const getNext = () => {
    setIndex(prev => {
        if (prev === totalImages - 1) {
            return 0;
        } else {
            return prev + 1;
        }
    })
  }

  return (
    <div className="carousel">
        <img className="carousel-image" src={`./img/BeachImage${index}.jpg`} alt="Beach Image" />
        <div className="carousel-btns-group">
            <button className="btn carouse-btn" onClick={getPrevious}>&#60;</button>
            <button className="btn carousel-btn" onClick={getNext}>&#62;</button>
        </div>
    </div>
  )
}

export default Carousel