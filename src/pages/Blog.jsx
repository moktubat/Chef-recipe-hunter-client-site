import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Blog = () => {
  return (
    <div className="container">
      
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>01. Differences between uncontrolled and controlled components</Accordion.Header>
        <Accordion.Body>
          <p><strong>Controlled Components</strong> A controlled component is bound to a value, and its changes will be handled in code by using event-based callbacks. Here, the input form element is handled by the react itself rather than the DOM. In this, the mutable state is kept in the state property and will be updated only with <code>setState()</code> method.</p>
          <p><strong>Uncontrolled Components</strong> It is similar to the traditional HTML form inputs. Here, the form data is handled by the DOM itself. It maintains their own state and will be updated when the input value changes.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How to validate React props using PropTypes?</Accordion.Header>
        <Accordion.Body>
          Props are an important mechanism for passing the read-only attributes to React components. The props are usually required to use correctly in the component. <br />
          <code>App.propTypes</code> is used for props validation in react component. When some of the props are passed with an invalid type, you will get the warnings on JavaScript console. After specifying the validation patterns, you will set the App.defaultProps.
          <li> <code>PropTypes.any</code>: The prop can be of any data type</li>
          <li> <code>PropTypes.bool</code>: The prop should be a Boolean</li>
          <li> <code>PropTypes.number</code>: The prop should be a number</li>
          <li> <code>PropTypes.string</code>: The prop should be a string</li>
          <li> <code>PropTypes.func</code>: The prop should be a function</li>
          <li> <code>PropTypes.array</code>: The prop should be an array</li>
          <li> <code>PropTypes.object</code>: The prop should be an object</li>
          <li> <code>PropTypes.symbol</code>: The prop should be a symbol</li>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>The difference between node js and express js</Accordion.Header>
        <Accordion.Body>
          <p><strong>node js</strong>: Node.js is an open source and cross-platform runtime environment for executing JavaScript code outside of a browser. You need to remember that NodeJS is not a framework and it’s not a programming language. Most of the people are confused and understand it’s a framework or a programming language. We often use Node.js for building back-end services like APIs like Web App or Mobile App.</p>
          <p><strong>express js</strong>: Express is a small framework that sits on top of Node.js’s web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your application’s functionality with middle ware and routing. It adds helpful utilities to Node.js’s HTTP objects.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>What is a custom hook, and why will you create a custom hook?</Accordion.Header>
        <Accordion.Body>
        A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. 
        Instead of using High-Order Components (HOCs), one can use custom hooks to improve the readability of the code. Complex codes can become hard to read if layers of providers surround the components, consumers, HOCs, render props, and other abstractions, generally known as wrapper hell.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
};

export default Blog;
