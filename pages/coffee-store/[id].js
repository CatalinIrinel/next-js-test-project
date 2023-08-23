import { Box, Heading, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { FullBox } from '../../components/componentStyle/fullBox';

import { ArrowBackIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import Image from 'next/image';
import { MdLocationOn } from 'react-icons/md';

const CoffeeStore = () => {
  const router = useRouter();

  return (
    <FullBox variant={'container'} pt={'3rem'}>
      <FullBox
        variant={'wrapper'}
        color={'light'}
        flexDir={'column'}
        alignItems={['center', null, null, 'flex-start']}
        gap={'5rem'}
      >
        <Box
          w={'full'}
          fontSize={['1.5rem', '2rem']}
          display={['flex', null, null, 'block']}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Link href={'/coffee-store'}>
            <Text
              w={'fit-content'}
              cursor={'pointer'}
              color={'secondary'}
              border={'2px solid transparent'}
              transition={'all .1s ease-in-out'}
              _hover={{ borderBottom: '2px solid #fff' }}
            >
              <ArrowBackIcon />
              Back to coffee shops
            </Text>
          </Link>
        </Box>
        <Box
          w={'full'}
          display={'flex'}
          justifyContent={['center', null, null, 'space-between']}
          alignItems={'center'}
          flexWrap={'wrap'}
          gap={['3rem', null, null, 0]}
        >
          <FullBox variant={'wrapperSmall'} height={'fit-content'}>
            <Image
              width={'500px'}
              height={'300px'}
              src="/images/svg-2.svg"
              alt={'enter coffee shop name'}
            />
          </FullBox>
          <FullBox
            variant={'glass'}
            maxW={'500px'}
            padding={['2rem', '2rem 4rem']}
            height={['fit-content']}
            flexDir={'column'}
            alignItems={'flex-start'}
            justifyContent={'center'}
          >
            <Heading
              as={'h2'}
              fontSize={'1.5rem'}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              flexWrap={'wrap'}
              textAlign={['center', 'left']}
              gap={2}
              color={'secondary'}
            >
              <MdLocationOn />
              enter shop address, <Text color={'primary'}>shop city</Text>
            </Heading>

            <Text
              w={'inherit'}
              color={'#0c0c0c'}
              fontWeight={'bold'}
              textAlign={['center', null, null, 'left']}
            >
              Enter shop description. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Accusantium molestiae natus voluptatum soluta
              nam esse porro tenetur maxime deserunt quisquam asperiores ipsa
              nesciunt sed libero eum rem, sapiente, quibusdam itaque!
            </Text>
          </FullBox>
        </Box>
        <Box
          display={'flex'}
          w={'full'}
          flexDir={'column'}
          alignItems={'center'}
          justifyContent={'center'}
          gap={'3rem'}
        >
          <Heading as={'h2'} color={'secondary'}>
            Reviews area here
          </Heading>
          <Box className="scroll">
            <Box
              w={'300px'}
              className={'flip'}
              position={'relative'}
              height={'400px'}
              border={'2px solid #000'}
              borderRadius={'1rem'}
            >
              <Box className="front">
                <Image
                  width={'200px'}
                  height={'200px'}
                  src={'/images/15.png'}
                  alt={'coffee shop name review'}
                />
                <Heading as={'h3'} fontSize={'1.25rem'} color={'#000'}>
                  Reviewer&apos;s name
                </Heading>
              </Box>
              <Box className="back" color={'#000'}>
                <Heading as={'h3'} fontSize={'1.25rem'}>
                  Reviewer&apos;s name
                </Heading>
                <Text w={'290px'} padding={'1rem'}>
                  The review text. Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Adipisci repellat vero molestiae rem
                  tenetur! Voluptatem quo autem consectetur deserunt, assumenda
                  nesciunt eligendi doloremque, aspernatur dignissimos velit
                  adipisci quidem iure maiores!
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </FullBox>
    </FullBox>
  );
};

export default CoffeeStore;
