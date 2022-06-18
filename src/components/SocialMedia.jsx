import React from "react"
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'

const SocialMedia = () => {
    return (
        <div className="app__social">
            <div className="">
                <BsTwitter />
            </div>
            <div className="">
                <FaFacebook />
            </div>
            <div className="">
                <BsInstagram />
            </div>
        </div>
    )
}

export default SocialMedia