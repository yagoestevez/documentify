import React from 'react';
import            './Section.css';

class Section extends React.Component {

  sectionRef = React.createRef( );

  render ( ) {
    return (
      <section className="main-section" id={`${this.props.name.split(' ').join('_')}`} ref={this.sectionRef} >
        <header>
          <a href={`#${this.props.name.split(' ').join('_')}`} title={`Link to this section: ${this.props.name}`}>
            <h1>{this.props.name}</h1>
          </a>
        </header>
        {this.props.children}
      </section>
    );
  }

}

export default Section;