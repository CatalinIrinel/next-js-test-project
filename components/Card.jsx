import { Box, Heading, Image } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const Card = ({ card }) => {
  return (
    <Link href={`/coffee-store/${card.id}`}>
      <Box
        cursor={'pointer'}
        padding={'1rem'}
        w={['300px', 'full']}
        maxW={['300px', '400px']}
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        flexDir={'column'}
        bgColor={'rgba(255,255,255,0.2)'}
        gap={'1rem'}
        borderRadius={'1rem'}
        backdropFilter={'blur(16px)'}
        boxShadow={' 0 .25rem 2rem rgba(0,0,0,0.25)'}
        border={'1px solid #fff'}
      >
        <Image
          boxSize={'300px'}
          borderRadius={'.6rem'}
          objectFit={'contain'}
          objectPosition={'center'}
          src={'/images/svg-2.svg'}
          alt={'test'}
        />
        <Box
          textAlign={'center'}
          gap={'1rem'}
          display={'flex'}
          flexDir={'column'}
          mb={[0, '1rem']}
        >
          <Heading as={'h2'} textDecoration={'underline'}>
            {card.name}
          </Heading>
        </Box>
      </Box>
    </Link>
  );
};

export default Card;
