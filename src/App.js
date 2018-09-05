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
import Coverage from './components/Coverage';
import Function from './components/Function';

const lessons = [
  {
    component: Basic,
    description: 'Basic component',
    props: {
      name: 'John Doe',
      jobType: 'Frontend Developer'
    }
  },
  {
    component: Coverage,
    description: 'Coverage generation and analysis',
    props: {
      name: 'John Doe',
      jobType: 'Frontend Developer'
    }
  },
  {
    component: Function,
    description: 'Functions testing',
    props: {
      name: 'john',
      surname: 'doe',
      jobType: 'Frontend Developer'
    }
  },
];

const renderComponent = ({component, props}) => {
  const ComponentToRender = component;
  return (
    <ComponentToRender {...props} />
  )
}

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
            {lessons.map((lesson, index) => (
              <AccordionItem>
                <AccordionItemTitle>
                  <h3>Lesson {index+1}</h3>
                  <div>{lesson.description}</div>
                </AccordionItemTitle>
                <AccordionItemBody>
                  {renderComponent(lesson)}
                </AccordionItemBody>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>
    );
  }
}

export default App;
