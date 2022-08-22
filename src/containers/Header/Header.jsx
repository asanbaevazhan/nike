import '../Header/Header.css'
import Menu from '../../components/Menu/Menu.jsx'

import logo from '../../img/logo.png'
import cart from '../../img/cart.png'
import search from '../../img/search.png'
import heart from '../../img/heart.png'

function Header() {
    return (
        <header className='header'>
          <div className='logo'>
                <img src={logo} alt="" />
          </div>
  
             <Menu/>
  
              <div className='icons'>
                <img className='search' src={search} alt=""/>
                <img className='heart' src={heart} alt=""/>
                <img className='cart' src={cart} alt=""/>
              </div>
        </header>
    );
  }

  
  export default Header;