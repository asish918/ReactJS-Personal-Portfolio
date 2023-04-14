import React from "react"
import { FaCoffee, FaHeart } from 'react-icons/fa'
import { NavigationDots, SocialMedia } from '../components'

const AppWrap = (Component, idName, classNames) => function HOC() {
    return (
        <div id={idName} className={`app__container ${classNames}`}>
            <SocialMedia />
            <div className="app__wrapper app__flex">
                <Component />

                <div className="copyright">
                    <p className="p-text">Made with <FaHeart /> and <FaCoffee /> </p>
                    <p className="p-text"><span>Asish</span> 2023</p>
                </div>
            </div>
            <NavigationDots active={idName} />
        </div>
    )
}

export default AppWrap