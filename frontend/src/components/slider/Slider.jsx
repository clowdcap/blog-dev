import React, { useState } from 'react'

import './slider.scss'

// import { Motion, spring } from "react-motion"

import ImageSlide1 from './../../assets/pic-1.png'
import ImageSlide2 from './../../assets/pic-2.png'
import ImageSlide3 from './../../assets/pic-3.png'

import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'

export const Slider = () => {

    const slides = [ImageSlide1, ImageSlide2, ImageSlide3]
    const [currentImage, setCurrentImage] = useState(0);
    // const [nextCurrentImage, setNextCurrentImage] = useState(1);

    

    const handlePrevSlide = () => {
        // if (nextCurrentImage === 0) {
        //     setNextCurrentImage(2)
        // } else {
        //     setNextCurrentImage(currentImage - 1 )
        // }

        if (currentImage === 0) {
            setCurrentImage(2)
        } else {
            setCurrentImage(currentImage - 1)
        }
    }

    const handleNextSlide = () => {
        // if (nextCurrentImage === 2) {
        //     setNextCurrentImage(0)
        // } else {
        //     setNextCurrentImage(currentImage + 1 )
        // }

        if (currentImage === 2) {
            setCurrentImage(0)
        } else {
            setCurrentImage(currentImage + 1)
        }
    }

    // setInterval(() => {
    //     handleNextSlide()
    // }, 15000);
    
    return (
        <section className="slider">
            <div className="container__slider center">
                
                <div className="images__slider">
                    <img src={slides[currentImage]} alt="" />
                </div>

                {/* <Motion 
                    defaultStyle={{ opacity: 0 }} 
                    style={{ opacity: spring(1) }}>
                    {style => (
                        <img
                            src={slides[currentImage]}
                            style={{ opacity: style.opacity }}
                            alt="slider-image"
                        />
                    )}
                </Motion>
                <Motion 
                    defaultStyle={{ opacity: 0 }} 
                    style={{ opacity: spring(1) }}>
                    {style => (
                        <img
                            src={slides[nextCurrentImage]}
                            style={{ opacity: style.opacity }}
                            alt="slider-image"
                        />
                    )}
                </Motion> */}
                
                <div className="btns__slider">
                    
                    <div className="btn__slider">
                        <button onClick={handlePrevSlide}>
                            <AiOutlineLeft />
                        </button>
                    </div>

                    <div className="btn__slider">
                        <button onClick={handleNextSlide}>
                            <AiOutlineRight />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}
