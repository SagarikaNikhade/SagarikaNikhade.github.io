import { SimpleGrid, Heading, Text, Box } from "@chakra-ui/react";
import html5 from "./Skillslogo/newIcons/html5.png";
import css3 from "./Skillslogo/newIcons/css3.png";
import github from "./Skillslogo/newIcons/git.png";
import javascript from "./Skillslogo/newIcons/javascript.png";
import mongodb from "./Skillslogo/newIcons/mongodb.png";
import nodejs from "./Skillslogo/newIcons/nodejs.png";
import react from "./Skillslogo/newIcons/react.png";
import redux from "./Skillslogo/newIcons/redux.png";
import typescript from "./Skillslogo/newIcons/typescript.png";
import ChakraUI from "./Skillslogo/newIcons/chakraUI.png";
import express from "./Skillslogo/newIcons/express.png";
import mongooseIcon from "./Skillslogo/newIcons/mongooseIcon.png";
import postman from "./Skillslogo/newIcons/postman.png";
import SkillsCard from "./SkillsCard";
import VsCode from "./Skillslogo/newIcons/VsCode.png"
import npm1 from "./Skillslogo/newIcons/npm1.png"

const SkillsArray = [
  { src: html5, title: "HTML" },
  { src: css3, title: "CSS" },
  { src: javascript, title: "JavaScript" },
  { src: mongodb, title: "MongoDb" },
  { src: nodejs, title: "NodeJs" },
  { src: react, title: "reactJs" },
  { src: redux, title: "Redux" },
  { src: typescript, title: "TypeScript" },
  { src: ChakraUI, title: "Chakra UI" },
  { src: express, title: "Express JS" },
  { src: mongooseIcon, title: "Mongoose" },
];

const ToolsArray = [
  { src: postman, title: "Postman" },
  { src: github, title: "GitHub" },
  {src:VsCode,title:"VScode"},
  {src:npm1,title:"NPM"}
];

const Skills = () => {
  // return (
  //   <Box id="skills">
  //   <Box style={{ backgroundColor: "#22201e" }} pt={10} id="Skills">
  //     <Text color={" #2b6cb0"} fontSize={"lg"} textAlign="center">
  //       What I know ?
  //     </Text>
  //     <Heading
  //       fontSize={{ base: "xl", md: "2xl", lg: "5xl" }}
  //       textAlign="center"
  //     >
  //       Tools & Technical Skills
  //     </Heading>

  //     <Box m={"auto"} border={"1px solid #2b6cb0"} w={"6%"} mb={3}></Box>
     
  //     <Box className="SkillContainer" z-index={1} margin="auto">
  //       <SimpleGrid columns={{base:2, sm:2, md:4, lg:6}} >
  //         {SkillsArray.map((el, i) => (
  //           <Box  key={i}>
  //             <SkillsCard IMAGE={el.src} title={el.title} />
  //           </Box>
  //         ))}
  //       </SimpleGrid>
  //     </Box>
  //   </Box>
  //   </Box>
  // );

  return (
    <Box id="skills">
      <Box style={{ backgroundColor: "#22201e" }} pt={10} id="Skills">
        <Text color={" #2b6cb0"} fontSize={"lg"} textAlign="center">
          What I know ?
        </Text>
        <Heading
          fontSize={{ base: "xl", md: "2xl", lg: "5xl" }}
          textAlign="center"
        >
          Technical Skills
        </Heading>

        <Box m={"auto"} border={"1px solid #2b6cb0"} w={"6%"} mb={3}></Box>

        <Box className="SkillContainer" zIndex={1} margin="auto">
          <SimpleGrid columns={{ base: 2, sm: 2, md: 4, lg: 6 }}>
            {SkillsArray.map((el, i) => (
              <Box key={i}>
                <SkillsCard IMAGE={el.src} title={el.title} />
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        <Heading
          fontSize={{ base: "xl", md: "2xl", lg: "5xl" }}
          textAlign="center"
          mt={10}
        >
          Technical Tools
        </Heading>

        <Box m={"auto"} border={"1px solid #2b6cb0"} w={"6%"} mb={3}></Box>

        <Box className="ToolContainer" zIndex={1} margin="auto">
          <SimpleGrid columns={{ base: 2, sm: 2, md: 4, lg: 6 }}>
            {ToolsArray.map((el, i) => (
              <Box key={i}>
                <SkillsCard IMAGE={el.src} title={el.title} />
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};
export default Skills;
