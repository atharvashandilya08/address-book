import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { gsap } from "gsap/dist/gsap";
import {Tooltip} from "bootstrap";


ReactDOM.render(<App/>, document.getElementById("root"))
const book = document.getElementById("book");
console.log(book);
const tl = gsap.timeline();
tl.fromTo(book, {y:100}, {y: 0});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
