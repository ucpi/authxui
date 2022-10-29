import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <p>Stay Connected</p>
        <div className="links">
        <a href="https://twitter.com/UCPI_tech" target="_blank">
          <i class="fa-brands fa-twitter icon"></i>
        </a>
        <a href="https://discord.gg/v6ruvP3v7w" target="_blank">
          <i class="fa-brands fa-discord icon"></i>
        </a>
      </div>
    </div>
  )
}

export default Footer