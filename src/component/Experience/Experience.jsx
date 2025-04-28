import {
    Box,
    Flex,
    Heading,
    Text,
    Stack,
    Badge,
    Icon,
    useColorModeValue,
    HStack,
  } from "@chakra-ui/react";
  import { CalendarIcon } from "@chakra-ui/icons";
  
  export default function Experience() {
    const techStack = [
      "JavaScript", "React", "Redux", "TypeScript", "Chakra UI", "Next UI", 
      "TailwindCSS", "Node.js", "Express JS", 
      "MongoDB", "FastAPI", "Chrome Extension", "Playwright"
    ];
  
    return (
        <Box id="experience" className="experience section">
            <Box id={"Experience"} bg="#22201e" py={16}>
        {/* Section Header */}
        <Stack
          w={{ base: "90%", md: "70%", lg: "50%" }}
          mx="auto"
          alignItems="center"
          justifyContent="center"
          spacing={4}
          mb={16}
        >
          <Text color="#3182ce" fontWeight="medium">My Experience</Text>
          <Heading 
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} 
            color="white"
            textAlign="center"
          >
            Professional Experience
          </Heading>
          <Box mt={"2%"} border={"1px solid #2b6cb0"} w={"15%"}></Box>
          {/* <Center>
            <Divider w="60px" borderColor="#3182ce" borderWidth={2} mt={2} mb={6} />
          </Center> */}
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color={"white"}
            textAlign="center"
          >
            My journey as a developer, showcasing my professional growth, technical skills, and key 
            projects that have shaped my career.
          </Text>
        </Stack>
  
        {/* Experience Card */}
        <Box
          w={{ base: "90%", md: "80%", lg: "90%" }}
          maxW="1200px"
          mx="auto"
          p={6}
          borderRadius="lg"
          border="1px solid"
          borderColor="#1a365d"
        //   bg="#0f1826"
        bg={useColorModeValue("black", "white.800")}
          boxShadow="0 0 20px rgba(49, 130, 206, 0.3)"
        >
          <Flex 
            direction={{ base: "column", lg: "row" }}
            justify="space-between"
            align={{ base: "flex-start", lg: "center" }}
            mb={4}
          >
            <Box>
              <Heading 
                fontSize={{ base: "xl", md: "2xl" }} 
                color="#2b6cb0"
                mb={1}
              >
                Junior Software Developer(MERN)
              </Heading>
              <Text color="white" fontSize="lg" fontWeight="bold">
                Hushl Innovation Pvt. Ltd.
              </Text>
            </Box>
            <HStack spacing={2} color="white" mt={{ base: 2, lg: 0 }}>
              <CalendarIcon />
              <Text>Dec 2023 - Apr 2025</Text>
            </HStack>
          </Flex>
  
          <Text color={"white"} mb={6}>
          Designed and implemented the DeliveryPlus Dashboard’s frontend architecture, ensuring high scalability, intuitive user interfaces, and robust testing practices in close partnership with cross-functional teams.
            </Text>
  
          <Box>
            <HStack mb={3} align="center">
              <Icon viewBox="0 0 24 24" color="#3182ce">
                <path
                  fill="currentColor"
                  d="M12 16.5l4-4h-3v-9h-2v9H8l4 4zm9-13v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V3.5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2zm-2 0H5v14h14v-14z"
                />
              </Icon>
              <Text color={"white"} fontWeight="medium">Tech Stack</Text>
            </HStack>
            <Flex flexWrap="wrap" gap={2}>
              {techStack.map((tech, index) => (
                <Badge
                  key={index}
                  px={3}
                  py={1}
                  borderRadius="md"
                  colorScheme="blue"
                  variant="outline"
                  fontSize="xs"
                >
                  {tech}
                </Badge>
              ))}
            </Flex>
          </Box>
        </Box>
      </Box>
        </Box>
    );
  }