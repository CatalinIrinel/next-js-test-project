import { Heading } from '@chakra-ui/react';
import React from 'react';
import Card from '../../components/Card';
import { FullBox } from '../../components/componentStyle/fullBox';
import { shopsData } from '../../components/data';

const CoffeeStores = () => {
  return (
    <FullBox variant={'container'}>
      <FullBox variant={'wrapper'} color={'#000'}>
        <Heading
          textAlign={'center'}
          textTransform={'capitalize'}
          letterSpacing={'4px'}
          as={'h1'}
          fontSize={['2.2rem', '4rem']}
          color={'secondary'}
        >
          coffee stores
        </Heading>
        <FullBox variant={'wrapper'} gap={'6rem'}>
          {
            //map through data.js to make the cards
            shopsData.map((shop) => (
              <Card key={shop.id} card={shop} />
            ))
          }
        </FullBox>
      </FullBox>
    </FullBox>
  );
};

export default CoffeeStores;
