import React, {useContext} from 'react'
import TitleContext from '../TitleContext';

const Header = () => {
 const title = useContext(TitleContext);
  return (
    <header className="header">
        <h1 className="header__heading">{title}</h1>
    </header>
  )
}

export default Header