import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import theme from './theme';

import { ChakraProvider, Flex, Box } from '@chakra-ui/react';


ReactDOM.render(
  <ChakraProvider theme={theme}>

    <Flex
      flexDirection={['column', 'column', 'row']}
      height='100vh'
      width={["100%"]}
      backgroundColor='black' >

      {/* <Box  ></Box> */}
      <Box _hover={{ backgroundColor: '#fff'}} width={20} height={20} bg='aqua' m={5}></Box>
      <Box width={20} height={20} bg='aqua' m={5}></Box>
      <Box width={20} height={20} bg='aqua' m={5}></Box>
      <Box width={20} height={20} bg='aqua' m={5}></Box>
      <Box width={20} height={20} bg='aqua' m={5}></Box>
    </Flex>

  </ChakraProvider>,
  document.getElementById('root')
);

