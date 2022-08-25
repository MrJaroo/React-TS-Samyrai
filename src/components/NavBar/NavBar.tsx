import React from "react";
import style from './NavBar.module.css'

export const NavBar = () => {
    return (
        <nav className={style.nav}>
            <div>
                <a className={style.link} href="#"> Profile</a>
            </div>
            <div>
                <a className={`${style.link} ${style.active}`} href="#"> Message</a>
            </div>
            <div>
                <a className={style.link} href="#"> News</a>
            </div>
            <div>
                <a className={style.link} href="#"> Music</a>
            </div>
            <div>
                <a className={style.link} href="#"> Settings</a>
            </div>
        </nav>
    )
}