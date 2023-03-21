import React from "react";
import { Link } from "react-router-dom";
import {Spacer, Box, Heading,Button, Image } from '@chakra-ui/react';
import styled from "styled-components";

export const Navbar = () => {
  return (
    <DIV id="nav-menu">
      <Box p='2'>
        <Image src='' alt='' />
      </Box>
      <Spacer />
      <Box p='2'>
        <Heading size='md'><Link className="nav-link home" to={"/"}>Home</Link></Heading>
      </Box>
      <Box p='2'>
        <Heading size='md'><Link className="nav-link about" to={"/abouts"}>About</Link></Heading>
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
      <Box>
        <Button colorScheme='teal'><Link className="nav-link resume" to={"/resume"}>Resume</Link></Button>
      </Box>
    </DIV>
  )
};

const DIV = styled.div`
 display:flex;
`;