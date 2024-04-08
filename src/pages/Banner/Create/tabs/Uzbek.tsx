import { TextField } from '@mui/material';
import GalleryBanner from '../../../../components/GallerBanner/GallerBanner';

export const Uzbek = ({ formik }: any) => {
  return (
    <div className='flex items-start gap-8'>
      <GalleryBanner formik={formik} lang={'uz'} />
      <TextField
        id='outlined-basic'
        label='Url'
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
