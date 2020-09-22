import React from 'react';
import { Grid, Cell } from 'react-mdl';

function Education(props) {
  
  return (
    <Grid>
      <Cell col={4}>
        <p>{props.data.startYear} {(props.data.startYear && props.data.endYear) && '-' } {props.data.endYear}</p>
      </Cell>
      <Cell col={8}>
        <h4 style={{ marginTop: '0px' }}>{props.data.schoolName}</h4>
        <h5>{props.data.schoolLocation}</h5>
        <h5>{props.data.schoolDegree}</h5>
        <p>{props.data.schoolDescription}</p>
      </Cell>
    </Grid>
  )
}

export default Education;
