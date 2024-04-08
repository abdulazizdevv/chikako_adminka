import { Box, BoxProps } from '@mui/material';
import { ReactNode } from 'react';

interface FooterProps extends BoxProps {
  children: ReactNode;
}

export default function Footer({ children, ...rest }: FooterProps) {
  return (
    <Box
      position='sticky'
      bottom={0}
      display='flex'
      justifyContent='flex-end'
      alignItems='center'
      px={2}
      py={1}
      gap={1}
      bgcolor='background.default'
      borderTop='1px solid rgb(229, 231, 235)'
      zIndex={10}
      style={{ width: '100%', position: 'fixed', left: 0, right: 0, bottom: 0 }}
      {...rest} // Spread the rest of the props
    >
      {children}
    </Box>
  );
}
