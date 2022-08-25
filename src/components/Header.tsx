import React from "react";
import style from  './Header.module.css'

export const Header = () =>{
    return (
        <header className={style.header}>
            <img
                src="https://avatars.mds.yandex.net/i?id=acd0007d112fd7ba71ca8dc993021c69-4580062-images-thumbs&n=13"
                alt="avanger"/>
        </header>
    )
}