"use client"

import React from 'react'
import Slider from "react-slick"
import Slide from './Slide';
export default function HeroSection() {

    const settings = {
        dots: true,
        infinite: true,
        slideToShow: 1,
        slideToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
    };

    const slideData = [
        {
            id: 0,
            img: "/b0.png",
            title: "Trending Item",
            mainTitle: "WOMEN'S LATEST FASHION SALE",
            price: "$20"
        },
        {
            id: 1,
            img: "/b0.png",
            title: "Trending Accessories",
            mainTitle: "WOMEN'S LATEST FASHION SALE",
            price: "$15"
        },
        {
            id: 2,
            img: "/b0.png",
            title: "Sale Offer",
            mainTitle: "MEN'S LATEST FASHION SALE",
            price: "$30"
        },
    ]



    return (
        <div>
            <div className="container pt-6 lg:pt-0">
                <Slider{...settings}>
                    {
                        slideData.map(
                            (item) => (
                                <Slide
                                    key={item.id}
                                    img={item.img}
                                    title={item.title}
                                    mainTitle={item.mainTitle}
                                    price={item.price}
                                />
                            )
                        )
                    }
                </Slider>
            </div>
        </div>
    )
}
