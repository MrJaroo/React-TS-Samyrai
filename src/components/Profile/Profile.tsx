import React from "react";
import style from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <img
                    src="https://avatars.mds.yandex.net/i?id=62bab513451faf3f91c7f46dc51a2b4f-2806623-images-thumbs&n=13"
                    alt=""/>
            </div>
            <div>
                ava + dicription
            </div>
           <MyPosts/>
        </div>
    )
}