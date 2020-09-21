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
            <h4 style={{color: 'grey'}}>Software Engineer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <ul>
              <li>Father</li>
              <li>Gamer</li>
              <li>Software Engineer</li>
              <li>Sports</li>
              <li>Martial Artist</li>
            </ul>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Web</h5>
            <a href="http://brentlybazor.com/">brentlybazor.com</a>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'center', marginBottom: '30px'}}>
              <a href="https://drive.google.com/open?id=1qJsk_48EWMdcD-lzKLd6tHQbIGdnVGYs" target="_blank" rel="noopener noreferrer" style={{  backgroundColor: 'white', padding: '10px', borderRadius: '10px', textDecoration: 'none', fontSize: '24px', width: '50%', textAlign: 'center'}}>Download Resume</a>
            </div>
            {/* <div style={{ height: '10px'}}></div> */}
            <hr style={{borderTop: '3px solid #e22947'}} />

            <h2>Education</h2>


            <Education
              startYear="Aug 2011"
              endYear="May 2015"
              schoolName="Univiersity of Southern Mississippi"
              schoolLocation="Hattiesburg, Mississippi"
              schoolDegree="Information Technology: Developer"
              // schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
               />

             <Education
               startYear="Aug 2008"
               endYear="May 2011"
               schoolName="Jones College"
               schoolLocation="Ellisville, Mississippi"
               schoolDegree="Music Education"
               // schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />

                <Education
                  startYear="Aug 2004"
                  endYear="May 2008"
                  schoolName="Petal High School"
                  schoolLocation="Petal, Mississippi"
                  schoolDegree="General Education"
                  // schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                   />
                <hr style={{borderTop: '3px solid #e22947'}} />

            <h2>Experience</h2>

            <Experience
              startYear="Sept 2019"
              endYear="Present"
              jobTitle="Senior Software Engineer"
              jobName="Chargebacks 911"
              jobLocation="Clearwater, Florida"
              jobDescription='Developed next-gen React web applications to aid the finance industry protect against credit card chargebacks.'
              />

            <Experience
              startYear="Aug 2019"
              endYear="Present"
              jobTitle="Front End Developer"
              jobName="Hogarth World Wide Inc"
              jobLocation="San Jose, California"
              jobDescription='Worked on a large scale website localization project for a Fortune 10 company. '
              />

            <Experience
              startYear="Sept 2018"
              endYear="Jun 2019"
              jobTitle="Lead Mobile Developer"
              jobName="CNC Catastrophe & National Claims"
              jobLocation="Mobile, Alabama"
              jobDescription='Built native mobile applications using React Native.\nConnected mobile applications to a REST API.'
              />

              <Experience
                startYear="Jun 2015"
                endYear="Present"
                jobTitle="Owner/ Software Engineer/ Marketing Manager"
                jobName="Empire Software and Marketing"
                jobLocation="Hattiesburg, Mississippi"
                jobDescription='Developed web applications and Customer Relationship Management software using various programming languages that used backend services such as SQL databases.
                                \nManaged marketing and social media channels for the company and clients.
                                \nUsed programming languages like HTML, Javascript, PHP, C++, and Java to create various programs and websites for clients and used Linux/Unix servers to maintain data used in the applications.
                                \nDeveloped applications using React, React Native, Node.js, Express, and AWS.'
                />

                <Experience
                  startYear="Jun 2016"
                  endYear="Nov 2016"
                  jobTitle="Software Engineer"
                  jobName="Voxo"
                  jobLocation="Hattiesburg, Mississippi"
                  jobDescription='Developed geolocation-based mobile applications using Angular/Javascript with the Ionic Framework.
                                  \nCreated web applications using Laravel and PHP.
                                  \nWorked closely with a remote team and individual projects using Git source control and online communications.'
                  />

                  <Experience
                    startYear="Dec 2011"
                    endYear="May 2012"
                    jobTitle="Software Engineer"
                    jobName="ArroyoDev"
                    jobLocation="Hattiesburg, Mississippi"
                    jobDescription='Developed new and customized existing iPad applications for the healthcare industry.
                                    \nProvided support to clients who used the applications.
                                    \nWorked closely with a remote team using Bitbucket source control and online communications.
                                    \nUsed C++ and Lua Glider with the Corona SDK in the Netbeans IDE to create full stack applications for iPad.'
                    />

                    <Experience
                      startYear="Aug 2011"
                      endYear="Dec 2011"
                      jobTitle="Software Engineer"
                      jobName="National Center for Spectator Sports Safety and Security"
                      jobLocation="Hattiesburg, Mississippi"
                      jobDescription='Produced 3D models of sporting venues and created simulation software predicted the best way to react to various hazardous events. i.e. Bomb explosion, Fire evacuation.
                                      \nUsed Netbeans for C++ development and a proprietary 4D Script language to create the simulations.
                                      \nWorked closely with an in-house development team using an in-house source control application.'
                      />
                    <Experience
                      startYear="May 2012"
                      endYear="Sept 2016"
                      jobTitle="Owner/ Operator"
                      jobName="Bazor MMA Club"
                      jobLocation="Petal, Mississippi"
                      jobDescription='Founded a start up martial arts company.
                                      \nCreated marketing strategies and advertising plans.
                                      \nWorked closely with clients. Taught martial arts classes for ages 3 and up.
                                      \nPlay leading role in sales and marketing, including online and in house transactions and advertising.
                                      \nUse cutting edge technology to automate the sales and communication processes. i.e. automated emails and text messages.'
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
                  />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
