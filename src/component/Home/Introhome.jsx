import { ColorfullCSS } from "../styles/styles";
import { Link } from "react-scroll";
// import SagarikaP from "./SagarikaP.pdf";
import { DownloadIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

export default function Introhome() {
  const [text, setText] = useState("");
  const [fullText] = useState("Hello , I'm");
  const [index, setIndex] = useState(0);
  // RESUME
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);

  function handleResume() {
    window.open("https://drive.google.com/file/d/1n_XGo64QxCUY8ecaUfluKzJlEssz3duz/view?usp=sharing");
   }

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 200);
    }
  }, [index]);


  // const handleClick = () => {
  //   window.open(Sagarika_Nikhade_Resume, "_blank", "noreferrer");
  //   // return <Navigate to={Sagarika_Nikhade_Resume} />;
  // };

  return (
    <Box id='home'>
      <Box mt={0} pt={11} pb={12} bgImg={ColorfullCSS.background_img} id="Home">
        <Stack
          pb={15}
          minH={"60vh"}
          spacing={"-1"}
          direction={["column", "column", "column", "row", "row", "row"]}
        >
          <Flex
            pt="6%"
            pb={"6%"}
            flex={1}
            align={"center"}
            justify={"center"}
            pl={3}
          >
            <Stack spacing={6} w={"full"} maxW={"lg"} textAlign="center">
              <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                <Text
                  as={"span"}
                  position={"relative"}
                  _after={{
                    content: "''",
                    width: "full",
                    height: useBreakpointValue({ base: "20%", md: "30%" }),
                    position: "absolute",
                    bottom: 1,
                    left: 0,
                    bg: "#2b6cb0",
                    zIndex: -1,
                  }}
                >
                  {text}
                </Text>
                <br />{" "}
                <Text color={"#2b6cb0"} as={"span"} animation={""} id="user-detail-name">
                  Sagarika Nikhade
                </Text>{" "}
              </Heading>
              <Text
                fontSize={{ base: "xl", lg: "lg", md: "lg" }}
                fontWeight={700}
                color={"white.500"}
                id="user-detail-intro"
              >
                Full Stack Web Developer
              </Text>
              <Stack
                direction={{ base: "column", md: "row" }}
                align={"center"}
                justifyContent={"center"}
                spacing={6}
              >

                 {" "}
                <Button
                id="resume-button-2"
                  // onClick={handleClick}
                  rounded={"full"}
                  bg={"#2b6cb0"}
                  color={"white"}
                  _hover={{
                    bg: "#2b6cb0",
                  }}
                  onClick={handleResume}
                >
                  <a
                //  href={SagarikaP} 
                href="https://drive.google.com/file/d/1n_XGo64QxCUY8ecaUfluKzJlEssz3duz/view?usp=sharing"
                 download={true} target='_blank'
                id="resume-link-2"
                onClick={click ? handleClick : null}
              >
                <DownloadIcon /> Resume
              </a>
      
                </Button>

                <Link
                  to="Contact"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={1000}
                >
                  <Button color={"#2b6cb0"} rounded={"full"}>
                    Contact
                  </Button>
                </Link>
              </Stack>
            </Stack>
          </Flex>
        </Stack>
      </Box>
    </Box>
  );
}
