import React from 'react'
import './header.css'
import logo from '../../assets/logos/logo.svg'

function Header() {
    const handlerIconOnclick = () => {
        document.querySelector('.header__menu').classList.toggle('active')
        document.querySelector('.header__icon').classList.toggle('active')
        document.querySelector('body').classList.toggle('lock')
    }
    return (
        <header className='header'>
            <div className='header__row'>
                <nav className='header__menu menu'>
                    <div className='menu__body'>
                        <ul className='menu__list'>
                            <li>
                                <a href='' className='menu__link'>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href='' className='menu__link'>
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href='' className='menu__link'>
                                    Our projects
                                </a>
                            </li>
                            <li>
                                <a href='' className='menu__link'>
                                    Our products
                                </a>
                            </li>
                            <li>
                                <a href='' className='menu__link'>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className='header__logo ibg'>
                    <a href='' className='logo_link'>
                        <img src={logo} alt='' />
                    </a>
                </div>
                <div className='header__icon-wrapper'>
                    <div className='header__icon' onClick={handlerIconOnclick}>
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
