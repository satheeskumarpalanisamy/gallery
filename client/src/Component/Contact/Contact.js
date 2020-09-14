import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {customerName: '',emailAddress: ' ',customerDescription: '',findUs:'friends',appointment: true};
    
        this.nameChange = this.nameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.descriptionChange = this.descriptionChange.bind(this);
        this.findUsChange = this.findUsChange.bind(this);
        this.appointmentChange = this.appointmentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      nameChange(event) {
        this.setState({customerName: event.target.value});
      }

      emailChange(event) {
        this.setState({emailAddress: event.target.value});
      }

      descriptionChange(event) {
        this.setState({customerDescription: event.target.value});
      }

      findUsChange(event) {
        this.setState({findUs: event.target.value});
      }

      appointmentChange(event) {
        this.setState(prevState => ({
            appointment: !prevState.appointment
          }));
      }
    

      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.customerName);
        this.setState({customerName: '',emailAddress: ' ',customerDescription: '',findUs:'friends',appointment: true});
        event.preventDefault();
      }



    render() {

      let uiRender;
      if (this.props.renderUiPage === '') {
          uiRender = <div className="section-form">
          <div className="row">
              <h2>We're happy to hear from you</h2>
          </div>
          <div className="row">
            <div className="col span-1-of-2 box">
                 <span className="contact-detail">
                      <p><b>Address:</b></p>
                      <p>Sathees</p>
                      <p>No.183</p>
                      <p>Karandipalayam,Kattuvalasu</p>
                      <p>Erode District</p>
                      <p>TamilNadu, India - 638056</p>
                  </span>
            </div>
            <div className="col span-1-of-2">
            <span className="contact-detail">
            <a href="https://wa.me/919003474248" className="whatsupplink">WhatsApp Chat</a>
            </span>
            <span className="contact-detail">
            <i className="ion-md-call icon-small contact-detail2"></i>
                     <span>&nbsp;&nbsp;&nbsp;+91 9003474248</span>
            </span>
            <span className="contact-detail">
              <p>
            <i className="ion-ios-mail icon-small contact-detail2"></i>
            &nbsp;&nbsp;&nbsp;&nbsp;shrirangaagallery@gmail.com
            </p>
            </span>
            </div>
          </div>
          <br></br>
          <br></br>
          <form onSubmit={this.handleSubmit}>
          <div className="row">
              <h3>Contact Form</h3>
              <br></br>
          </div>
          <div className="row">
              <div className="contact-form">
                  <div className="row">
                      <div className="col span-1-of-3">
                          <label>Name</label>
                      </div>
                      <div className="col span-2-of-3">
                          <input type="text" name="name" id="name" placeholder="Your name" required onChange={this.nameChange} value={this.state.customerName} />
                      </div>
                  </div>
                  <div className="row">
                      <div className="col span-1-of-3">
                          <label>Email</label>
                      </div>
                      <div className="col span-2-of-3">
                          <input type="email" name="email" id="email" placeholder="Your email" required onChange={this.emailChange} value={this.state.emailAddress} />
                      </div>
                  </div>
                  <div className="row">
                      <div className="col span-1-of-3">
                          <label>Appointment Required?</label>
                      </div>
                      <div className="col span-2-of-3">
                          <input type="checkbox" name="news" id="news" checked={this.state.appointment} onChange={this.appointmentChange}/> Yes, please
                      </div>
                  </div>
                  <div className="row">
                      <div className="col span-1-of-3">
                          <label>Drop us a line</label>
                      </div>
                      <div className="col span-2-of-3">
                          <textarea className="message" placeholder="Your message" onChange={this.descriptionChange} required value={this.state.customerDescription} ></textarea>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col span-1-of-3">
                          <label>&nbsp;</label>
                      </div>
                      <div className="col span-2-of-3">
                          <input type="submit" value="Send it!"></input>
                      </div>
                  </div>      
          </div>  
          
       </div>
       </form>
      </div>

      }

      if (this.props.renderUiPage === 'search') {
        uiRender = <Redirect to="/search" />
        }

      return (
        uiRender
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
        renderUiPage: state.pageTag.uiPage,
    }
  }
  
  export default connect(mapStateToProps)(Contact);
  
  