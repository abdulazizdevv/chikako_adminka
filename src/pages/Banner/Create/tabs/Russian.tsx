import { TextField } from '@mui/material';
import GalleryBanner from '../../../../components/GallerBanner/GallerBanner';

export const Russian = ({ formik }: any) => {
  return (
    <div className='flex gap-8'>
      <GalleryBanner formik={formik} lang={'ru'} />
      <TextField
        id='outlined-basic'
        label='Name'
        name='url'
        variant='outlined'
        size='small'
        // className='w-1/2'
        value={formik.values?.url}
        onChange={(e) => formik.setFieldValue('url', e.target.value)}
      />
    </div>
  );
};
