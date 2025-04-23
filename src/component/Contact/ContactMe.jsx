import {
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Link,
  Center,
} from "@chakra-ui/react";
import { AiOutlineLinkedin } from "react-icons/ai";

import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import React from "react";

const Contact = () => {
  return (
    <Box id="contact">
    <Box p={12} bg={"#22201e"} id="Contact">
      <Text color={"#2b6cb0"} textAlign="center" pb={3}>
        GET IN TOUCH
      </Text>
      <Heading
        textAlign={"center"}
        fontSize={{ base: "xl", md: "2xl", lg: "5xl" }}
        pb="3"
      >
        Conatct Me
      </Heading>
      <Box mt={"2%"} border={"1px solid #2b6cb0"} w={"10%"} m="auto"></Box>
      <br />
      <br />
    
      <Center>
        <Box maxW="40%">
          <VStack
            pl={0}
            spacing={3}
            alignItems="flex-start"
            justifyContent={"left"}
          >
            <Heading fontSize="xl">Hello !</Heading>
            <Text>
              {" "}
              If you like to know more about my work,feel free to get in touch using your preferred
              medium.
            </Text>
            <Button
              size="md"
              height="48px"
              width="240px"
              variant="ghost"
              color="#DCE2FF"
              _hover={{ border: "2px solid #1C6FEB" }}
              leftIcon={<MdPhone color="#1970F1" size="20px" />}
              id="contact-phone"
            >
              +91-9307347736
            </Button>
            <Button
             id="contact-email"
              size="md"
              height="48px"
              width="265px"
              variant="ghost"
              color="#DCE2FF"
              _hover={{ border: "2px solid #1C6FEB" }}
              leftIcon={<MdEmail color="#1970F1" size="20px" />}
            >
              sagarikanikhade073@gmail.com
            </Button>
            <Button
              size="md"
              height="48px"
              width="265px"
              variant="ghost"
              color="#DCE2FF"
              _hover={{ border: "2px solid #1C6FEB" }}
              leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
            >
              Chandrapur, Maharashtra, India
            </Button>
          </VStack>
          <HStack
            mt={{ lg: 10, md: 10 }}
            spacing={5}
            px={5}
            alignItems="flex-start"
          >
            <Link
             id="contact-linkedin"
              href="https://www.linkedin.com/in/sagarika-nikhade-1b137b268/"
              isExternal
            >
              {" "}
              <IconButton
                aria-label="facebook"
                variant="ghost"
                size="lg"
                isRound={true}
                _hover={{ bg: "#0D74FF" }}
                icon={<AiOutlineLinkedin size="28px" />}
              />
            </Link>
            <Link  id="contact-github" href="https://github.com/SagarikaNikhade" isExternal>
              <IconButton
                aria-label="github"
                variant="ghost"
                size="lg"
                isRound={true}
                _hover={{ bg: "#0D74FF" }}
                icon={<BsGithub size="28px" />}
              />
            </Link>
            <Link id="contact-email" href="mailto:sagarikanikhade073@gmail.com">
              <IconButton
                aria-label="discord"
                variant="ghost"
                size="lg"
                isRound={true}
                _hover={{ bg: "#0D74FF" }}
                icon={<MdEmail size="28px" />}
              />
            </Link>
          </HStack>
        </Box>

       
        </Center>
        </Box>
    </Box>
  );
};

export default Contact;
