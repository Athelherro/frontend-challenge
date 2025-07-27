import { FaCaretDown, FaShoppingCart, FaUser, FaBars } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-section">
          <span className="header__logo">CHICKS GOLD</span>
        </div>
        <input type="checkbox" id="nav-toggle" className="header__nav-toggle" />
        <label htmlFor="nav-toggle" className="header__nav-toggle-label">
          <FaBars size={24} />
        </label>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li>CURRENCY <span className="header__nav-caret"><FaCaretDown /></span></li>
            <li>ITEMS <span className="header__nav-caret"><FaCaretDown /></span></li>
            <li>ACCOUNTS <span className="header__nav-caret"><FaCaretDown /></span></li>
            <li>SERVICES <span className="header__nav-caret"><FaCaretDown /></span></li>
            <li>SWAP <span className="header__nav-caret"><FaCaretDown /></span></li>
            <li>SELL <span className="header__nav-caret"><FaCaretDown /></span></li>
          </ul>
        </nav>
        <div className="header__actions">
          <div className="header__currency">USD <span className="header__nav-caret"><FaCaretDown /></span></div>
          <div className="header__cart">
            <FaShoppingCart style={{ marginRight: '0.3em' }} /> CART (5)
          </div>
          <button className="header__signin">SIGN IN <FaUser style={{ marginLeft: '0.5em' }} /></button>
        </div>
      </div>
    </header>
  )
}

export default Header