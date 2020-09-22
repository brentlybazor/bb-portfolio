import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

import experienceData from '../data/experience'
import educationData from '../data/education'
import skillsData from '../data/skills'


function Resume() {

  return (
    <div>
      <Grid>
        <Cell col={4}>
          <div style={{ textAlign: 'center' }}>
            <img
              src="images/bitmoji-forward.png"
              alt="avatar"
              style={{ height: '200px' }}
            />
          </div>

          <h2 style={{ paddingTop: '2em' }}>Brently Bazor</h2>
          <h4 style={{ color: 'grey' }}>Software Engineer</h4>
          <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
          <ul>
            <li>Father</li>
            <li>Gamer</li>
            <li>Software Engineer</li>
            <li>Sports</li>
            <li>Martial Artist</li>
          </ul>
          <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
          <h5>Web</h5>
          <a href="http://brentlybazor.com/">brentlybazor.com</a>
          <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
        </Cell>
        <Cell className="resume-right-col" col={8}>
          <div style={{ display: 'flex', width: '100%', justifyContent: 'center', marginBottom: '30px' }}>
            <a href="https://drive.google.com/open?id=1qJsk_48EWMdcD-lzKLd6tHQbIGdnVGYs" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: 'white', padding: '10px', borderRadius: '10px', textDecoration: 'none', fontSize: '24px', width: '50%', textAlign: 'center' }}>Download Resume</a>
          </div>
          {/* <div style={{ height: '10px'}}></div> */}
          <hr style={{ borderTop: '3px solid #e22947' }} />

          <h2>Education</h2>

          {educationData.map((eData, index) => <Education key={index} data={eData} />)}

          {experienceData.map((eData, index) => <Experience key={index} data={eData} />)}


          <hr style={{ borderTop: '3px solid #e22947' }} />
          <h2>Skills</h2>

          {/* {skillsData.map((sData) => <Skills data={sData} />)} */}
          <Skills data={skillsData} />
          {/* <Skills
            skill="Javascript"
            progress={90}
          />
          <Skills
            skill="HTML/CSS"
            progress={90}
          />
          <Skills
            skill="NodeJS"
            progress={60}
          />
          <Skills
            skill="React"
            progress={85}
          />
          <Skills
            skill="React Native"
            progress={95}
          /> */}
        </Cell>
      </Grid>
    </div>
  )
}

export default Resume;
