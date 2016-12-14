import React, {Component} from 'react';
import styles from './Contact.css';
import {HeaderComponent} from './component/../..';

export class ContactComponent extends Component{
  render(){
    return(
      <div>
        <HeaderComponent />
        <div>
          <h1>Contact Component</h1>
        </div>
      </div>
    );
  }
}

export default ContactComponent;