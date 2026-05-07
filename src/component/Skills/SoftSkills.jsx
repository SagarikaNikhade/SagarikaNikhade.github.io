import {
  Box,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

export default function SoftSkills({ title }) {
  const [isHovering, setHovering] = useState(false);

  const handleMouseEnter = () => {
    setHovering(true);
  }
  const handleMouseLeave = () => {
    setHovering(false);
  }

  return (
    <VStack py={8}>
      {/* <Box
        position={"relative"}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        transition="all 0.3s ease"
        transform={isHovering ? "scale(1.05)" : "scale(1)"}
        boxShadow={
          isHovering
            ? "0px 0px 15px rgba(255, 255, 255, 0.6)"
            : "0px 0px 5px rgba(255, 255, 255, 0.2)"
        }
        borderRadius={"15px"}
        width={"180px"}
        height={"100px"}
        bg="rgba(255, 255, 255, 0.08)" // transparent white
        backdropFilter="blur(10px)"
        border="1px solid rgba(255,255,255,0.2)"
        textAlign="center"
        p={5}
      > */}
      <Box className="skills-card"
        position={"relative"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        transition={'top ease 0.5s'}
        boxSize={isHovering ? "120%" : "100%"}
        boxShadow={isHovering ? "-1px -1px 5px 3px #1f08eb" : ""}

        borderRadius={"15px"}
        width={"150px"}
        height={"170px"}
        bgColor={"black"}
        textAlign="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={5}
      >
        <Text
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