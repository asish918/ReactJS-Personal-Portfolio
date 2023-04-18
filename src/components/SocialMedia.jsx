import React from "react"
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si'

const SocialMedia = () => {
    return (
        <div className="app__social">
            <div className="">
                <a href="https://github.com/asish918" target={"_blank"} rel="noreferrer">
                    <BsGithub />
                </a>
            </div>
            <div className="">
                <a href="https://auth.geeksforgeeks.org/user/asishmahapatra918" target={"_blank"} rel="noreferrer">
                    <SiGeeksforgeeks />
                </a>
            </div>
            <div className="">
                <a href="https://leetcode.com/asishmahapatra918/" target={"_blank"} rel="noreferrer">
                    <SiLeetcode />
                </a>
            </div>
            <div className="">
                    <BsLinkedin />
            </div>
        </div>
    )
}

export default SocialMedia