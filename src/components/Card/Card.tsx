import { Box } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
  title?: string;
  className?: string;
  children?: ReactNode;
}

export default function CardContent({ title, className, children }: Props) {
  return (
    <Box
      color='background.contrastText'
      bgcolor='background.default'
      className={className}
      // width={'100%'}
    >
      <p className='p-2 font-semibold'>{title}</p>
      <hr />
      <div>{children}</div>
    </Box>
  );
}
