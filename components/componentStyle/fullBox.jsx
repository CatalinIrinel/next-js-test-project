import { Box, useStyleConfig } from '@chakra-ui/react';

export const FullBox = (props) => {
  const { variant, ...rest } = props;
  const styles = useStyleConfig('FullContainer', { variant });

  return <Box __css={styles} {...rest} />;
};
