import React, {useState} from 'react'

const Carousel = () => {
  const [index, setIndex] = useState(2);
  const totalImages = 4;

  return (
    <div className="carousel">
        <img className="carousel-image" src={`./img/BeachImage${index}.jpg`} alt="Beach Image" />
        <div className="carousel-btns-group">
            <button className="btn carouse-btn">&#60;</button>
            <button className="btn carousel-btn">&#62;</button>
        </div>
    </div>
  )
}

export default Carousel