import React from "react"
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'

const SocialMedia = () => {
    return (
        <div className="app__social">
            <div className="">
                <BsGithub />
            </div>
            <div className="">
                <BsLinkedin />
            </div>
            <div className="">
                <BsInstagram />
            </div>
        </div>
    )
}

export default SocialMedia