import React, { Component } from 'react'
import PropTyres from "prop-types"
import avatarImage from "../../assets/avatar-image-2.png"
import "../../styles/avatar.css"

const Avatar = ({page}) => {
    const avatarClass = `avatar ${page}`;
    const spanClass = `shadow-overlay-${page}`;

    return (
        <>
        <span className={spanClass}></span>
        <img src={avatarImage} alt="avatar" className={avatarClass} />
        </>
    )
}

Avatar.PropTyres = {
    page: PropTyres.string.isRequired,
}

export default Avatar