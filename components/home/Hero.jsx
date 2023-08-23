import React from 'react';
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { FullBox } from '../componentStyle/fullBox';
import Image from 'next/image';

function Hero(props) {
  return (
    <FullBox height={'100vh'}>
      <FullBox
        variant={'wrapperSmall'}
        alignItems={['center', null, null, 'flex-start']}
        flexDir={'column'}
        gap={['1rem']}
        textAlign={['center', 'left']}
        color={'light'}
      >
        <Box
          textAlign={['center', null, null, 'left']}
          color={'lighter'}
          w={'fit-content'}
          letterSpacing={'4px'}
          textShadow={['', null, null, '1rem .5rem .9rem  #915a3c']}
        >
          <Heading
            as={'h1'}
            fontSize={['2.5rem', '3rem', '5rem', null, '5.5rem', '7rem']}
          >
            Coffee{' '}
          </Heading>
          <Heading
            as={'h1'}
            fontSize={['2.5rem', '3rem', '5rem', null, '5.5rem', '7rem']}
            color={'secondary'}
          >
            Connoiseur
          </Heading>
        </Box>
        <Text
          mb={'1rem'}
          color={'secondary'}
          fontSize={['1.2rem', '1.5rem', '1.8rem', null, '2rem']}
        >
          Discover your local coffee shops!
        </Text>
        <Button
          w={'200px'}
          h={'50px'}
          _hover={'none'}
          background={'secondary'}
          fontWeight={'800'}
          color={'#fff'}
          borderRadius={'0 0 1rem 1rem '}
          onClick={props.buttonHandler}
        >
          View stores nearby
        </Button>
      </FullBox>
      <FullBox variant={'wrapperSmall'} maxWidth={['300px', null, '700px']}>
        <Image
          width={700}
          height={400}
          src={'/images/svg-2.svg'}
          alt="Coffee GO "
        />
      </FullBox>
    </FullBox>
  );
}

export default Hero;
