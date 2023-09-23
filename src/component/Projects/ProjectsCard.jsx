import {
  Box,
  Center,
  useColorModeValue,
  Text,
  Stack,
  Image,
  WrapItem,
  Wrap,
  Button,
  Link,
  Heading,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function ProjectsCard({
  
  IMAGE,
  NAME,
  TECHSTACK,
  DISCRIPTION,
  GITHUB,
  DEPLOY,
  
}) {
  return (
    <Center py={12} key={NAME+"b"} className="project-card">
      <Box
        role={"group"}
        p={6}
        maxW={"400px"}
        w={"full"}
        bg={useColorModeValue("black", "white.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            width={"100%"}
            overflow={"hidden"}
            rounded={"lg"}
            height={230}
            transition={"background-color 2s ease-out 100ms"}
            _hover={{
              height: 240,
            }}
            objectFit={"cover"}
            src={IMAGE}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Heading color={"#2b6cb0"} fontSize={"xl"} className="project-title">
            {NAME}
          </Heading>
          <Text color={"white.600"} fontFamily={"body"} className="project-description">
            {DISCRIPTION}
          </Text>

          <Stack direction={"row"} color={"white.600"} align={"left"}>
           
            <Wrap spacing="10px" justify="center" h={"60px"} className="project-tech-stack">
              {TECHSTACK.map((el,i) => (
                <WrapItem key={i+"abc"}>
                  <Center
                    variant="solid"
                    fontWeight={600}
                    w="100px"
                    h="20px"
                    bg="#2b6cb0"
                    p={"3"}
                    borderRadius="8px"
                  >
                    {el}
                  </Center>
                </WrapItem>
              ))}
            </Wrap>
          </Stack>

          <Stack direction="row" spacing={6}>
            <Link href={GITHUB} isExternal textDecoration="none" className="project-github-link">
              <Button
                textDecoration="none"
                leftIcon={<FaGithub />}
                colorScheme="pink"
                bg="#2b6cb0"
                variant="solid"
              >
                Github
              </Button>
            </Link>
            <Link href={DEPLOY} isExternal textDecoration="none" className="project-deployed-link">
              {" "}
              <Button
                textDecoration="none"
                rightIcon={<ExternalLinkIcon />}
                colorScheme="blue"
                variant="outline"
              >
                See Project
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
