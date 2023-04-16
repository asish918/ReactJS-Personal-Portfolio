import React, { useState } from "react";
import './Navbar.scss'
import { DarkModeButton } from "../index";
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

const Navbar = ({ setTheme, theme }) => {
    const [toggle, setToggle] = useState(false)

    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                &lt;<span className="logo-name">AsishMahapatra</span>/&gt;
            </div>
            <ul className="app__navbar-links">
                {['home', 'about', 'work', 'skills', 'contact'].map((item, index) => (
                    <li key={index} className="app__flex p-text" >
                        <div className=""></div>
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>

            <div className="app__navbar-menubuttons">

                <DarkModeButton setTheme={setTheme} theme={theme} />

                <div className="app__navbar-menu">
                    <HiMenuAlt4 onClick={() => setToggle(true)} />

                    {toggle && (
                        <motion.div
                            whileInView={{ x: [300, 0] }}
                            transition={{ duration: 0.85, ease: 'easeOut' }}
                        >
                            <HiX onClick={() => setToggle(false)} />
                            <ul>
                                {['home', 'about', 'work', 'skills', 'contact'].map((item, index) => (
                                    <li key={index}>
                                        <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar