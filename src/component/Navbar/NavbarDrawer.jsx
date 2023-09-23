import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  Box,
  Button,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { Link } from "react-scroll";
import React from 'react'

import { HiMenu } from "react-icons/hi";

const NavbarDrawer = ({ isOpen, onOpen, onClose }) => {
  return (
    <Box
      display={{ sm: "block", base: "block", md: "block", lg: "none" }}
      pr={[2, null, 4]}
    >
      <Button colorScheme="blue" onClick={onOpen}>
        <HiMenu boxsize={6} w={12} h={12} color={"white"} />
      </Button>

      <Drawer
        color={"white"}
        placement={"left"}
        onClose={onClose}
        isOpen={isOpen}
        
        size={["full", "2xl", "sm", "xs"]}
      >
        <DrawerOverlay />
        <DrawerContent color={"white"} fontSize={"30px"} fontWeight={600}>
          <DrawerCloseButton />
          
          <DrawerBody bg={"#22201e"}>
            <Box cursor={"pointer"} mt="10px" mb="10px">
              <Link
                to="Home"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
                textDecoration="none"
              >
                Home
              </Link>
            </Box>{" "}
            <Box cursor={"pointer"} mt="10px" mb="10px">
              <Link
                to="About"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
                textDecoration="none"
              >
                About me
              </Link>
            </Box>
            <Box cursor={"pointer"} mt="10px" mb="10px">
              <Link
                to="Skills"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
                textDecoration="none"
              >
                Skills
              </Link>
            </Box>
            <Box cursor={"pointer"} mt="10px" mb="10px">
              <Link
                to="Projects"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
                textDecoration="none"
              >
                Project
              </Link>
            </Box>
            <Box cursor={"pointer"} mt="10px" mb="10px">
              <Link
                to="Contact"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
                textDecoration="none"
              >
                Contact
              </Link>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default NavbarDrawer
