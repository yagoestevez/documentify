import React from 'react';

const NavItem = ( props ) => {

  const handleClick = ( e ) => {
    e.preventDefault( );
    const element = props.section.ref.current.sectionRef.current;
    element.scrollIntoView( { block: 'start', behavior: 'smooth' } );
  }
  
  return (
    <a  title={ `Go to ${ props.section.name }` }
        href={ `#${props.section.name.split(' ').join('_')}` }
        id={ `${ props.section.name.toLowerCase( ).split(' ').join('') }-btn` }
        className="nav-link"
        onClick={ ( e ) => handleClick( e ) }
      > { props.section.name } <i className="fas fa-angle-double-right"></i>
    </a>
  );

}

export default NavItem;