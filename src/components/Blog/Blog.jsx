import React from "react";
import { Container } from "react-bootstrap";
import Pdf from "react-to-pdf";
const ref = React.createRef();
const Blog = () => {
  return (
    <Container>
      <h2 className="text-danger">
        1.Tell us the differences between uncontrolled and controlled
        components?
      </h2>
      <p className="text-primary">
        ans: Tell us the differences between uncontrolled and controlled
        components. Controlled components having state and behavior fully
        controlled by the parent component. On the other hand Uncontrolled
        components manage their own state internally.
      </p>
      <h2 className="text-danger">
        2. How to validate React props using PropTypes?
      </h2>
      <p className="text-primary">
        ans: A parent component passes props down to child components And then
        child components receive them. Any data can be passed as props. we need
        a way to validate their data type so that the child component gets what
        they expect.
      </p>
      <h2 className="text-danger">
        3. Tell us the difference between nodejs and express js?
      </h2>
      <p className="text-primary">
        ans: NodeJS is a framework which is used for working with the backend of
        our application or constructing the backend using JavaScript. On the
        otherhand ReactJS is a JavaScript front-end library. It is mainly used
        for building the user interface. NodeJS provides the JavaScript run-time
        environment whereas Express is a framework that sits on top of NodeJS.
      </p>
      <h2 className="text-danger">
        4. What is a custom hook, and why will you create a custom hook?
      </h2>
      <p className="text-primary">
        Ans: A custom hook is a function whose name starts with 'use' .it is a
        composition of other hooks. <br />
        Creating a custom hook in React can be beneficial in several ways:
        Reusability: If you find yourself repeating the same code across
        different components, creating a custom hook can help you extract that
        logic into a reusable function. By doing so, you can simplify your
        components and reduce the amount of code you need to write. Abstraction:
        Custom hooks can help you abstract away complex implementation details
        and provide a simpler interface for your components. This can make your
        code easier to reason about and maintain.
      </p>{" "}
      <br />
      <div ref={ref}>
        <h1>Pdf file here</h1>
      </div>
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => (
          <button className="text-danger" onClick={toPdf}>
            Download file
          </button>
        )}
      </Pdf>
    </Container>
  );
};

export default Blog;
