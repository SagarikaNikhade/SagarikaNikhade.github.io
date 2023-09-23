import { Box, Button, Flex, HStack, Heading, Spacer, useDisclosure, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-scroll";
import Sagarika_Nikhade_Resume from "./Sagarika_Nikhade_Resume.pdf";
import NavbarDrawer from "./NavbarDrawer";

const Navbar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
    // RESUME
    const [click, setClick] = React.useState(false);
    const handleClick = () => setClick(!click);

    function handleResume() {
      window.open("https://drive.google.com/file/d/1wdvRe1jUn7x-yRxI1aFdAQcAx_ZP_UtJ/view?usp=sharing");
     }

  return (
    <Box id="nav-menu"
      bg={"#22201e"}
      position="sticky"
      top="0"
      zIndex="100"
      boxShadow="rgba(61, 61, 148, 0.25) 0px 6px 12px -2px, rgba(34, 30, 30, 0.3) 0px 3px 7px -3px"
    >
      <Flex alignItems="center" justifyContent={"space-between"}>
        <Link to="Home" spy={true} smooth={true} offset={-40} duration={500}>
          {/* <NavbarLogo /> */}
          <Heading as='h1' css={{
            '&:first-letter': {
              fontSize: 'md',
              color: '#2b6cb0'
            }
          }}>Sagarika</Heading>
        </Link>
        {isOpen ? <Spacer /> : null}
        <HStack
          pr={10}
          spacing={[6, 8, 10, 10]}
          display={{ sm: "none", base: "none", md: "none", lg: "flex" }}
          fontSize="20px"
        >
          <Box cursor={"pointer"}>
            <Link
              className="nav-link home"
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
          <Box cursor={"pointer"}>
            <Link
              className="nav-link about"
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
          <Box cursor={"pointer"}>
            <Link
              className="nav-link skills"
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
          <Box cursor={"pointer"}>
            <Link
              className="nav-link projects"
              to="Projects"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
              textDecoration="none"
              cu
            >
              Project
            </Link>
          </Box>
          <Box cursor={"pointer"}>
            <Link
              className="nav-link contact"
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
        </HStack>
        <Box cursor={"pointer"} pr={4}>
          <a href={Sagarika_Nikhade_Resume} download={true} target='_blank'onClick={click ? handleClick : null} className="nav-link resume" id="resume-link-1">
            <Button id="resume-button-1" onClick={handleResume} bg={"#2b6cb0"} fontSize={["24px", "20px", "16px"]}>
              Resume
            </Button>
          </a>
        </Box>
        <NavbarDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      </Flex>
    </Box>
  );
};

export default Navbar;
