// import React from 'react';
import React from "react";
import ReactDOM from "react-dom/client";
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
/* 
JSX Attributes: 
*/
/*
Link css file:
1. import "./fileName.css";
2. use class / className
 */
const name = "Muhammad Mehadi";
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
const timeStyle = {
  color: 'red',
  fontWeight:'bold',
}
let currentDate = new Date(2022,5,4,16);
let currentHour = currentDate.getHours();
let greeting = '';
const cssStyle = {
}
if (currentHour >= 1 && currentHour < 12) {
  greeting = 'Good Morning';
  cssStyle.color = 'green';
}
else if (currentHour >= 12 && currentHour < 19) {
  greeting = 'Good Afternoon';
  cssStyle.color = 'orange';
}
else {
   
  greeting = 'Good Night';
  cssStyle.color = 'black';
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <div className="container">
    <h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1> 
    </div>
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
