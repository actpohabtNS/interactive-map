import React from 'react'
import { FiChevronLeft } from 'react-icons/fi'

const Header = ({ style, backText, onBackClick, children }) => {
  return (
    <div className="header" style={ style }>
      
      {
        backText
        ? <div className="h-back-text" onClick={ onBackClick }>
            <FiChevronLeft
              size={25}
            />

            { backText }
          </div>
        : null
      }

      { children }
    </div>
  )
}

export default Header;