import React from 'react'
import './header.css'
import Me from '../../assets/1.png'
import {BsGithub} from 'react-icons/bs'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Artem Tihmanovich</h1>
            <h5 className='text-light'>Fullstack dev</h5>

            <div className='cta'>
                <a href='https://github.com/Tihman' className='btn'>Watch my GitHub</a>
                <a href='#portfolio' className='btn btn-primary'>Watch my Portfolio</a>
            </div>

            <div className='me'>
                <img src={Me} alt='Me'></img>
            </div>
        </div>
    </header>
  )
}

export default Header