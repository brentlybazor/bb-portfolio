import React from 'react';
import { Grid, Cell } from 'react-mdl';

function Experience(props) {

  if(Object.keys(props.data).length === 0) return null;

  let text = props.data.jobDescription || ""
  let newText = text.split('\\n').map((item, i) => {
    return <span key={i}>{item}</span>;
  });
  return (
    <Grid>
      <Cell col={4}>
        <p>{props.data.startYear} - {props.data.endYear}</p>
      </Cell>
      <Cell col={8}>
        <h4 style={{ marginTop: '0px' }}>{props.data.jobTitle}</h4>
        <h5><i>{props.data.jobName}</i></h5>
        <h6>{props.data.jobLocation}</h6>
        <p>{newText}</p>
      </Cell>
    </Grid>
  )
}

export default Experience;
