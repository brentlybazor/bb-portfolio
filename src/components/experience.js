import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobDescription: '',
    }
  }

  render() {
    let text = this.props.jobDescription
    let newText = text.split('\\n').map((item, i) => {
        return <p key={i}>{item}</p>;
    });
    return(
      <Grid>
        <Cell col={4}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop:'0px'}}>{this.props.jobTitle}</h4>
          <h5><i>{this.props.jobName}</i></h5>
          <h6>{this.props.jobLocation}</h6>
          <p>{newText}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Experience;
