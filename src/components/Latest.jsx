import React, { useEffect, useState } from 'react';

const Latest = () => {
    const data = [
        {
            items: [
                {
                    src: './images/sec2-1.png',
                    text: 'GREEN VEGETABLES PACK',
                    price: '$12.99',
                },
                {
                    src: './images/sec2-2.png',
                    text: 'FRUIT CART PACKS',
                    price: '$12.99',
                },
                {
                    src: './images/sec2-3.png',
                    text: 'LEMONS & ORANGE PACKS',
                    price: '$12.99',
                },
            ],
        },
        {
            items: [
                {
                    src: './images/carrot.jpg',
                    text: 'FRESH CARROTS PACK',
                    price: '$20.99',
                },
                {
                    src: './images/capsicum.jpg',
                    text: 'GREEN & RED CAPSICUM',
                    price: '$15.99',
                },
                {
                    src: './images/orange.jpg',
                    text: 'LEMONS & ORANGE PACKS',
                    price: '$14.99',
                },
            ],
        },
        {
            items: [
                {
                    src: './images/green-apple.jpg',
                    text: 'GREEN APPLE PACK',
                    price: '$13.99',
                },
                {
                    src: './images/peach.jpg',
                    text: 'PEACH CART PACKS',
                    price: '$16.99',
                },
                {
                    src: './images/grape.jpg',
                    text: 'FRESH JUICY GRAPE PACKS',
                    price: '$12.99',
                },
            ],

        },
        {
            items: [
                {
                    src: './images/potato.jpg',
                    text: 'YELLOW POTATO PACK',
                    price: '$22.99',
                },
                {
                    src: './images/red-apple.jpg',
                    text: 'JUICY RED APPLE PACKS',
                    price: '$32.99',
                },
                {
                    src: './images/tomatoes.jpg',
                    text: 'RED FRESH TOMATO PACK',
                    price: '$24.99',
                },
            ],
        },
    ];

    const [activeSection, setActiveSection] = useState(0);

    const handleDotClick = (index) => {
        setActiveSection(index);
    };
    const interval = 2900; // 5 seconds

    useEffect(() => {
        const sliderInterval = setInterval(() => {
            // Increment the active section, and loop back to the first section if it reaches the end
            setActiveSection((prevActiveSection) =>
                (prevActiveSection + 1) % data.length
            );
        }, interval);

        return () => {
            clearInterval(sliderInterval); // Clear the interval when the component unmounts
        };
    }, [data.length]);

    return (
        <>
            <div className="section2">
                <div className="title">
                    <div className="sec2-text1-c">
                        <span className="sec2-text1">READY FOR</span>
                    </div>
                    <h1 className="sec2-text2">WHAT'S NEW?</h1>
                </div>
                <div className="section2-img-container">
                    {data.map((section, index) => (
                        <div
                            key={index}
                            className={`${index === activeSection ? 'section2-img-container' : 'hidden'}`}
                        >
                            {section.items.map((item, itemIndex) => (
                                <div key={itemIndex} className="images2">
                                    <img src={item.src} className={`${activeSection > 0 ? 'sec22-img' : 'sec2-img'}`} alt="" />
                                    <p>
                                        {item.text}
                                        <br />
                                        {item.price}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="dots">
                    {data.map((_, index) => (
                        <div
                            key={index}
                            className={`dot ${index === activeSection ? '' : 'non-active'}`}
                            onClick={() => handleDotClick(index)}
                        ></div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Latest;
