import React from "react";
import style from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button className={style.button}>Post</button>
            </div>
            <div>
                <Post message={'i love programming'} like={10}/>
                <Post message={'What'} like={40}/>
            </div>
        </div>
    )
 }