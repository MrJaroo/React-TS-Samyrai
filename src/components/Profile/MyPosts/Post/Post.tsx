import React from "react";
import style from './Post.module.css'

type PostPropsType = {
    message: string
    like:number
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={style.item}>
            <img src="https://avatars.mds.yandex.net/i?id=533a78de16cd989f38ef5f316740fa80-3380677-images-thumbs&n=13"
                 alt=""/>
            {props.message}
            <div>
                <span>Like <span>{props.like}</span></span>
            </div>
        </div>
    )
}