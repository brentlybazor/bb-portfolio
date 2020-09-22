import React, { useState } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


function Projects(props) {


  const [activeTab, setActiveTab] = useState(0)


  const ToggleCategories = () => {
    if (activeTab === 0) {
      return (
        <Grid>
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(images/recipe-image.jpg) center / cover' }} >React Project #1</CardTitle>
            <CardText>
              Simple React app using the Edemam API.
            </CardText>
            <CardActions border style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
              <Button colored href="https://github.com/brentlybazor/recipe-app/" target="_blank">GitHub</Button>
              <Button colored href="https://bb-recipe-api-app.netlify.com/" target="_blank">Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          {/* <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #2</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card> */}
        </Grid>
      )
    } else {
      return (
        <Grid className="contact-grid">
          <Cell col={12}>
            <img
              src="images/bitmoji-oops.jpg"
              alt="avatar"
              style={{ height: '250px' }}
            />
            <h2>More Projects Coming Soon...</h2>

            {/* <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p> */}

          </Cell>
        </Grid>

      )
    }
  }

  return (
    <div>
      <Tabs activeTab={activeTab} onChange={(tabId) => setActiveTab(tabId)} ripple>
        <Tab>React</Tab>
        <Tab>React Native</Tab>
        <Tab>Python</Tab>
      </Tabs>


      <Grid>
        <Cell col={12}>
          <div className="content">
            <ToggleCategories />
          </div>
        </Cell>
      </Grid>


    </div>
  )
}

export default Projects;
