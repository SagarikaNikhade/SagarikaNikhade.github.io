import React from 'react';
import styled from "styled-components";
// import { Heading,Text } from '@chakra-ui/react';

const About = () => {
  return (
    <DIV id="about" className="about section">

      <div className="about_heading">
        <div className="blankLine"></div>
        <div>
          <h3>About&nbsp;Me</h3>
        </div>
        <div className="blankLine"></div>
      </div>

      <div className='sagarika'>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4_6eEwSXQvpCMoWgmxlOgHDEUjwV5G16_IQ&usqp=CAU" alt="box-about-err" />
        </div>
        <div>
          <h1>Sagarika Nikhade</h1>
          <br />
          <h2>A Self-motivated and aspiring Full Stack Web Developer and Strong in design and integration with intuitive problem- solving skills. Passionate about implementing and launching new projects. Proficient in HTML, CSS, JavaScript, React, and Redux. Looking for a challenging job opportunity in a growth oriented organisation that will showcase one's skills and enhances career and technical knowledge.</h2>
          <br />
        </div>
      </div>

    </DIV>
  )
}

export default About

const DIV = styled.div`
#about {
    padding: 10px 10%;
    width: 100%;
    height: 40vh;
    margin-top: 60px;
    background: #080808;
    scroll-snap-align: start none;
}
.about_heading, .skills_heading {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}
.blankLine {
    width: 500px;
    height: 1px;
    background-color: #ff004f;
    margin: 5px;
}
.about_heading div h3, .skills_heading div h3 {
    font-size: 30px;
    font-weight: 600;
    display: block;
}
.sagarika{
  margin-top:50px;
  border:0px solid white;
  display:flex;
  justify-content: space-evenly;
  width:100%;
  gap:20px;
}
.sagarika>div{
  border:0px solid red;
  width:80%;
}
.sagarika>div>h1{
  font-family: "Font Awesome 6 Free";
  font-size:18px;
  font-weight:Bold;
}
.sagarika>div>h2{
  font-family: "Gill Sans", sans-serif;
  text-align:left;
}
.sagarika>div>div{
  border:0px solid yellow;
  width:70%;
}
.sagarika>div>img{
  width:100%;
}

/* Medium Screen */
@media screen and (min-width:451px) and (max-width:1000px){
 .sagarika{
  flex-direction:column;
 }
}

/* Small Screen */
@media screen and (min-width:100px) and (max-width:500px){
 .sagarika{
  flex-direction:column;
 }
}
`;