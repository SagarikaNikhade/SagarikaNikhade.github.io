import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import sagaLogo from "./sagaLogo.png";

const NavbarLogo = () => {
  return (
    <Box pl={3} width="100px">
      <Image
        src={sagaLogo}
        cursor={"pointer"}
        // borderRadius={"50%"}
        overflow="hidden"
        width={"150px"}
        p="5px"
        h={"60px"}
      ></Image>
    </Box>
  );
}

export default NavbarLogo
