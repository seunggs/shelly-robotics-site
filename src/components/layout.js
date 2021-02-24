import React from 'react'
import { Link } from 'gatsby'
import './layout.css'
import logo from "../images/logo/logo_shelly_white.svg"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginLeft: `2rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({
  fullscreen = false,
  header = true,
  footer = true,
  children,
}) {
  return (
    <div>
      <div className={`${fullscreen ? '' : 'container px-4'} text-lg subpixel-antialiased`}>
        {header && <header className="flex flex-row items-center my-6">
          <Link to="/" className="flex-none">
            <img src={logo} alt="Logo" style={{ width: '252px' }} />
          </Link>

          <div className="flex-grow">&nbsp;</div>

          <ul className="flex-none" style={{ listStyle: `none`, fontSize: '15px' }}>
          </ul>
        </header>}

        <div className={`${fullscreen ? '' : 'lg:max-w-7xl mx-auto'}`}>{children}</div>

      </div>
      
      {footer && <footer className="bg-indigo-900 bg-opacity-5 text-black text-opacity-50 flex flex-row justify-center p-10 text-sm mt-24">
        <div>© Shelly Robotics</div>
      </footer>}
    </div>
  )
}