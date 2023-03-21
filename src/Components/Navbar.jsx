import React from "react";
import { Link } from "react-router-dom";
import { Flex, Spacer, Box, Heading, ButtonGroup, Button } from '@chakra-ui/react';

export const Navbar = () => {
  return (
    <Flex id="nav-menu" marginTop='10px' minWidth='max-content' alignItems='center' gap='2' borderBottom="1px solid grey">
      <Box p='2'>
        <Heading size='md'>LOGO</Heading>
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
      <ButtonGroup gap='2'>
        <Button colorScheme='teal'><Link className="nav-link resume" to={"/resume"}>Resume</Link></Button>
      </ButtonGroup>
    </Flex>
    )
};
