import React from 'react';
import            './Header.css';

class Header extends React.Component {

  render ( ) {
    return (
      <header id="header">
        <a  title="Show Menu"
            href="#/"
            id="mob-menu-btn"
            onClick={()=>this.props.toggleMenu()}
          ><i className="fab fa-elementor"></i>
        </a>
        <span><h1>{this.props.headerName}</h1></span>
        <a  title="Link to GitHub repo"
            href={this.props.link}
            target="_blank"
            rel="noopener noreferrer"
          > <i className="fab fa-github"></i>
        </a>
      </header>
    );
  }

}

export default Header;