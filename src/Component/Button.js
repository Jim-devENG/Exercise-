import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({btn_style, btn_icon, link, onclick}) {
    return (
        
       <div className="col-lg-1"> <Link to={link}><button className={btn_style}><i onClick={onclick} className={btn_icon} /></button></Link></div>

    )
}
