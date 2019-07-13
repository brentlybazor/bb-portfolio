import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{ display: 'flex', height: '100%' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="images/bitmoji-forward.png"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Full Stack Developer</h1>
              <h1>Web & Mobile</h1>
              <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin link-icon" />
              </a>

              <hr/>

              <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/brently-bazor-221a876a" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin link-icon" />
              </a>

              {/* Github */}
              <a href="https://github.com/brentlybazor" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github link-icon" />
              </a>

              {/* Freecodecamp */}
              <a href="https://www.freecodecamp.org/brently.bazor" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-free-code-camp link-icon" aria-hidden="true" />
              </a>

              {/* Youtube */}
              {/*
              <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-youtube link-icon" aria-hidden="true" />
              </a>
              */}

            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
