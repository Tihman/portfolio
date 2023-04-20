import React from 'react'
import './portfolio.css'
import Img1 from '../../assets/portfolio1.png'
import Img2 from '../../assets/portfolio2.png'
import Img3 from '../../assets/portfolio3.png'

const data = [
  {
    id: 1,
    image: Img1,
    title: 'first portfolio',
    github: 'https://github.com'
  },
  {
    id: 2,
    image: Img2,
    title: 'second portfolio',
    github: 'https://github.com'
  },
  {
    id: 3,
    image: Img3,
    title: 'third portfolio',
    github: 'https://github.com'
  },
  {
    id: 4,
    image: Img1,
    title: 'first portfolio',
    github: 'https://github.com'
  },
  {
    id: 5,
    image: Img2,
    title: 'second portfolio',
    github: 'https://github.com'
  },
  {
    id: 6,
    image: Img3,
    title: 'third portfolio',
    github: 'https://github.com'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className='container portfolio__container'>
          {
            data.map (({id, image, title, github}) => {
              return (
                <article key={id} className='portfolio__item'>
                  <div className='portfolio__item-image'>
                    <img src={image} alt='First portfolio'/>
                  </div>
                  <h3>{title}</h3>
                  <div className='portfolio__item-cta'>
                    <a href={github} className='btn' target='_blank'>Github</a>
                  </div>             
                </article>
              )
            })
          }         
        </div>
    </section>
  )
}

export default Portfolio