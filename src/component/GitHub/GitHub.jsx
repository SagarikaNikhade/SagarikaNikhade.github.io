import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";

const GitHub = () => {
  return (
    <Box mb={6} p={6} bg="#22201e">
      <Box textAlign={"center"}>
        <Text color={"#2b6cb0"}>MY GITHUB</Text>
        <Heading fontSize={{ base: "xl", md: "2xl", lg: "5xl" }}>
          Calender & Stats
        </Heading>
        <Box m={"auto"} border={"2px solid #2b6cb0"} w={"10%"} mt={3}></Box>
      </Box>
      <br />
      <Flex justifyContent={"center"} pb={6} pt={6} className="react-activity-calendar" >
        <GitHubCalendar username="wave2211" blockSize={16} fontSize={16} />
      </Flex>
      <Flex justifyContent={"center"} pb={6} pt={6}>
        <Image  id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com/?user=wave2211&theme=dark"></Image>
      </Flex>
      <Flex justifyContent={"center"} pb={6} pt={6}>
        <Image  id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=wave2211&theme=dark&show_icons=true"></Image>
      </Flex>
      <Flex justifyContent={"center"} pb={6} pt={6}>
        <Image   id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=wave2211&layout=compact"></Image>
      </Flex>
    </Box>
  );
};
export default GitHub;
