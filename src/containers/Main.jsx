import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import About from './About';
import Sponsors from './Sponsors';
import Exec from './Exec';
import Events from './Events';
import ContactUs from './ContactUs';
import '../styles/main.css';
import ComServe from './ComServe';

const Main = () => ( <div>
  <div className = "content" >
  <Switch >
    <Route exact path = '/' component = {About}/> 
    <Route path = '/comserve' component = {ComServe}/>
    <Route path = '/sponsors' component = {Sponsors}/> 
    <Route path = '/exec' component = {Exec}/> 
    <Route path = '/contact' component = {ContactUs}/> 
    <Route path = '/events'component = {Events}/> 
    <Route path = '/zoom' component = {() => window.location.href = 'https://mit.zoom.us/j/94026373084'}/> 
  </Switch> </div> </div>
)

export default Main;
