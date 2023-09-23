import {
  Box,
  Center,
  Text,
  Image,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

export default function SkillsCard({ IMAGE, title }) {
   const [isHovering, setHovering] = useState("");

   const handleMouseEnter = () =>{
     setHovering(true);
   }
   const handleMouseLeave = () => {
     setHovering(false);
   }
  return (
    <VStack py={8} className="skills-card">
      <Box className="skills-card"
      position={"relative"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        transition={'top ease 0.5s'}
     boxSize={isHovering?"120%":"100%"}
            boxShadow= {isHovering ?"-1px -1px 5px 3px #1f08eb":""}
         
        borderRadius={"15px"}
        width={"150px"}
        height={"170px"}
        bgColor={"black"}
        textAlign="center"
        p={5}
      >
        <Center>
          <Image
          className="skills-card-img"
            rounded={"lg"}
            width={"100px"}
            height={"100px"}
            objectFit={"cover"}
            src={IMAGE}
          />
        </Center>
        <Text
        className="skills-card-name"
          color={"white"}
          fontSize={["30px", "24px", "20px", "20px", "18px", "18px"]}
          fontWeight={"600"}
          py={2}
        >
          {title}
        </Text>
      </Box>
    </VStack>
  );
}
