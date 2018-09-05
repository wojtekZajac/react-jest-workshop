import React, { Component } from 'react';
import logo from './logo.svg';
import 'react-accessible-accordion/dist/fancy-example.css';
import './App.css';

import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';


import Basic from './components/Basic';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React & Jest workshop</h1>
        </header>
        <section className="lessons">
          <Accordion>
            <AccordionItem>
              <AccordionItemTitle>
                <h3>Lesson 1</h3>
                <div>Basic component</div>
              </AccordionItemTitle>
              <AccordionItemBody>
              <Basic 
                  name='Wojtek'
                  jobType='Frontend Developer'
                />
              </AccordionItemBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemTitle>
                <h3>Lesson 2</h3>
                <div>Coverage</div>
              </AccordionItemTitle>
              <AccordionItemBody>
                <p>Body content</p>
              </AccordionItemBody>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    );
  }
}

export default App;
