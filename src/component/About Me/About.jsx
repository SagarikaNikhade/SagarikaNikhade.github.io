import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import SagarikaP from "../Home/SagarikaP.jpeg";

export default function About() {
  return (
    <Box id="about" className="about section">
      <Box bg={"#22201e"} id={"About"}>
        <br />
        <br />
        <Stack
          w={"50%"}
          m={"auto"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text color={" #2b6cb0"}>WHO AM I ?</Text>
          <Heading fontSize={{ base: "xl", md: "2xl", lg: "5xl" }}>
            About Me
          </Heading>
          <Box mt={"2%"} border={"1px solid #2b6cb0"} w={"15%"}></Box>
        </Stack>
        <Stack
          minH={"50vh"}
          direction={["column", "column", "column", "row", "row", "row"]}
        >
          <Flex
            flex={1}
            justifyContent={"center"}
            alignItems={"center"}
            pt="6%"
            pb={"6%"}
            border={"0px solid red"}
          >
            <Box
              m="0"
              p="0"
              width={"50%"}
              borderTopLeftRadius={"20%"}
              borderBottomRightRadius={"20%"}
              boxShadow="-1px -1px 5px 5px #1f08eb"
            >
              <Image
                className="home-img"
                p={"3%"}
                width="100%"
                overflow={"hidden"}
                borderTopLeftRadius={"20%"}
                borderBottomRightRadius={"20%"}
                // borderRadius="50%"
                sizes={{ base: "60%", md: "70%", lg: "70%" }}
                alt={"Login Image"}
                src={SagarikaP}
              />
            </Box>
          </Flex>

          <Flex
            p={8}
            flex={1}
            justifyContent={{ base: "center", md: "center", lg: "left" }}
            alignItems={{ base: "center", md: "center", lg: "left" }}
            pt="6%"
            pb={"6%"}
          >
            <Box>
              <Stack spacing={6} w={"full"} maxW={"lg"}>
                <Heading
                  fontSize={{ base: "xl", md: "2xl", lg: "2xl" }}
                  textAlign={"left"}
                  color="#2b6cb0"
                >
                  <Text
                    id="user-detail-name"
                    as={"span"}
                    position={"relative"}
                    _after={{
                      content: "''",
                      width: "full",
                      height: useBreakpointValue({ base: "20%", md: "30%" }),
                      position: "absolute",
                      bottom: 1,
                      left: 0,
                      bg: "blue.400",
                      zIndex: -1,
                    }}
                  >
                    Sagarika Nikhade
                  </Text>
                  <br />{" "}
                </Heading>
                <Text
                  id="user-detail-intro"
                  fontSize={["22px", "3xl", "lg"]}
                  color={"white"}
                  textAlign={{ base: "center", md: "left" }}
                >
                  Full Stack Developer (MERN) with 2+ years of experience in building scalable web and mobile applications using React.js, Next.js, React
                  Native and Node.js. Skilled in developing responsive user interfaces, RESTful APIs and real-time systems. Experienced in API integration,
                  authentication and performance optimization, with a focus on delivering efficient and user-centric solutions.
                </Text>
              </Stack>
            </Box>
          </Flex>
        </Stack>
      </Box>
    </Box>
  );
}
