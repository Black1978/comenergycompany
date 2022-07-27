import React from 'react'
import './mainscreen.css'
import mainimg from '../../assets/main.webp'
import mainimgmask from '../../assets/hero-home-m.svg'

function Mainscreen() {
    return (
        <div className='main-screen'>
            <div className='main-screen__bg ibg'>
                <img src={mainimg} alt='comenergycompany.com' />
            </div>
            <div className='main-screen__svg ibg'>
                <img src={mainimgmask} alt='comenergycompany.com' />
            </div>
            <div className='main-screen__content'>
                <h1>
                    All types of electrical installations works
                    <br />
                    quickly and efficiently
                </h1>
                <div className='main-screen__actions actions'>
                    <a href='#' className='actions__link-one'>
                        Last projects
                    </a>
                    <a href='#' className='actions__link-two'>
                        Best selling goods
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Mainscreen
