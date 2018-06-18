import React, { Component } from 'react';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Section from './Components/Section';
import DemoImg from './Assets/DemoAnimation.gif';
import Footer from './Components/Footer';
import './App.css';
import './Lib/Prism.js';

class App extends Component {

  state = {
    menuShow    : false,
    lightTheme  : true
  }

  headerName    = 'documentify'
  appName       = 'React Countdown Component';
  appVersion    = '0.1.2';
  repo          = 'https://github.com/yagoestevez/react-countdown-component/';
  sections      = [
    { name: 'Description'     , ref: React.createRef() },
    { name: 'Demo'            , ref: React.createRef() },
    { name: 'Requirements'    , ref: React.createRef() },
    { name: 'Installation'    , ref: React.createRef() },
    { name: 'Usage'           , ref: React.createRef() },
    { name: 'Props'           , ref: React.createRef() },
    { name: 'Render Props'    , ref: React.createRef() },
    { name: 'License'         , ref: React.createRef() },
    { name: 'Author'          , ref: React.createRef() }
  ];
  themes = [
    [ '--bg-color'            , '#2b2d42', '#fcfcfc' ],
    [ '--bg-secondary-color'  , '#333555', '#e5e5e5' ],
    [ '--fonts-color'         , '#edf2f4', '#555555' ],
    [ '--editor-color'        , '#343752', '#4a4a4a' ],
    [ '--key-color'           , '#ffcc00', '#cc2a36' ]
  ];

  toggleMenu = ( ) => {
    this.setState( state => {
        return { menuShow: !state.menuShow } 
    } );
  }

  toggleTheme = ( ) => {
    this.themes.map( color => {
      document.body.style.setProperty( color[0], this.state.lightTheme ? color[1] : color[2] );
      return true;
    } );
    this.setState( state => {
      return {
        lightTheme: !state.lightTheme
      }
    } );
  }

  componentDidMount ( ) {
    document.body.addEventListener( 'click', ( ) => {
      return this.state.menuShow ? this.toggleMenu() : null;
    } );
  }

  render() {
    return (
      <React.Fragment>
        <div id="top" ref={this.topRef=React.createRef( )}></div>
        <NavBar
          sections={ this.sections }
          menuShow={ this.state.menuShow }
          toggleTheme={ this.toggleTheme }
          lightTheme={ this.state.lightTheme }
        />
        <div id="main-content" >
          <Header
            headerName={ this.headerName }
            link={ this.repo }
            toggleMenu={ this.toggleMenu }
          />
          <main id="main-doc">

            <h1>{ this.appName }  <small>v{ this.appVersion }</small></h1>
            
            <Section name={ this.sections[0].name } ref={ this.sections[0].ref } >
              <p>React Countdown Component is a tiny, easy and customizable component providing you with 
                an updated countdown. You give the component, via props, the hours, minutes, seconds 
                and/or milliseconds that you want the coundown starting from, and the component will 
                return, through its <em>onUpdate()</em> event, the current countdown in hours, minutes, 
                seconds, milliseconds and, for it may be the case that you want to convert the value to 
                any other unit of your choice, the component will also return the total amount of 
                milliseconds. You may use any or all the provided data values given back to you, it's up 
                to you.</p>
              <p>The updated counter may be displayed in your apps within any tags (<em>h1</em>, 
                <em>p</em>, <em>progress</em>, etc), any styles (your tag, your style!) or any other 
                customization you might need. The buttons' functionalities can also be implemented in 
                any other clickable element; you just have to deal with the onClick listener.</p>
            </Section>

            <hr />

            <Section name={ this.sections[1].name } ref={ this.sections[1].ref } >
              <p>
                If you want to see a full example using the React Countdown Component, you can check the 
                {' '}<a  title="GitHub repository"
                    href={ this.link }
                    target="_blank"
                  >GitHub repo
                </a> and, under the <em>demo/</em> directory, you will find the code for the example shown 
                below.
              </p>
              <figure alt="Demo Screencast" title="Demo Screencast" >
                <img src={ DemoImg } alt="Demo Screencast" />
                <figcaption>
                  You can download the code via {' '}
                  <a  title="GitHub repository"
                      href={ this.link }
                      target="_blank"
                    >GitHub
                  </a>.
                </figcaption>
              </figure>
            </Section>

            <hr />

            <Section name={ this.sections[2].name } ref={ this.sections[2].ref } >
              <p>In order to integrate this component into your current React project, you should make
                sure your development enviroment meets the following criteria:</p>
              <ul>
                <li>Node >= 6.x</li>
                <li>NPM >= 6.x</li>
                <li>React >= 16</li>
                <li>&amp;</li>
                <li>React DOM >= 16</li>
              </ul>
            </Section>

            <hr />

            <Section name={ this.sections[3].name } ref={ this.sections[3].ref } >
              <p>To install this component on your project, you just need to run the following command 
              in your terminal:</p>
              <div className="code-box">
                <pre className=" language-markup"><code>npm i react-countdown-component</code></pre>
              </div>
              <p>Of, if you're using yarn:</p>
              <div className="code-box">
                <pre className=" language-markup"><code>yarn add react-countdown-component</code></pre>
              </div>
            </Section>

            <hr />

            <Section name={ this.sections[4].name } ref={ this.sections[4].ref } >
              <p>You can use this counter in various ways. Check the demo directory in the repo 
              for an in-depth example. This is one of the simplest implementation:</p>
              <p>First, you need to import the actual component and its context:</p>
              <div className="code-box">
                <pre className=" language-jsx"><code>
                { `import CountDown, {CountdownContext} from 'react-countdown-component';` }
                </code></pre>
              </div>
              <p>Then, you need to declare the state for the countdown. For example:</p>
              <div className="code-box">
                <pre className="language-jsx"><code className="language-jsx">
                {
                  'state = {\n' +
                  '  counter: {\n' +
                  '    hours, minutes, seconds\n' +
                  '  }\n' +
                  '}'
                }
                </code></pre>
              </div>
              <p>Finally, in your render method:</p>
              <div className="code-box">
                <pre className=" language-jsx"><code className=" language-jsx">{
                  'render() {\n' +
                  '  const { hours, minutes, seconds } = this.state.counter;\n' +
                  '  return (\n' +
                  '    <CountDown\n' +
                  '      // Your state to hold the returned data.\n' +
                  '      from     = { this.state.counter }\n' +
                  '      // Triggered on each update from the countdown.\n' +
                  '      onUpdate = { value => this.onUpdate( value ) }\n' +
                  '      >\n' +
                  '      <CountdownContext.Consumer>\n' +
                  '        { ( counter ) => (\n' +
                  '          <React.Fragment>\n' +
                  '            // Use the countdown however you want, like this:\n' +
                  '            <h2>{ hours }:{ minutes }:{ seconds }</h2>\n' +
                  '            // You may use this toggler button to play/pause the counter and\n' +
                  '            // also standalone controls to play, pause and/or reset.\n' +
                  '            <button onClick = { counter.playPause } >Play/Pause Countdown</button>\n' +
                  '          </React.Fragment>\n' +
                  '        ) }\n' +
                  '      </CountdownContext.Consumer>\n' +
                  '    </CountDown>\n' +
                  '  )\n' +
                  '}'
                }
                </code></pre>
              </div>
            </Section>

            <hr />

            <Section name={ this.sections[5].name } ref={ this.sections[5].ref } >
              <p>These are the properties you may pass to the CountDown component:</p>
              <div className="table">
                <table>
                  <thead>
                    <tr>
                      <th>property</th>
                      <th>propType</th>
                      <th>required</th>
                      <th>default</th>
                      <th>description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>from</td>
                      <td>object</td>
                      <td>yes</td>
                      <td>null</td>
                      <td>Requires an object (see example).</td>
                    </tr>
                    <tr>
                      <td>updateEvery</td>
                      <td>number</td>
                      <td>no</td>
                      <td>1000ms</td>
                      <td>Milliseconds between updates.</td>
                    </tr>
                    <tr>
                      <td>leftPadding</td>
                      <td>string</td>
                      <td>no</td>
                      <td>'0'</td>
                      <td>Number of zeroes on the left.</td>
                    </tr>
                    <tr>
                      <td>onStart</td>
                      <td>function</td>
                      <td>no</td>
                      <td>null</td>
                      <td>Callback on start.</td>
                    </tr>
                    <tr>
                      <td>onPause</td>
                      <td>function</td>
                      <td>no</td>
                      <td>null</td>
                      <td>Callback on pause.</td>
                    </tr>
                    <tr>
                      <td>onReset</td>
                      <td>function</td>
                      <td>no</td>
                      <td>null</td>
                      <td>Callback on reset.</td>
                    </tr>
                    <tr>
                      <td>onUpdate</td>
                      <td>function</td>
                      <td>yes</td>
                      <td>null</td>
                      <td>Callback on update.</td>
                    </tr>
                    <tr>
                      <td>onFinish</td>
                      <td>function</td>
                      <td>no</td>
                      <td>null</td>
                      <td>Callback on finish.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Section>

            <hr />

            <Section name={ this.sections[6].name } ref={ this.sections[6].ref } >
              <p>These are the functions you can use to manipulate the generated counter (see example):</p>
              <div className="table">
                <table>
                  <thead>
                    <tr>
                      <th>property</th>
                      <th>propType</th>
                      <th>required</th>
                      <th>default</th>
                      <th>description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>start</td>
                      <td>function</td>
                      <td>yes*</td>
                      <td>null</td>
                      <td>Starts the countdown.</td>
                    </tr>
                    <tr>
                      <td>pause</td>
                      <td>function</td>
                      <td>no</td>
                      <td>null</td>
                      <td>Pauses the countdown.</td>
                    </tr>
                    <tr>
                      <td>reset</td>
                      <td>function</td>
                      <td>no</td>
                      <td>null</td>
                      <td>Stops the counter and resets it.</td>
                    </tr>
                    <tr>
                      <td>playPause</td>
                      <td>function</td>
                      <td>yes*</td>
                      <td>null</td>
                      <td>Toggles between play and pause.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Section>

            <hr />

            <Section name={ this.sections[7].name } ref={ this.sections[7].ref } >
              <p>MIT License</p>
              <p>Copyright &copy; 2018 Yago Estévez</p>
              <p>
                Permission is hereby granted, free of charge, to any person obtaining a copy of this 
                software and associated documentation files (the "Software"), to dealin the Software 
                without restriction, including without limitation the rights to use, copy, modify, 
                merge, publish, distribute, sublicense, and/or sellcopies of the Software, and to 
                permit persons to whom the Software is furnished to do so, subject to the following 
                conditions:
              </p>
              <p>
                <u>The above copyright notice and this permission notice shall be included in all 
                copies or substantial portions of the Software</u>.
              </p>
              <p>
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
                INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
                PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE 
                FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR 
                OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
                DEALINGS IN THE SOFTWARE.
              </p>
            </Section>

            <hr />

            <Section name={ this.sections[8].name } ref={ this.sections[8].ref } >
              <p>This component was written on june'18 by {' '} 
                <a  title="Visit the author's profile on Twitter"
                    href="https://twitter.com/yagoestevez/"
                    target="_blank"
                    rel="noopener noreferrer"
                  > Yago Estévez
                </a> and, if you feel like contributing, it could also use something from you :)
              </p>
            </Section>

          </main>
        </div>
        <Footer topRef={ this.topRef } />
      </React.Fragment>
    );
  }
}

export default App;
