import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

function Footer() {
  return (
    <Box
      w={'full'}
      bgColor={'primary'}
      color={'light'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Box
        maxW={'1600px'}
        w={'full'}
        height={['fit-content', '100px']}
        display={'flex'}
        justifyContent={'space-between'}
        gap={['2rem', 0]}
        alignItems={'center'}
        textAlign={'center'}
        padding={'2rem 4rem'}
        flexWrap={'wrap'}
      >
        <Heading as={'h3'} w={['full', 'fit-content']} fontSize={'1rem'}>
          Here will be a logo
        </Heading>
        <Heading as={'h3'} w={['full', 'fit-content']} fontSize={'1rem'}>
          All rights reserved
        </Heading>
        <Heading as={'h3'} w={['full', 'fit-content']} fontSize={'1rem'}>
          Here will be social media
        </Heading>
      </Box>
    </Box>
  );
}

export default Footer;
