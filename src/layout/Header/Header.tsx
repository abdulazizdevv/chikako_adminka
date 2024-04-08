import { Box } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
  text?: string;
  startPoint?: ReactNode;
  endPoint?: ReactNode;
}

const Header = ({ text, startPoint, endPoint }: Props) => {
  return (
    <Box component='header' sx={{ p: 2, backgroundColor: '#fff' }}>
      <div className='flex items-center justify-between'>
        {startPoint && <div>{startPoint}</div>}
        <h1 className='font-bold text-2xl'>{text}</h1>
        <div>{endPoint}</div>
      </div>
    </Box>
  );
};

export default Header;
