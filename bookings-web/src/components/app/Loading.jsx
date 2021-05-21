import React from 'react'
import style from '../app/app.css'

export default function Loading() {
    return (
        <div className={style.loader}>
            <img src={'https://i.pinimg.com/originals/25/21/51/252151ff2896e5613cbbfc677c0b8058.gif'} />
        </div>
    )
}
