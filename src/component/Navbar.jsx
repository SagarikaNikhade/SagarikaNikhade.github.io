import React from "react";
import { Link } from "react-router-dom";
import {Spacer, Box, Heading,Image } from '@chakra-ui/react';
import styled from "styled-components";

export const Navbar = () => {
  return (
    <DIV id="nav-menu" className="">
      <ul className="nav_list_ul">
      <Box p='2'>
      <Image src="https://tse2.mm.bing.net/th/id/OIP.jg_jGuIxpUz8_RArXMnBiwHaHa?w=160&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="logo"/>
      </Box>
      <Spacer />
      <Box p='2'>
        <Heading size='md'><Link className="nav-link home" to={"/"}>Home</Link></Heading>
      </Box>
      <Box p='2'>
        <Heading size='md'><Link className="nav-link about" to={"/about"}>About</Link></Heading>
      </Box>
      <Box p='2'>
        <Heading size='md'><Link className="nav-link contact" to={"/contact"}>Contact</Link></Heading>
      </Box>
      <Box p='2'>
        <Heading size='md'><Link className="nav-link skills" to={"/skill"}>Skills</Link></Heading>
      </Box>
      <Box p='2'>
        <Heading size='md'><Link className="nav-link projects" to={"/project"}>Projects</Link></Heading>
      </Box>
      <Spacer />
        <li className="nav-link resume" id="resume-button-1"><a onclick="window.open('https://drive.google.com/file/d/1T80SkoPVnuLICsYl9WRw-J3qJ1hpbiCb/view?usp=share_link')" href="#0" target="_blank" download="Portfolio\Amit_Chakraborty_Resume.pdf.pdf" id="resume-link-1"><span><svg className="download nav-link resume" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"></path>
                    </svg></span> Resume</a></li>
    </ul>
    <div className="hamburger">
        <div className="hmline"></div>
        <div className="hmline"></div>
        <div className="hmline"></div>
    </div>
    <div class="cross">
        <i class="fa-solid fa-x fa-shake fa-2xl"></i>
    </div>
    </DIV>
  )
};

const DIV = styled.div`
 border: 0px solid red;
 height:auto;
 width:100%;
 display: block;

 #nav-menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
#nav-menu {
    width: 100%;
    padding: 10px 10%;
    min-height: 9vh;
    background-color: #080808;
    position: fixed;
    top: 0;
    z-index: 10000;
}
.logo {
  width: 30px;
  height:40px;
  overflow: clip;
}
.nav_list_ul {
    display: flex;
}
ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
#nav-menu ul li {
    list-style: none;
    margin: 10px 20px;
}
#nav-menu ul li a {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    position: relative;
}
#nav-menu ul Box {
    list-style: none;
    margin: 10px 20px;
}
Box {
    display: list-item;
    text-align: -webkit-match-parent;
}
#nav-menu ul Box Link {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    position: relative;
}
Link {
    cursor: pointer;
}
.hamburger {
    position: absolute;
    right: 5%;
    top: 28px;
    cursor: pointer;
    opacity: 0;
}
.hmline {
    width: 33px;
    height: 3px;
    background-color: white;
    margin: 5px 3px;
    border-radius: 4px;
}
.cross {
  
    position: absolute;
    right: 6%;
    top: 28px;
    cursor: pointer;
    opacity: 0;
}
.fa-solid, .fas {
    font-weight: 900;
}
.fa-2xl {
    font-size: 2em;
    line-height: .03125em;
    vertical-align: -0.1875em;
}
.fa-classic, .fa-regular, .fa-solid, .far, .fas {
    font-family: "Font Awesome 6 Free";
}
.fa, .fa-brands, .fa-classic, .fa-regular, .fa-sharp, .fa-solid, .fab, .far, .fas {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    display: var(--fa-display,inline-block);
    font-style: normal;
    font-variant: normal;
    line-height: 1;
    text-rendering: auto;
}

/* * {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
    scroll-behavior: smooth;
    scroll-padding-top: 79px;
}
div {
    display: block;
} */

 /* .logo {
    width: 60px;
    height:60px
} 
.nav_list_ul {
    display: flex;
}
* {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
    scroll-behavior: smooth;
    scroll-padding-top: 79px;
}
#nav-menu ul Box Heading Link {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    position: relative; 
} */

`;