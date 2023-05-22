import './App.css';
import React from 'react';
import {useState, Component} from 'react';

function Header(props){
  return(
    <nav>
      <div class="navigate_logo"><a href="#">JJUN's BLOG</a></div>
      <ul class="navigate_menu">
        <li><a onClick={(event)=>{
          event.preventDefault();
          props.onChangeMode('home');
        }}>Home</a></li>
        <li><a onClick={(event)=>{
          event.preventDefault();
          props.onChangeMode('portfolio');
        }}>Portfolio</a></li>
        <li><a onClick={(event)=>{
          event.preventDefault();
          props.onChangeMode('about');
        }}>About</a></li>
        <li><a onClick={(event)=>{
          event.preventDefault();
          props.onChangePopUp('contact');
        }}>Contact</a></li>
      </ul>
    </nav>
  );
}

function Body(){
  return(
    <div class="body_container">
      <div class="nav_zone"/>
      <div class="body_contents">
      </div>
    </div>
  )
}

function Home(prop){
  return(
    <div class="home_container">
        <h1>Home</h1>
        <img class="home_img1" src="img/home.jpg"/>
    </div>
  );
}

function Portfolio(prop){
  return(
    <div class="portfolio_container">
        <h1>Portfolio</h1>
        <img class="home_img1" src="img/home.jpg"/>
    </div>
  );
}

function About(prop){
  return(
    <div class="about_container">
        <h1>About</h1>
        <img class="home_img1" src="img/home.jpg"/>
    </div>
  );
}

function Contact(props){
  return(
    <div class="conatact_background">
      <div class="contact_container">
          <button class="popUpCloser" onClick={(event=>{
            event.preventDefault();
            props.onChangePopUp(null);
          })}>X</button>
          <h1>Contact</h1>
      </div>
    </div>
  );
}

function App(props) {
  let contents = null;
  let popUp = null;
  let [mode, setMode] = useState('home');
  let [popUpMode, setPopUpMode] = useState(null);
  if(mode === 'home'){
    contents = <Home/>
  }else if(mode === 'portfolio'){
    contents = <Portfolio/>
  }else if(mode === 'about'){
    contents = <About/>
  }
  if(popUpMode === 'contact'){
    popUp = <Contact onChangePopUp={(popUp)=>{
      setPopUpMode(null);
    }}/>
  }else{
    popUp = null;
  }
  return (
    <div class="app"> 
      <Header onChangeMode={(_mode)=>{
        setMode(_mode);
      }} onChangePopUp={(popUp)=>{
        setPopUpMode(popUp);
      }}/>
      <div class="body_container">
      <div class="nav_zone"/>
      <div class="body_contents">
        {contents}
        <div class="popup">{popUp}</div>
      </div>
    </div>
    </div>
  );
}

export default App;
