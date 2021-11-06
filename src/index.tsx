import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import theme from "./theme";

import DropDown from "./components/atoms/Atom/DropDown";
import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    {/* <Flex
      flexDirection={['column', 'column', 'row']}
      height='100vh'
      width={["100%"]}
      backgroundColor='black' >
      <Box _hover={{ backgroundColor: '#fff'}} width={20} height={20} bg='aqua' m={5}></Box>
      <Box width={20} height={20} bg='aqua' m={5}></Box>
    </Flex> */}
    <Box display="flex" justifyContent="center" alignItems="center" margin="10%"> 
    <DropDown subMenu={["Work1", "Work2", "Work3"]}></DropDown></Box>
  </ChakraProvider>,
  document.getElementById("root")
);
