import React from 'react'
import { FiChevronLeft } from 'react-icons/fi'

const Header = ({ style, backComponent, backChevron, children }) => {
  return (
    <div className="header" style={ style }>
      
      {
        backComponent
        &&
        <div className="h-back-text">
            
          { backChevron
            &&
            <FiChevronLeft
              size={25}
            />
          }

            { backComponent }
          </div>
      }

      { children }
    </div>
  )
}

export default Header;