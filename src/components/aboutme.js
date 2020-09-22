import React from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


function About() {
  
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={12}>
            <h2>Brently Bazor</h2>
            <img
              src="images/bitmoji-forward.png"
              alt="avatar"
              style={{height: '250px'}}
               />
             {/* <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p> */}

          </Cell>
          <Cell col={6}>
            <h2>About Me</h2>
            <hr/>



            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    {/* <a href={'https://brentlybazor.appointlet.com/s/short-call'} style={{ color: 'black', textDecoration: 'none' }} target="_blank"> */}
                      <i className="fa fa-question-circle" aria-hidden="true"/>
                      <span style={{ paddingTop: 5, paddingBottom: 10 }}>Who am I...</span>
                      <p>I am a Software Engineer living in Clearwater, Florida. I like to make cool and exciting websites, mobile apps and softwares.</p>
                    {/* </a> */}
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i style={{ position: 'relative', left: 0 }} className="fa fa-info-circle" aria-hidden="true"/>
                    <span style={{ paddingTop: 5, paddingBottom: 10 }}>Facts about me...</span>
                    <p>I prefer Asian food over any other food.</p>
                    <p>I like to travel.</p>
                    <p>I am a musician.</p>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-calendar" aria-hidden="true"/>
                    <span style={{ paddingTop: 5, paddingBottom: 10 }}>What I can be found doing...</span>
                    <p>Programming</p>
                    <p>Spending time with my daughter</p>
                    <p>Singing.... a lot of singing</p>
                    <p>Playing ultimate frisbee</p>
                    <p>Traveling</p>
                  </ListItemContent>
                </ListItem>

                {/* <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    <span>brently.bazor</span>
                  </ListItemContent>
                </ListItem> */}
              </List>
            </div>
          </Cell>
          {/* <Cell col={4}>

          </Cell> */}
        </Grid>
      </div>
    )
}

export default About;
