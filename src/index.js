// import React from 'react';
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import reportWebVitals from './reportWebVitals';

/* first parameter ki dakhabo tai , 2nd parameter kothay dekhabo. */
/*
multi jsx render :

way-1: [
<h1>Muhammad Mehadi</h1>,
<h3>I am Web Developer.</h3>
]
way-2:
<div ><h1>Muhammad Mehadi</h1>
<h3>I am Web Developer.</h3></div>
*/
/*
React fragment: don't need create any other div/a/h1/any tag.
way-1: <React.Fragment></React.Fragment>
way-2:<></>
*/
/*
JSX expression:
1. {variable_name}
2. {name === "Muhammad Mehadi" ? name : "No Name Found."}
*/

/*
Template literals:
const fName = 'Muhammad';
const lName = 'Mehadi';
1. {fname}{lname}
2. {fname+lname}
3. {fname+" "+lname}
4. {`${fname} ${lname}`}
5. 
*/
const name = "Muhammad Mehadi";
ReactDOM.render(
  <React.Fragment>
    <h1>{name === "Muhammad Mehadi" ? name : "No Name Found."}</h1>
    <p>I am Web Developer.</p>
    <ol>
      <li>Html-Css</li>
      <li>Javascript</li>
      <li>React</li>
      <li>Nodejs</li>
      <li>Mongodb</li>
    </ol>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
