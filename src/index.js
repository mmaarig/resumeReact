import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function Hi() {
  return (
    <div className="para">
      {/* My{" "}
      <strong>
        <i>Name</i>
      </strong>{" "}
      is <i>italic</i> and <u>underlined</u>. And this is a <h1>Heading</h1>. */}
      <h1>Resume</h1>
      <p><b>Name :</b> Muhammad Maarig</p>
      <p><b>Experiance </b></p> 
      <p>Teaching - 06 Years</p>
      <p><b>Skills</b></p>
      <p>01 - Teaching</p>
      <p>02 - Front-End Development</p>
      <p>03 - Content Writing</p>
      <p>04 - Digital Marketing</p>
      <p><b>Qualification :</b></p>
      <p>Graduation</p>
      <p><b>Contact</b></p>
      <p><a href="https://github.com/mmaarig">Github</a></p>
      <p><a href="https://www.linkedin.com/in/mmaarig/">LinkedIn</a></p>




      {/* <p>This is a new paragraph</p>5 x 99 = {5 * 99} */}
    </div>
  );
}
ReactDOM.render(<Hi />, document.querySelector("#root"));
