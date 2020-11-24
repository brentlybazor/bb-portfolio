import React, { useState } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';

import projectsData from '../data/projects'
import projectTypes from '../data/projectTypes';

export default function Projects(props) {
  const [activeTab, setActiveTab] = useState(0);

  const ProjectCard = ({ data }) => {
    return (
      <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
        <CardTitle
          style={{
            color: "#fff",
            height: "176px",
            background: `url(${data.image}) center / cover`,
          }}
        >
          {data.name}
        </CardTitle>
        <CardText>
          {projectTypes.filter((pTypes) => pTypes.type === data.type)[0] &&
          projectTypes.filter((pTypes) => pTypes.type === data.type)[0].name ? (
            <p>
              Build with:{" "}
              {
                projectTypes.filter((pTypes) => pTypes.type === data.type)[0]
                  .name
              }
            </p>
          ) : (
            data.type && <p>Build with: {data.type}</p>
          )}
          <p>{data.description}</p>
        </CardText>
        <CardActions
          border
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {data.githubLink && (
            <Button colored href={data.githubLink} target="_blank">
              GitHub
            </Button>
          )}
          {data.liveDemoLink && (
            <Button colored href={data.liveDemoLink} target="_blank">
              Live Demo
            </Button>
          )}
        </CardActions>
        {/* 
        todo: add back in with CardMenu, IconButton in 'react-mdl' once the share button works
        <CardMenu style={{ color: '#fff' }}>
          <IconButton name="share" />
        </CardMenu> */}
      </Card>
    );
  };

  function filterData(data, filter) {
    if (filter) return data.filter((fData) => fData.type === filter);
    else return data;
  }

  const ToggleCategories = ({ data }) => {
    if (filterData(data, projectTypes[activeTab].type).length) {
      return (
        <Grid>
          {filterData(data, projectTypes[activeTab].type).map((pData) => (
            <ProjectCard data={pData} />
          ))}
        </Grid>
      );
    } else {
      return (
        <Grid className="contact-grid">
          <Cell col={12}>
            <img
              src="images/bitmoji-oops.jpg"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <h2>More Projects Coming Soon...</h2>
            {/* <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p> */}
          </Cell>
        </Grid>
      );
    }
  };

  //todo: add a horizontal scrolling div for the tabs
  return (
    <div>
      <Tabs
        activeTab={activeTab}
        onChange={(tabId) => setActiveTab(tabId)}
        ripple
      >
        {projectTypes.map((cData) => (
          <Tab>{cData.name}</Tab>
        ))}
      </Tabs>
      <Grid>
        <Cell col={12}>
          <div className="content">
            <ToggleCategories data={projectsData} />
          </div>
        </Cell>
      </Grid>
    </div>
  );
}

