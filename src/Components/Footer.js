import React from 'react'
import {
    Box,
    Flex,
    Text,
    useColorMode,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react';

function Footer() {
    const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'center'}>
          <Text>جميع الحقوق محفوظة للاتحاد السعودي للأمن السيبراني والبرمجة والدرونز 2021</Text>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}></Stack>
          </Flex>
        </Flex>
      </Box>
    </div>
  )
}

export default Footer