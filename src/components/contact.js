import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import './contact.css'


class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNumber: false,
      showEmail: false,
      showSkype: false
    }
  }
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Brently Bazor</h2>
            <img
              src="images/bitmoji-forward.png"
              alt="avatar"
              style={{ height: '250px' }}
            />
            {/* <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p> */}

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <a href={'https://brentlybazor.appointlet.com/b/brently-bazor'} style={{ color: 'black', textDecoration: 'none' }} target="_blank">
                      <i className="fa fa-calendar" aria-hidden="true" />
                      <span style={{ paddingTop: 5 }}>Click to Schedule Appointment</span>
                    </a>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <i style={{ position: 'relative', left: 0 }} className="fa fa-phone-square" aria-hidden="true" />
                    {!this.state.showNumber
                      ? <button className={"showButton"} onClick={() => this.setState({ showNumber: !this.state.showNumber })}>Show Number</button>
                      : <span>(601) 447-0613</span>}
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <i className="fa fa-envelope" aria-hidden="true" />
                    {!this.state.showEmail
                      ? <button className={"showButton"} onClick={() => this.setState({ showEmail: !this.state.showEmail })}>Show Email</button>
                      : <span>brently.bazor@gmail.com</span>}
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <i className="fa fa-skype" aria-hidden="true" />
                    {!this.state.showSkype
                      ? <button className={"showButton"} onClick={() => this.setState({ showSkype: !this.state.showSkype })}>Show Skype</button>
                      : <span>brently.bazor</span>
                    }
                  </ListItemContent>
                </ListItem>
                {/* <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                  <a href={'https://calendar.google.com/calendar/embed?src=brently.bazor@gmail.com&mode=WEEK'} style={{ color: 'black', textDecoration: 'none' }} target="_blank">
                    <i className="fa fa-calendar" aria-hidden="true"/>
                    <span style={{ paddingTop: 5}}>Click to View Calendar</span>
                  </a>
                </ListItemContent>
              </ListItem> */}
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
