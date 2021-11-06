import React from "react";
import { Box, Flex } from "@chakra-ui/react";

interface deleteProps {
  subMenu: string[]; // necessary field
}

const DropDown: React.FC<deleteProps> = ({ subMenu }) => {
  return (
    <Flex flexDirection="column" width="7rem" border="2px solid red" background="red">
      <Box
        border="2px solid black"
        width="2.5rem"
        height="2.5rem"
        transform="rotate(45deg)"
        margin="auto"
      ></Box>
      {subMenu.map((x) => (
        <Box
          width="100%"
          height="2.5vw"
          textAlign="center"
          position="relative"
          
          _before={{
            content:"",
            display:"block",
            positon: "absolute",
            height: "100rem",
            border: "1px solid black",
            width: "100%",

            backgroundColor: "red",
            
          }}
        >
          {x}
        </Box>
      ))}
    </Flex>
  );
};

export default DropDown;
