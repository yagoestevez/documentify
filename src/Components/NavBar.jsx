import React    from 'react';
import NavItem  from './NavItem';
import               './NavBar.css';

const NavBar = ( props ) => {

  const sections = props.sections.map( ( section, index ) => {
    return <NavItem key={ index } section={ section } toggleMenu={props.toggleMenu} />
  } );

  const themeButton = {
    name: props.lightTheme ? 'dark' : 'light',
    icon: props.lightTheme ? 'fas fa-moon' : 'fas fa-sun'
  }

  return (
    <nav id="navbar" className={ props.menuShow ? 'show' : '' }>
      <div id="nav-container">
        <header><h3>jump to section</h3></header>
        { sections }
        <br />
        <a
            href="#/"
            className="night-mode-toggler"
            onClick={ ( ) => props.toggleTheme( ) }
          >
          <i className={ themeButton.icon }></i> { themeButton.name } mode
        </a>
      </div>
    </nav>
  );

}

export default NavBar;