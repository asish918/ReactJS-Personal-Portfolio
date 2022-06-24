import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import images from "../../constants/images";
import { AtroposComponent } from "../../components";

import './Testimonials.scss'

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const query = '*[_type == "testimonials"]'
        // const brandsQuery = '*[_type == "brands"]'

        client.fetch(query).then((data) => {
            setTestimonials(data);
        })

        // client.fetch(brandsQuery).then((data) => {
            // setBrands(data);
        // })
    }, [])

    const handleClick = (index) => {
        setCurrentIndex(index)
    }

    const test = testimonials[currentIndex]

    return (
        <>
        <h2 className="marvel-text">
            Flexing a few tricks feat. <br />
            <span>MARVEL</span>
        </h2>
            {testimonials.length && (
                <>
                    <div className="app__testimonial-item app__flex">
                        <img src={urlFor(test.imageurl)} alt="testimonial" />
                        <div className="app__testimonial-content">
                            <p className="p-text">{test.feedback}</p>
                            <div>
                                <h4 className="bold-text">{test.name}</h4>
                                <h5 className="p-text">{test.company}</h5>
                            </div>
                        </div>
                    </div>

                    <div className="app__testimonial-btns app__flex">
                        <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
                            <HiChevronLeft />
                        </div>
                        <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
                            <HiChevronRight />
                        </div>
                    </div>
                </>
            )}

            <div className="app__testimonials-brands">
                    {/* <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5, type: 'tween' }}
                    > */}
                        {/* <AtroposComponent /> */}
                    {/* </motion.div> */}
            </div>
        </>
    )
}

export default AppWrap(
    MotionWrap(Testimonials, 'app__testimonial'),
    'testimonials',
    'app__primarybg'
)