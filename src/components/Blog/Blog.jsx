import React from "react";
import { Container } from "react-bootstrap";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Blog = () => {
  const downloadPdf = () => {
    const input = document.getElementById("pdf-content");

    html2canvas(input, { scale: 3 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      // Adjust PDF dimensions as needed (e.g., width and height)
      const pdf = new jsPDF("p", "mm", [210, 297]); // "a4" dimensions

      pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
      pdf.save("code-example.pdf");
    });
  };

  return (
    <Container className="mt-5 pt-5">
      <div id="pdf-content">
        <h5 className="text-danger">
          1.Tell us the differences between uncontrolled and controlled
          components?
        </h5>
        <p style={{ fontFamily: "sans-serif", fontWeight: "normal" }}>
          ans: Tell us the differences between uncontrolled and controlled
          components. Controlled components having state and behavior fully
          controlled by the parent component. On the other hand, Uncontrolled
          components manage their own state internally.
        </p>
        <h5 className="text-danger">
          2. How to validate React props using PropTypes?
        </h5>
        <p style={{ fontFamily: "sans-serif", fontWeight: "normal" }}>
          ans: A parent component passes props down to child components And then
          child components receive them. Any data can be passed as props. we
          need a way to validate their data type so that the child component
          gets what they expect.
        </p>
        <h5 className="text-danger">
          3. Tell us the difference between nodejs and express js?
        </h5>
        <p style={{ fontFamily: "sans-serif", fontWeight: "normal" }}>
          ans: NodeJS is a framework that is used for working with the backend
          of our application or constructing the backend using JavaScript. On
          the other hand, ReactJS is a JavaScript front-end library. It is
          mainly used for building the user interface. NodeJS provides the
          JavaScript run-time environment whereas Express is a framework that
          sits on top of NodeJS.
        </p>
        <h5 className="text-danger">
          4. What is a custom hook, and why will you create a custom hook?
        </h5>
        <p style={{ fontFamily: "sans-serif", fontWeight: "normal" }}>
          Ans: A custom hook is a function whose name starts with 'use'. it is a
          composition of other hooks. <br />
          Creating a custom hook in React can be beneficial in several ways:
          Reusability: If you find yourself repeating the same code across
          different components, creating a custom hook can help you extract that
          logic into a reusable function. By doing so, you can simplify your
          components and reduce the amount of code you need to write.
          Abstraction: Custom hooks can help you abstract away complex
          implementation details and provide a simpler interface for your
          components. This can make your code easier to reason about and
          maintain.
        </p>{" "}
      </div>
      <br />

      <button
        style={{ border: "none" }}
        className="mx-4 bg-color rounded text-center my-1 text-white"
        onClick={downloadPdf}
      >
        Download file
      </button>
    </Container>
  );
};

export default Blog;
