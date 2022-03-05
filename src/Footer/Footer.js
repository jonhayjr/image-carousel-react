import React, {useContext} from 'react'
import TitleContext from '../TitleContext'

const Footer = () => {
  const title = useContext(TitleContext);
  return (
    <footer className="footer">
        <p className="footer-paragraph">&copy;2022 {title}</p>
    </footer>
  )
}

export default Footer