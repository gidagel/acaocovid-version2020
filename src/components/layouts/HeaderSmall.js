import React, {useState} from 'react'
import HeaderLinks from './HeaderLinks'
import mainLogo from '../../images/main_logo.jpg'

const HeaderSmall = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleToggle = () => {
      setToggleMenu(!toggleMenu)
  }

  return (
      <nav className="header_small">
          <div className="header_mobile">
            <div className="mobilelogo">
                <a href="/">
                    <img src={mainLogo} />
                </a>
            </div>
            <button 
                className="header_small_button" 
                onClick={handleToggle}
            >
                Menu
            </button>
          </div>
          {toggleMenu 
              ? <HeaderLinks handleToggle={handleToggle}/>
                  : ""}
      </nav>
  )
}
export default HeaderSmall