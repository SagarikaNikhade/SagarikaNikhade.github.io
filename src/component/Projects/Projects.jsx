import { Box, SimpleGrid, Text, Stack, Heading } from "@chakra-ui/react";
import CraftVilla from "./projectImage/CraftVilla.png";
import Jefit from "./projectImage/Jefit.png";
import Flowery from "./projectImage/Flowery.png";
import Royal from "./projectImage/Royal.png";
import ProjectsCard from "./ProjectsCard";
import Fortisi from "./projectImage/fortisi.png";
import Green from "./projectImage/Green.png";

const ProjectsDetails = [
  {
    IMAGE: Jefit,
    NAME: "Jefit.com (Clone)",
    TECHSTACK: ["HTML", "CSS", "JavaScript"],
    DISCRIPTION:
      "Jefit is an award winning social workout tracking platform that keeps gym goers stay motivated by tracking and analyzing their fitness goals.",
    GITHUB: "https://github.com/SagarikaNikhade/Fitness-club--Jefit-clone",
    DEPLOY: "https://zesty-strudel-fdfb40.netlify.app/",
  },
  {
    IMAGE: CraftVilla,
    NAME: "CraftVilla.com (Clone)",
    TECHSTACK: ["HTML", "CSS", "JavaScript"],
    DISCRIPTION:
      "This is the clone of CraftVilla which is an e-commerce website providing fashion related products.",
    GITHUB:
      "https://github.com/SagarikaNikhade/Crafts-Bazzar--Craftsvilla-clone",
    DEPLOY: "https://genuine-bavarois-d93c8f.netlify.app/",
  },
  {
    IMAGE: Flowery,
    NAME: "Uboric.com (Clone)",
    TECHSTACK: ["HTML", "CSS", "JavaScript"],
    DISCRIPTION:
      "This is the clone of Uboric.com which is an e-commerce website.",
    GITHUB: "https://github.com/SagarikaNikhade/Uboric-clone",
    DEPLOY: "https://incredible-narwhal-e7792c.netlify.app/",
  },
  {
    IMAGE: Royal,
    NAME: "Charlestyrwhitt.com (Clone)",
    TECHSTACK: ["CSS", "JavaScript","Chakra-UI","React"],
    DISCRIPTION:
      "This is the clone of Charlestyrwhitt.com is an e-commerce website.",
    GITHUB: "https://github.com/SagarikaNikhade/Royal-Outfizz--Charlestyrwhitt-clone",
    DEPLOY: "https://sprightly-clafoutis-01b434.netlify.app/",
  },
  {
    IMAGE: Fortisi,
    NAME: "Urban Ladder.com (Clone)",
    TECHSTACK: ["CSS", "JavaScript","Chakra-UI","React","Mongodb","Mongoose","Node"],
    DISCRIPTION:
      "Urban Ladder is an omnichannel furniture and decor retailer based out of Bangalore, India. ",
    GITHUB: "https://github.com/SagarikaNikhade/furniture--Urban_Ladder-clone",
    DEPLOY: "https://sensational-starship-ce568f.netlify.app/",
  },
  {
    IMAGE: Green,
    NAME: "Nurserylive.com (Clone)",
    TECHSTACK: ["CSS", "JavaScript","Chakra-UI","React","Redux"],
    DISCRIPTION:
      "Green-Planet is clone of Nurserylive, is a plant nursery store that provides wide range of natural plants and accessories products.",
    GITHUB: "https://github.com/SagarikaNikhade/green-planet--Nurserylive.com-clone",
    DEPLOY: "https://frabjous-gecko-000ac5.netlify.app/",
  }
];

export default function Projects() {
  return (
    <Box id="projects">
    <Box bg={"#22201e"} p={4} id="Projects">
      <br />

      <Stack w={"50%"} m={"auto"} align={"center"} justifyContent={"center"}>
        <Text color={"#2b6cb0"}>MY WORK</Text>
        <Heading fontSize={{ base: "xl", md: "2xl", lg: "5xl" }}>
          Creative Projects
        </Heading>
        <Box mt={"5%"} border={"1px solid #2b6cb0"} w={"10%"}></Box>
      </Stack>
      <br />
      <br />
      <br />
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5} >
        {ProjectsDetails.map((item, i) => (
          <ProjectsCard
        
            IMAGE={item.IMAGE}
            NAME={item.NAME}
            TECHSTACK={item.TECHSTACK}
            DISCRIPTION={item.DISCRIPTION}
            GITHUB={item.GITHUB}
            DEPLOY={item.DEPLOY}
          />
        ))}
      </SimpleGrid>
    </Box>
    </Box>
  );
}
