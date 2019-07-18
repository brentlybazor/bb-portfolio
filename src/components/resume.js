import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="images/bitmoji-forward.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Brently Bazor</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <ul>
              <li>Father</li>
              <li>Gamer</li>
              <li>Programmer</li>
              <li>Ultimate Frisbee</li>
              <li>Martial Artist</li>
            </ul>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Current Location</h5>
            <p>Hattiesburg, MS</p>
            <h5>Phone</h5>
            <p>(601) 447-0613</p>
            <h5>Email</h5>
            <p>brently.bazor@gmail.com</p>
            <h5>Web</h5>
            <p>brentlybazor.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'center', marginBottom: '30px'}}>
              <a href="https://drive.google.com/open?id=1qJsk_48EWMdcD-lzKLd6tHQbIGdnVGYs" target="_blank" style={{  backgroundColor: 'white', padding: '10px', borderRadius: '10px', textDecoration: 'none', fontSize: '24px', width: '50%', textAlign: 'center'}}>Download Resume</a>
            </div>
            {/* <div style={{ height: '10px'}}></div> */}
            <hr style={{borderTop: '3px solid #e22947'}} />

            <h2>Education</h2>


            <Education
              startYear={2011}
              endYear={2015}
              schoolName="Univiersity of Southern Mississippi"
              // schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
               />

             <Education
               startYear={2008}
               endYear={2011}
               schoolName="Jones College"
               // schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
                <hr style={{borderTop: '3px solid #e22947'}} />

            <h2>Experience</h2>

            <Experience
              startYear="Sept 2018"
              endYear="Jun 2019"
              jobTitle="Lead Mobile Developer"
              jobName="CNC Catastrophe & National Claims"
              // jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />

              {/* <Experience
                startYear={2012}
                endYear={2016}
                jobName="Owner"
                // jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                /> */}
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
              <Skills
                skill="HTML/CSS"
                progress={80}
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
                  />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
